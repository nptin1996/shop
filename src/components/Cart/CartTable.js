import { Col, Row } from "react-bootstrap";
import { formatPrice } from "../../function.js";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import CartBar from "./CartBar";
import IconGift from "../UI/IconGift";
import ArrowLeft from "../UI/ArrowLeft";
import ArrowRight from "../UI/ArrowRight";
import classes from "./CartTable.module.css";

function CartTable() {
  const navigate = useNavigate();
  const cartData = useLoaderData();

  const [items, setItems] = useState(cartData);

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  function handleChangeQty({ productId, qty }) {
    setItems((state) => {
      const newItems = [...state];
      const item = newItems.find((ele) => ele.product._id === productId);
      item.qty = qty;
      return newItems;
    });
  }

  function handleDelete(productId) {
    setItems((state) => state.filter((ele) => ele.product._id !== productId));
  }

  function gotoCheckout() {
    navigate("/checkout");
  }
  function gotoShop() {
    navigate("/shop");
  }

  return (
    <div className={classes.cart}>
      <h4>Shopping Cart</h4>

      <Row>
        <Col>
          <ul className={classes.cartItem}>
            <li>IMAGE</li>
            <li>PRODUCT</li>
            <li>PRICE</li>
            <li>QUANTITY</li>
            <li>TOTAL</li>
            <li>REMOVE</li>
          </ul>
          {items.map((ele) => (
            <CartBar
              data={ele}
              key={ele.product["_id"]}
              className={classes.cartItem}
              onChangeItem={handleChangeQty}
              onDeleteItem={handleDelete}
            />
          ))}
        </Col>
        <Col xl="3">
          <div className={classes.total}>
            <h4>CART TOTAL</h4>
            <div className={`${classes.border} ${classes.number}`}>
              <p>SUBTOTAL</p>
              <p>{formatPrice(total)}</p>
            </div>
            <div className={classes.number}>
              <p>TOTAL</p>
              <p>{formatPrice(total)}</p>
            </div>
            <div className={classes.input}>
              <input placeholder="Enter your coupon" />
              <Button>
                <IconGift />
                Apply coupon
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Col xl="9" className={classes.action}>
        <div>
          <span onClick={gotoShop}>
            <ArrowLeft />
            Continue shopping
          </span>
        </div>
        <div>
          <span className={classes.checkout} onClick={gotoCheckout}>
            Proceed to checkout
            <ArrowRight />
          </span>
        </div>
      </Col>
    </div>
  );
}

export default CartTable;
