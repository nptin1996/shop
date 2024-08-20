import { Link } from "react-router-dom";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <Link
      className={
        props.className
          ? `${props.className} ${classes.button}`
          : classes.button
      }
      to={props.to ? props.to : "?"}
      onClick={props.onClick ? props.onClick : undefined}
    >
      {props.children}
    </Link>
  );
}

export default Button;
