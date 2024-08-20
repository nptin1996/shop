import { formatPrice } from "../../function.js";
import classes from "./TotalList.module.css";

function TotalList(props) {
  const cartList = props.cartList;
  const total = props.total;
  return (
    <div className={classes.totalList}>
      <h4>YOUR ORDER</h4>
      <ul>
        {cartList.map((ele) => (
          <li key={ele.product._id}>
            {ele.product.name}
            <p>
              {formatPrice(ele.product.price)}
              <span> x {ele.qty}</span>
            </p>
          </li>
        ))}
        <li>
          TOTAL
          <p
            style={{
              color: "#000",
            }}
          >
            {formatPrice(total)}
          </p>
        </li>
      </ul>
    </div>
  );
}
export default TotalList;
