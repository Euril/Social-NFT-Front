const ChatHistoryContainer = ({profile}) => {
    return ( 
        <>
            <h1>Sanity check for ChatHistoryContainer</h1>
            <ul>
            {
                profile.chatHistories?.map(chatHistory => (
                    <li>sanity check - chat history</li>
                ))
            }
            </ul>
        </>
     );
}
 
export default ChatHistoryContainer;