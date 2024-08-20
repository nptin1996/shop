import { redirect, json, Outlet } from "react-router-dom";
import { fetchData } from "../function";
import store from "../store/store";
import { userActions } from "../store/user";
function HistoryPage() {
  return <Outlet />;
}

export default HistoryPage;

export async function loader({ params }) {
  // lấy dữ liệu từ store redux
  const state = store.getState();
  const user = state.user;
  if (!user.isLogin) {
    alert("Đăng nhập mới có thể truy cập trang này.");
    return redirect("/login");
  }
  const orderId = params.orderId;
  try {
    const res = await fetchData("order/client", "GET", null);
    if (res.ok) {
      const data = await res.json();
      if (orderId) {
        const order = data.find((ele) => ele._id === orderId);
        if (!order) throw Error("Đơn hàng không tồn tại.");
        return order;
      }
      return data;
    }
    if (res.status === 401 || res.status === 403) {
      alert("Đăng nhập và thử lại.");
      store.dispatch(userActions.logout());
      return redirect("/login");
    }
    const data = await res.json();
    if (data.message) throw new Error(data.message);
    throw new Error();
  } catch (err) {
    throw json(
      { message: err.message ? err.message : "Tải history không thành công!" },
      { status: 222 }
    );
  }
}
