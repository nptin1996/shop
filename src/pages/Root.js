import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { fetchData } from "../function";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import LiveChat from "../components/LiveChat/LiveChat";

function Root() {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // useEffect tự động cuộn khi chuyển trang
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  // Chỉ cuộn lên đầu trang khi pathname thay đổi

  // check valid user khi khởi tạo ứng dụng nếu đã đăng nhập, tránh nhầm tk giữa các session hoặc người dùng chỉnh sửa local store
  useEffect(() => {
    const checkValidUser = async () => {
      try {
        const res = await fetchData(
          `auth/session?email=${user.data.email}`,
          "GET",
          null
        );
        if (res.ok) {
          const userData = await res.json();
          if (userData.isLogin) {
            return dispatch(userActions.login(userData.data));
          }
          return dispatch(userActions.logout());
        }

        if (res.status === 422) return dispatch(userActions.logout()); // 422 = lỗi dữ liệu, ai đó sửa local store
        throw new Error();
      } catch (err) {
        return console.error(err); // lỗi chỉ xảy ra nếu k có internet or server ngừng hoạt động => không cần làm gì khi có lỗi
      }
    };
    if (user.isLogin) {
      checkValidUser();
    }
  }, []);
  return (
    <>
      <MainNavigation />
      <Container fluid="md">
        <Outlet />
      </Container>
      <LiveChat />
      <Footer />
    </>
  );
}

export default Root;
