import { useRef } from "react";
import { formatPrice, fetchData, getUrl } from "../../function.js";
import QuantityInput from "../QuantityInput/QuantityInput";
import IconDelete from "../UI/IconDelete";
import classes from "./CartBar.module.css";
import { useNavigate } from "react-router-dom";

function CartBar(props) {
  const ref = useRef();
  const data = props.data;
  const navigate = useNavigate();
  let backup;

  async function fetchCart(dataFetch, method = "POST") {
    const res = await fetchData("cart", method, dataFetch);
    if (res.ok) {
      if (method === "POST") {
        ref.current.value = dataFetch.qty;
        return props.onChangeItem(dataFetch);
      }

      if (method === "DELETE") return props.onDeleteItem(data.product._id);
    }
    throw new Error();
  }

  // hàm điều khiển tăng giảm
  async function handleIncrease() {
    try {
      await fetchCart({
        productId: data.product._id,
        qty: Number(ref.current.value) + 1,
      });
    } catch {
      alert("Cập nhật giỏ hàng không thành công.!");
    }
  }

  async function handleDecrease() {
    try {
      if (Number(ref.current.value) > 1) {
        await fetchCart({
          productId: data.product._id,
          qty: Number(ref.current.value) - 1,
        });
      } else {
        ref.current.value = 1;
      }
    } catch {
      alert("Cập nhật giỏ hàng không thành công.!");
    }
  }

  // hàm on change input
  async function hanleOnChange(e) {
    try {
      const quantityInput = Number(e.target.value);
      if (quantityInput >= 1) {
        await fetchCart({
          productId: data.product._id,
          qty: quantityInput,
        });
      }
    } catch {
      alert("Cập nhật giỏ hàng không thành công.!");
      navigate(0);
    }
  }

  // hàm xóa item
  async function handleDelete() {
    try {
      await fetchCart(
        {
          productId: data.product._id,
        },
        "DELETE"
      );
    } catch {
      alert("Cập nhật giỏ hàng không thành công.!");
      navigate(0);
    }
  }

  return (
    <ul className={`${props.className} ${classes.cartBar}`}>
      <li>
        <img
          src={getUrl(data.product.images[0])}
          alt={data.product.name}
          crossOrigin="anonymous"
        />
      </li>
      <li>
        <h6>{data.product.name}</h6>
      </li>
      <li>
        <p>{formatPrice(data.product.price)}</p>
      </li>
      <li>
        <QuantityInput
          defaultValue={props.data.qty}
          ref={ref}
          increaseClick={handleIncrease}
          decreaseClick={handleDecrease}
          onChangeInput={hanleOnChange}
        />
      </li>
      <li>
        <p>{formatPrice(data.qty * data.product.price)}</p>
      </li>
      <li className={classes.icon}>
        <IconDelete onClick={handleDelete} />
      </li>
    </ul>
  );
}
export default CartBar;
