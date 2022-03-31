import styles from './Messages.module.css'
import { useRef, useState, useEffect } from "react";

const MessageContainer = ({activeChatHistory, profile, handleAddMessage}) => {
    const formElement = useRef()
    const [formData, setFormData] = useState({author:profile._id, chatHistory: activeChatHistory?._id})



    const handleChange = (evt) => {
        setFormData({...formData, text: evt.target.value})    
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        formElement.current[0].value = ""
        //console.log('form element',formElement.current[0].value)
        let returnMessage = await handleAddMessage(formData)
        console.log('Return Message is: ', returnMessage)
        console.log('active Chat History !!!!!!!!!!!!', activeChatHistory)
        
    }

    useEffect(()=>{
        setFormData({...formData,author: profile._id, chatHistory: activeChatHistory?._id})
    },[profile, activeChatHistory])

    return ( 
        <div className={styles.messageContainer}>
            <div className={styles.messageHeader}>
                <h3>Messages</h3>
            </div>
            <div>
               <div className={styles.messageBody}>           
                {
                    activeChatHistory?.messages.map(message=>(
                        <>
                        
                        <div>
                        <h6>{message.date.slice(0,10)}</h6>
                        {/* <img src={message?.author.profilePicture} alt='pic'/>   */}
                        
                        </div>
                            {message.author !== profile._id ?
                        <div className={styles.Left}>
                            {/* <h5>{message.author}</h5> */}
                            <p>{message.text}</p>
                        </div>
                        :
                        <div className={styles.Right}>
                            <p>{message.text}</p>
                        </div>
                            }
                        </>
                    ))
                }
                </div>  
            </div>
           <div className={styles.messageFooter}>
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