import classes from "./ProductItem.module.css";
import { formatPrice, getUrl } from "../../function.js";

function ProductItem(props) {
  return (
    <li
      className={
        props.className
          ? `${classes.productItem} ${props.className}`
          : classes.productItem
      }
      onClick={props.onClick}
    >
      <img
        src={getUrl(props.data.images[0])}
        alt={props.data.name}
        crossOrigin="anonymous"
      />
      <p>{props.data.name}</p>
      <p>{formatPrice(props.data.price)}</p>
    </li>
  );
}

export default ProductItem;
