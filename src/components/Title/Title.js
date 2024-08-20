import classes from "./Title.module.css";
function Title({ text1, text2, align = "start" }) {
  return (
    <div
      className={classes.title}
      style={{
        textAlign: align === "start" ? "start" : "center",
      }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}
export default Title;
