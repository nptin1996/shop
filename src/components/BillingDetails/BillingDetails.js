import { useNavigate, useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { Col, Row } from "react-bootstrap";
import TotalList from "./TotalList";
import classes from "./BillingDetails.module.css";
import { fetchData } from "../../function";

function BillingDetails() {
  const user = useSelector((state) => state.user);
  const cartList = useLoaderData();
  const total = cartList.reduce(
    (acc, ele) => acc + ele.product.price * ele.qty,
    0
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.isLogin) {
      alert("Vui lòng đăng nhập trước khi đặt hàng.");
      return navigate("/login");
    }
    const fd = new FormData(e.target);
    const dataOrder = Object.fromEntries(fd.entries());
    try {
      const res = await fetchData("order/client", "POST", dataOrder);
      if (res.ok) return navigate("/");
      if (res.status === 401 || res.status === 403) {
        dispatch(userActions.logout());
        alert("Đăng nhập và thử lại");
        return navigate("/login");
      }
      const data = await res.json();
      if (res.status === 420) {
        alert(data.message);
        return navigate("/cart");
      }
      if (data.message) return alert(data.message);
      throw new Error();
    } catch {
      alert(
        "Tạo đơn hàng không thành công,vui lòng thử lại sau hoặc liên hệ qua chat!"
      );
    }
  };

  return (
    <div className={classes.billing}>
      <h4>BILLING DETAILS</h4>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">FULL NAME:</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter Your Full Name Here!"
              defaultValue={user.isLogin ? user.data.name : ""}
            />
            <label htmlFor="email">EMAIL:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Your Email Here!"
              defaultValue={user.isLogin ? user.data.email : ""}
            />
            <label htmlFor="phone">PHONE NUMBER:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              required
              placeholder="Enter Your Phone Number Here!"
              defaultValue={user.isLogin ? user.data.phone : ""}
            />
            <label htmlFor="address">ADDRESS:</label>
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="Enter Your Address Here!"
            />
            <button>Place order</button>
          </form>
        </Col>
        <Col sm="5">
          <TotalList total={total} cartList={cartList} />
        </Col>
      </Row>
    </div>
  );
}

export default BillingDetails;
