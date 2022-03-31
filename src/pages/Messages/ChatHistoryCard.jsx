import styles from './Messages.module.css'
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const ChatHistoryCard = ({chatHistory, profile, upToDateProfiles, setActiveChatHistory}) => {
  const [otherProfilesEmail, setOtherProfilesEmail] = useState()

  const getOtherProfilesEmail = () => {
    let otherProfileID = chatHistory?.chatHistoryMembers.filter(memberID => memberID != profile._id)[0]
    let otherProfile = upToDateProfiles?.filter(prof => prof._id == otherProfileID)[0]
    let otherProfileEmail = otherProfile
    return otherProfileEmail
  }

  const handleClick = () => {
    setActiveChatHistory(chatHistory)
  }

  useEffect(()=>{
    let tempOtherProfilesEmail = getOtherProfilesEmail()
    if (tempOtherProfilesEmail) {
      setOtherProfilesEmail(tempOtherProfilesEmail)
    }
  },[chatHistory, upToDateProfiles])

  return (

//     <React.Fragment  key={profile._v}>
//       <div className={styles.chatHistoryCard}>
//         <div >
//           {/* placeholder for avatar */}
//           <img src={otherProfilesEmail?.profilePicture} alt='profile'/>
//         </div>
//         <div>
//           {
//           otherProfilesEmail ?
          
//             <div className={styles.chatHistoryNames} onClick={handleClick}>
//                 <Link to=''>{otherProfilesEmail?.email}</Link>
                
//             </div>
          
//           :

//             <></>
//           }
//         </div>
      
//       </div>
//     </React.Fragment>
<React.Fragment  key={profile._v}>
    <Link to=''>
    <div className={styles.chatHistoryCard}>
      <div >
        <img src={otherProfilesEmail?.profilePicture} alt='profile'/>
      </div>
      <div>
         {
        otherProfilesEmail ?
        
          <div className={styles.chatHistoryNames} onClick={handleClick}>
              {otherProfilesEmail?.email}
              
          </div>
        
        :

          <></>
        }
      </div>
     
    </div>
    </Link>
    </React.Fragment>
  )
}

export default ChatHistoryCard