import styles from './ChatHistoryContainer.module.css'
import ChatHistoryCard from "./ChatHistoryCard";

const ChatHistoryContainer = ({activeChatHistory, profile, allChatHistories, upToDateProfiles, setActiveChatHistory}) => {
    return ( 
        <div className={styles.ChatHistoryContainer}>
            <div>
                <h1 className={styles.chatHistoryTitle}>Messages</h1> 
            </div>
            <div className={styles.chatCard}>
                {
                    allChatHistories?.map(chatHistory => (
                        <div>
                            <ChatHistoryCard 
                                profile={profile} 
                                chatHistory={chatHistory} 
                                upToDateProfiles={upToDateProfiles} 
                                setActiveChatHistory={setActiveChatHistory} 
                            />
                        </div>
                    ))
                }
            </div>
            
        </div>
     );
}
 
export default ChatHistoryContainer;