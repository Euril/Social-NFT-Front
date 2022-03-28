import styles from './MessageContainer.module.css'
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
        <div className={styles.messageContainer}>
            <div>
            </div>
            <div>
               <div className={styles.messageText}>           
                {
                    activeChatHistory?.messages.map(message=>(
                        <div>{message.text}</div>
                    ))
                }
                </div>  
            </div>
           <div className={styles.messageSubmit}>
               <form ref={formElement} onSubmit={handleSubmit}>
                <input 
                    name="text" 
                    type="text" 
                    onChange={handleChange}
                    placeholder="Message..."
                    autoComplete='off'
                    autoFocus='true'
                />
                {/* <button type="submit" name="submit">submit</button> */}
            </form>
                
           </div>
            
        </div>
     );
}
 
export default MessageContainer;