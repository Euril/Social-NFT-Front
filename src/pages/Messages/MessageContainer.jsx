import { useRef, useState, useEffect } from "react";

const MessageContainer = ({activeChatHistory, profile, handleAddMessage}) => {
    const formElement = useRef()
    const [formData, setFormData] = useState({author:profile._id, chatHistory: activeChatHistory?._id})



    const handleChange = (evt) => {
        setFormData({...formData, text: evt.target.value})    
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        formElement.current[0].value = ""
        //console.log('form element',formElement.current[0].value)
        handleAddMessage(formData)
        console.log('active Chat History !!!!!!!!!!!!', activeChatHistory)
        
    }

    useEffect(()=>{
        setFormData({...formData,author: profile._id, chatHistory: activeChatHistory?._id})
    },[profile, activeChatHistory])

    return ( 
        <div>
            <h1>showing messages container</h1>
            <h2>Num Messages: {activeChatHistory?.messages?.length}</h2>
            <ul>           
                {
                    activeChatHistory?.messages.map(message=>(
                        <li>Message Text: {message.text}</li>
                    ))
                }
            </ul>
            <form ref={formElement} onSubmit={handleSubmit}>
                Type your message: <input name="text" type="text" onChange={handleChange}/>
                <button type="submit" name="submit">submit</button>
            </form>
        </div>
     );
}
 
export default MessageContainer;