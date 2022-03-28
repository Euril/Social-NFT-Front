import ChatHistoryCard from "./ChatHistoryCard";

const ChatHistoryContainer = ({activeChatHistory, profile, allChatHistories, upToDateProfiles, setActiveChatHistory}) => {
    //console.log('activeChat History',activeChatHistory)
    //console.log('allChatHistories', allChatHistories)
    return ( 
        <>
            <h1>Sanity check for ChatHistoryContainer</h1>
            <ul>
            {
                allChatHistories?.map(chatHistory => (
                    <li>
                        <ChatHistoryCard profile={profile} chatHistory={chatHistory} upToDateProfiles={upToDateProfiles} setActiveChatHistory={setActiveChatHistory} />
                    </li>
                ))
            }
            </ul>
        </>
     );
}
 
export default ChatHistoryContainer;