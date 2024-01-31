import React from "react";
import ChatMessage from "./message/ChatMessage";
import useChat from "../../../../hooks/useChat";
import { useSelector } from "react-redux";

const LiveChat = () => {
  const { chatMessages, sendChat, liveMessage, setLiveMessage } = useChat();
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div className="w-full">
      <div
        className={
          "h-[560px] ml-2 p-2 border border-b-0 rounded-t-lg overflow-y-scroll flex flex-col-reverse" +
          (darkTheme
            ? " bg-darkModeGray text-darkModeLightGray border-darkModeLightGray"
            : " bg-slate-100 border-black")
        }
      >
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
      </div>
      <form
        className={
          "h-[40px] p-2 ml-2 border border-t-0 flex rounded-b-lg" +
          (darkTheme ? " border-darkModeLightGray" : " border-black")
        }
        onSubmit={sendChat}
      >
        <input
          type="text"
          className={
            "px-2 w-60" +
            (darkTheme
              ? " bg-darkModeGray text-darkModeLightGray"
              : " bg-slate-100")
          }
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className={
            "px-2 mx-2" +
            (darkTheme ? " bg-green-300 text-black" : " bg-green-100")
          }
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
