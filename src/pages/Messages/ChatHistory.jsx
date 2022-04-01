import styles from './Messages.module.css'
import ChatHistoryContainer from "./ChatHistoryContainer";

const ChatHistory = () => {
  return ( 
    <div className={styles.chatHistory}>
      <h1>This is Chat History</h1>
      <ChatHistoryContainer />
    </div>
   );
}
 
export default ChatHistory;