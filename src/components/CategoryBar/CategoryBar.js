import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import classes from "./CategoryBar.module.css";

function CategoryBar(props) {
  return (
    <>
      <h5 className={classes.title}>CATEGORIES</h5>
      <ul className={`d-none d-sm-block ${classes.categoryBar}`}>
        <li className={classes.headList}>APPLE</li>
        <li>
          <Link
            to="?category=all"
            className={props.category === "all" ? classes.active : ""}
          >
            ALL
          </Link>
        </li>

        <li className={classes.category}>IPHONE & MAC</li>
        <li>
          <Link
            to="?category=iphone"
            className={props.category === "iphone" ? classes.active : ""}
          >
            IPhone
          </Link>
        </li>
        <li>
          <Link
            to="?category=ipad"
            className={props.category === "ipad" ? classes.active : ""}
          >
            Ipad
          </Link>
        </li>
        <li>
          <Link
            to="?category=macbook"
            className={props.category === "macbook" ? classes.active : ""}
          >
            Macbook
          </Link>
        </li>

        <li className={classes.category}>WIRELESS</li>
        <li>
          <Link
            to="?category=airpod"
            className={props.category === "airpod" ? classes.active : ""}
          >
            Airpod
          </Link>
        </li>
        <li>
          <Link
            to="?category=watch"
            className={props.category === "watch" ? classes.active : ""}
          >
            Watch
          </Link>
        </li>

        <li className={classes.category}>OTHER</li>
        <li>
          <Link
            to="?category=mouse"
            className={props.category === "mouse" ? classes.active : ""}
          >
            Mouse
          </Link>
        </li>
        <li>
          <Link
            to="?category=keyboard"
            className={props.category === "keyboard" ? classes.active : ""}
          >
            Keyboard
          </Link>
        </li>
        <li>
          <Link
            to="?category=other"
            className={props.category === "other" ? classes.active : ""}
          >
            Other
          </Link>
        </li>
      </ul>
      <Accordion className={`d-sm-none ${classes.accordion}`}>
        <Accordion.Item eventKey="0" className={classes.accordion}>
          <Accordion.Header>
            <p>APPLE</p>
          </Accordion.Header>
          <Accordion.Body>
            <ul className={classes.categoryBar}>
              <li>
                <Link
                  to="?category=all"
                  className={props.category === "all" ? classes.active : ""}
                >
                  ALL
                </Link>
              </li>
              <li>
                <Link
                  to="?category=iphone"
                  className={props.category === "iphone" ? classes.active : ""}
                >
                  IPhone
                </Link>
              </li>
              <li>
                <Link
                  to="?category=ipad"
                  className={props.category === "ipad" ? classes.active : ""}
                >
                  Ipad
                </Link>
              </li>
              <li>
                <Link
                  to="?category=macbook"
                  className={props.category === "macbook" ? classes.active : ""}
                >
                  Macbook
                </Link>
              </li>
              <li>
                <Link
                  to="?category=airpod"
                  className={props.category === "airpod" ? classes.active : ""}
                >
                  Airpod
                </Link>
              </li>
              <li>
                <Link
                  to="?category=watch"
                  className={props.category === "watch" ? classes.active : ""}
                >
                  Watch
                </Link>
              </li>
              <li>
                <Link
                  to="?category=other"
                  className={props.category === "other" ? classes.active : ""}
                >
                  Other
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CategoryBar;
