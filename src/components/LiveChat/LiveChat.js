import { useState, useRef, useEffect } from "react";

// import { useLoaderData } from "react-router-dom";

import classes from "./LiveChat.module.css";
import Messenger from "./LiveChatIcon/Messenger";
import ChatBox from "./ChatBox";
import ManIcon from "./LiveChatIcon/ManIcon";
import IconFace from "./LiveChatIcon/IconFace";
import IconPaperClip from "./LiveChatIcon/IconPaperClip";
import IconPaperPlane from "./LiveChatIcon/IconPaperPlane";
import { fetchData } from "../../function";
import { io } from "socket.io-client";

function LiveChat() {
  // const { chatData } = useLoaderData();
  const [chatList, setChatList] = useState([]);
  const [status, setStatus] = useState("idle");
  const [chatId, setChatId] = useState(null);
  const [openChat, setOpenChat] = useState(false);

  const ref = useRef();
  const chatBoxRef = useRef(null);
  const toggleHanler = () => {
    setOpenChat((prevState) => !prevState);
  };

  const submidHanler = async (e) => {
    e.preventDefault();
    const message = ref.current.value.trim();
    if (!message) return;
    try {
      if (message === "/end") {
        setChatList([]);
        ref.current.value = "";
        return fetchData("chat/client", "DELETE", null);
      }
      const dataChat = {
        content: message,
      };
      console.log(dataChat);
      const res = await fetchData("chat/client", "POST", dataChat);
      console.log(res);
      if (res.ok) {
        ref.current.value = "";
        return setChatList((state) => {
          const newList = [...state, { ...dataChat, type: "client" }];
          return newList;
        });
      }
      throw new Error();
    } catch {
      setChatList((state) => {
        const newList = [
          ...state,
          { content: "Lỗi khi gửi chat.", type: "error" },
        ];
        return newList;
      });
    }
  };

  useEffect(() => {
    if (status === "succeeded" && chatId) {
      const socket = io(process.env.REACT_APP_API_URL);
      socket.connect(); // Kết nối socket nếu autoConnect: false
      socket.on(chatId, (data) => {
        if (data.action === "Admin Send Chat") {
          setChatList((state) => {
            const newList = [...state, { ...data.chatData }];
            return newList;
          });
        }
      });
      // Hủy kết nối khi component unmount hoặc khi chatId thay đổi
      return () => {
        socket.off(chatId);
        socket.disconnect(); // Ngắt kết nối socket
      };
    }
  }, [chatId, status]);

  // load chat data
  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await fetchData("chat/client", "GET", null);
        if (!response.ok) {
          throw new Error("Lỗi tải chat");
        }
        const data = await response.json();
        setStatus("succeeded");
        setChatList(data.chatList);
        setChatId(data.chatId);
      } catch (error) {
        setStatus("failed");
        setChatList((state) => {
          const newList = [...state, { content: error.message, type: "error" }];
          return newList;
        });
      }
    };
    fetchChat();
  }, []);

  // Tự động cuộn chat box khi có tin nhắn mới
  useEffect(() => {
    if (openChat) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [openChat, chatList]);

  return (
    <div className={classes.liveChat}>
      {openChat && (
        <div className={classes.chatContainer}>
          <p className={classes.title}>
            Customer Support<span>Let's Chat App</span>{" "}
          </p>
          <div className={classes.messageList} ref={chatBoxRef}>
            <ChatBox data={chatList} />
          </div>
          <form className={classes.form} onSubmit={submidHanler}>
            <ManIcon />
            <input
              type="text"
              name="message"
              placeholder="Enter Message!"
              defaultValue=""
              ref={ref}
            />
            <div className={classes.icon}>
              <IconPaperClip />
              <IconFace />
              <button className={classes.button}>
                <IconPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
      <div className={classes.iconContainer} onClick={toggleHanler}>
        <Messenger className={classes.iconMessenger} />
      </div>
    </div>
  );
}

export default LiveChat;
