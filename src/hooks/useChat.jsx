import { useEffect, useState } from "react";
import { CHAT_POLL_INTERVAL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, generateRandomComment } from "../utils/helper";

const useChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const sendChat = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Ruban", message: liveMessage }));
    setLiveMessage("");
  };

  useEffect(() => {
    const chatPoll = setInterval(() => {
      // API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment().slice(0, 20),
        })
      );
    }, CHAT_POLL_INTERVAL);
    return () => clearInterval(chatPoll);
  }, []);

  return { chatMessages, sendChat, liveMessage, setLiveMessage };
};

export default useChat;
