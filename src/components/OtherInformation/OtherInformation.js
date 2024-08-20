import { Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import Information from "./Information";
import classes from "./OtherInformation.module.css";

function OtherInformation() {
  return (
    <div className={classes.other}>
      <Row className={classes.shipCol}>
        <Col className="d-flex justify-content-center">
          <Information text1="FREE SHIPPING" className={classes.information} />
        </Col>

        <Col className="d-flex justify-content-center">
          <Information text1="24 X 7 SERVICE" className={classes.information} />
        </Col>

        <Col md="4" className="d-flex justify-content-center">
          <Information text1="FESTIVAL OFFER" className={classes.information} />
        </Col>
      </Row>

      <Row className="align-items-center my-5">
        <Col sm>
          <Information
            text1="LET'S BE FRIENDS!"
            text2="Nisi nisi tempor consequat laboris nisi."
            className={`${classes.information} ${classes.title}`}
          />
        </Col>

        <Col sm>
          <form className={classes.form}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <Button>Subscribe</Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default OtherInformation;
