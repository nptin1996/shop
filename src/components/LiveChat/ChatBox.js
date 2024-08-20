import ManIcon from "./LiveChatIcon/ManIcon";
import classes from "./ChatBox.module.css";

function ChatBox(props) {
  const data = props.data;
  const listChat = data.map((ele, i) => (
    <li
      className={`${ele.type === "client" ? classes.client : ""} ${
        ele.type === "admin" ? classes.admin : ""
      } ${ele.type === "error" ? classes.error : ""}`}
      key={i}
    >
      {ele.type === "admin" && (
        <div>
          <ManIcon /> <p>{ele.content}</p>
        </div>
      )}
      {ele.type === "client" && <p>{ele.content}</p>}
      {ele.type === "error" && <p>{ele.content}</p>}
    </li>
  ));

  return <ul className={classes.chatBox}>{listChat}</ul>;
}

export default ChatBox;
