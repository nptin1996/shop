import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import Button from "../Button/Button";
import { splitString } from "../../function";
import classes from "./RelatedProducts.module.css";
function RelatedProducts(props) {
  const navigate = useNavigate();

  return (
    <div className={classes.related}>
      <Button>Description</Button>
      <h4>Product Description</h4>
      <ul className={classes.list}>
        <li>Đặt điểm kỹ thuật:</li>
        {splitString(props.data).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h4 className={classes.relatedTitle}>Related Products</h4>
      <ul>
        {props.relatedList.map((ele, i) => {
          // hàm chuyển trang
          const handleOnClick = () => {
            navigate(`/detail/${ele["_id"]}`);
          };
          return (
            <ProductItem
              data={ele}
              key={i}
              onClick={handleOnClick}
              className={classes.item}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RelatedProducts;
