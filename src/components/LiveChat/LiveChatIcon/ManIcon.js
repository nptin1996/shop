import img from "../../../resource/businessman.png";
import classes from "./ManIcon.module.css";

function ManIcon() {
  return (
    <div className={classes.manIcon}>
      <img src={img} alt="man icon" />
    </div>
  );
}

export default ManIcon;
