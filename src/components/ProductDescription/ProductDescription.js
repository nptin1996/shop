import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { fetchData, formatPrice } from "../../function.js";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import QuantityInput from "../QuantityInput/QuantityInput";
import classes from "./ProductDescription.module.css";
import { getUrl } from "../../function.js";

function ProductDescription(props) {
  const [showImg, setShowImg] = useState(0);
  const ref = useRef();
  const data = props.data;

  let defaultQuantity = data.cartQty;
  function handleIncrease() {
    ref.current.value = Number(ref.current.value) + 1;
  }

  function handleDecrease() {
    if (Number(ref.current.value) > 1) {
      ref.current.value = Number(ref.current.value) - 1;
    } else {
      ref.current.value = 1;
    }
  }

  const navigate = useNavigate();

  const handleAddCart = async () => {
    try {
      const res = await fetchData("cart", "POST", {
        productId: data._id,
        qty: Number(ref.current.value),
      });
      if (res.ok) {
        navigate("/cart");
      } else {
        alert("Thêm vào giỏ hàng thất bại.!");
      }
    } catch (error) {
      alert("Thêm vào giỏ hàng thất bại.!");
    }
  };

  return (
    <Row className="p-4">
      <Col md className="p-4">
        <div className={classes.imgList}>
          <div className={classes.pickImg}>
            {data.images.map((image, i) => (
              <img
                src={getUrl(image)}
                alt={data.name}
                key={i}
                onClick={() => setShowImg(i)}
                className={i === showImg ? classes.active : ""}
                crossOrigin="anonymous"
              />
            ))}
          </div>
          <div>
            <img
              src={getUrl(data.images[showImg])}
              alt={data.name}
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </Col>

      <Col md className={classes.text}>
        <h2>{data.name}</h2>
        <p>{formatPrice(data.price)}</p>
        <p>{data["shortDesc"]}</p>
        <h5>
          CATEGORY:<span>{data.category}s</span>
        </h5>

        <div className={classes.quantity}>
          <div className={classes.input}>
            <p>QUANTITY</p>
            <QuantityInput
              ref={ref}
              defaultValue={defaultQuantity}
              increaseClick={handleIncrease}
              decreaseClick={handleDecrease}
            />
          </div>
          <div>
            <Button onClick={handleAddCart}>Add to cart</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ProductDescription;
