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
    // let otherProfileEmail = otherProfile?.email

    //changed what this pulls, in now just pulls the entire other profile instead of just the email
    let otherProfileEmail = otherProfile
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
  )
}

export default ChatHistoryCard