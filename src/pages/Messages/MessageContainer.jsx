import { useRef, useState, useEffect } from "react";

const MessageContainer = ({activeChatHistory, profile, handleAddMessage}) => {
    const formElement = useRef()
    const [formData, setFormData] = useState({author:profile._id, chatHistory: activeChatHistory?._id})

    const handleChange = (evt) => {
        setFormData({...formData, text: evt.target.value})    
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleAddMessage(formData)
    }

    useEffect(()=>{
        setFormData({...formData,author: profile._id, chatHistory: activeChatHistory?._id})
    },[profile, activeChatHistory])

    return ( 
        <div>
            <h1>showing messages container</h1>
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