import { forwardRef } from "react";
import IconDecrease from "../UI/IconDecrease";
import IconIncrease from "../UI/IconIncrease";
import classes from "./QuantityInput.module.css";

const QuantityInput = forwardRef(function (props, ref) {
  return (
    <div
      className={
        props.className ? `${props.className} ${classes.ipnut}` : classes.input
      }
    >
      <IconDecrease onClick={props.decreaseClick} />
      <input
        type="number"
        className={classes.noSpinners}
        defaultValue={props.defaultValue ? props.defaultValue : 1}
        min={1}
        ref={ref}
        onChange={props.onChangeInput ? props.onChangeInput : undefined}
      />
      <IconIncrease onClick={props.increaseClick} />
    </div>
  );
});

export default QuantityInput;
