// import styles from './ChatHistoryCard'
import styles from './Messages.module.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const ChatHistoryCard = ({chatHistory, profile, upToDateProfiles, setActiveChatHistory}) => {
  const [otherProfilesEmail, setOtherProfilesEmail] = useState()


  const getOtherProfilesEmail = () => {
  //  console.log('a;sldkas;ldksal;dkjaf: ', upToDateProfiles)
    //console.log('profile in getotherprofileemail: ', profile)
    let otherProfileID = chatHistory?.chatHistoryMembers.filter(memberID => memberID != profile._id)[0]
    //console.log('Other profile id!!!!!!!!!!!!!!!!!!!!: ',otherProfileID)
    let otherProfile = upToDateProfiles?.filter(prof => prof._id == otherProfileID)[0]
  //  console.log('other profile!!!!!!!!!!!!!!!',otherProfile.email)
    let otherProfileEmail = otherProfile?.email
    return otherProfileEmail
  }

  const handleClick = () => {
    //setActiveChatHistory()
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', chatHistory)
    setActiveChatHistory(chatHistory)
  }

  

  useEffect(()=>{
    let tempOtherProfilesEmail = getOtherProfilesEmail()
    if (tempOtherProfilesEmail) {
      setOtherProfilesEmail(tempOtherProfilesEmail)
    }
  },[chatHistory, upToDateProfiles])

  return (
    <div className={styles.chatHistoryCard}>
      <div >
        {/* placeholder for avatar */}
          <img 
            src={`https://picsum.photos/id/9/50/50`} 
            alt="Placeholder Avatar"
          />
      </div>
      <div>
         {
        otherProfilesEmail ?
        
          <div className={styles.chatHistoryNames} onClick={handleClick}>
              <Link to=''>{otherProfilesEmail}</Link>
              
          </div>
        
        :

          <></>
        }
      </div>
     
    </div>
  )
}

export default ChatHistoryCard