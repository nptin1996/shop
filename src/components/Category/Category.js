import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import product1 from "../../resource/product_1.png";
import product2 from "../../resource/product_2.png";
import product3 from "../../resource/product_3.png";
import product4 from "../../resource/product_4.png";
import product5 from "../../resource/product_5.png";
import classes from "./Category.module.css";
import Title from "../Title/Title";

function Category() {
  const navigate = useNavigate();
  function handleShopPage() {
    navigate("/shop");
  }

  return (
    <div className={classes.category}>
      <Title
        text1="CAREFULLY CREATED COLLECTIONS"
        text2="BROWSE OUR CATEGORIES"
        align="center"
      />
      <Row>
        <Col sm className="mb-4">
          <img src={product1} alt={product1} onClick={handleShopPage} />
        </Col>
        <Col sm className="mb-4">
          <img src={product2} alt={product2} onClick={handleShopPage} />
        </Col>
      </Row>
      <Row>
        <Col sm className="mb-4">
          <img src={product3} alt={product3} onClick={handleShopPage} />
        </Col>
        <Col sm className="mb-4">
          <img src={product4} alt={product4} onClick={handleShopPage} />
        </Col>
        <Col sm className="mb-4">
          <img src={product5} alt={product5} onClick={handleShopPage} />
        </Col>
      </Row>
    </div>
  );
}

export default Category;
