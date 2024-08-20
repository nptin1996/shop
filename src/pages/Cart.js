import Header from "../components/Header/Header";
import CartTable from "../components/Cart/CartTable";
import { fetchData } from "../function";
import { json } from "react-router-dom";
function CartPage() {
  return (
    <>
      <Header title="CART" />
      <CartTable />
    </>
  );
}

export default CartPage;

export async function loader() {
  try {
    const res = await fetchData("cart", "GET", null);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data;
  } catch {
    throw json({ message: "Tải giỏ hàng thất bại" }, { status: 222 });
  }
}
