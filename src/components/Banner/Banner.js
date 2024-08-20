import img from "../../resource/banner1.jpg";
import classes from "./Banner.module.css";
import Button from "../Button/Button";

function Banner() {
  return (
    <div className={classes.banner} style={{ backgroundImage: `url(${img})` }}>
      <div className={classes.text}>
        <p>NEW INSPIRATION 2020</p>
        <h1>20% OFF ON NEW SEASON</h1>
        <Button>Browse collections</Button>
      </div>
    </div>
  );
}

export default Banner;
