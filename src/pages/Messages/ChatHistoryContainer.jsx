//import styles from './ChatHistoryContainer.module.css'
import styles from './Messages.module.css'
import ChatHistoryCard from "./ChatHistoryCard";
import React from 'react';

const ChatHistoryContainer = ({activeChatHistory, profile, allChatHistories, upToDateProfiles, setActiveChatHistory}) => {
    return ( 
        <React.Fragment  key={profile._v}>
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
                                    key={profile._v}
                                />
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </React.Fragment>
     );
}
 
export default ChatHistoryContainer;