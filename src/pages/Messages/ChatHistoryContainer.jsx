//import styles from './ChatHistoryContainer.module.css'
import styles from './Messages.module.css'
import ChatHistoryCard from "./ChatHistoryCard";

const ChatHistoryContainer = ({activeChatHistory, profile, allChatHistories, upToDateProfiles, setActiveChatHistory}) => {
    return ( 
        <div className={styles.ChatHistoryContainer}>
            <div className={styles.chatHeader}>
                <h3>{profile.name}</h3> 
            </div>
            <div >
                {
                    allChatHistories?.map(chatHistory => (
                        <div className={styles.chatHistories}>
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