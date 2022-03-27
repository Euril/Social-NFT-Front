import ChatHistoryContainer from "./ChatHistoryContainer"
import MessageContainer from "./MessageContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getChatHistories } from "../../services/messageService"

//console.log('hello world')

const Messages = ({ profile }) => {
  const [allChatHistories, setAllChatHistories] = useState()
  //const [activeChatHistory, setActiveChatHistory] = useState()
  let params = useParams()
  
  
  useEffect(()=>{
   console.log('about to call get chathistories')
   getChatHistories()
   .then(tempAllChatHistories => console.log('our received chat histories: ', tempAllChatHistories))
    //.then(tempAllChatHistories => setAllChatHistories(tempAllChatHistories))
 },[params])
  console.log('our params: ', params)

  return (
    <div>
      <ChatHistoryContainer profile={profile} />
      <MessageContainer />
    </div>
  )
}

export default Messages