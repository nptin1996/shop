import classes from "./Header.module.css";
function Header(props) {
  return (
    <div className={classes.header}>
      <h3>{props.title}</h3>
      {props.title !== "CHECKOUT" ? (
        <p>{props.title}</p>
      ) : (
        <p>
          <span>HOME / </span>
          <span>CART / </span>
          <span>{props.title}</span>
        </p>
      )}
    </div>
  );
}

export default Header;
