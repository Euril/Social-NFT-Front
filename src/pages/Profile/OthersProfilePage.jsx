import FollowUnfollowButton from "../../components/ProfilePageComponents/FollowUnfollowButton"
import { useState, useEffect } from "react"
import { follow } from "../../services/profileService"
import { useNavigate } from "react-router-dom"
import styles from './Profile.module.css'

function OthersProfilePage ({profiles, handleFollow, profToRender, loggedInUser, handleUnfollow, ourProfile}) {

  const navigate = useNavigate()
  // useEffect(()=>{
  //     console.log('profiles changed and/or page loaded', profiles)

  // },[profiles])
  
  const handleMessageButtonClick = () => {
    //console.log('sanity check - message button pressed')
    navigate(`/messages/${profToRender._id}`)
  }

  

  return (
    <div className={styles.profileContainer}>
            <div className={styles.header}>
              <div className={styles.profileImage}>
                <img 
                    src={`https://picsum.photos/id/237/150/150`} 
                    alt="Placeholder Avatar"
                  />
              </div>
              <div className={styles.profileTopBar}>
                <h1 className={styles.profileName}>{profToRender.name}</h1>  
                <button onClick={handleMessageButtonClick}>Message  </button>
                <FollowUnfollowButton handleUnfollow={handleUnfollow} handleFollow={handleFollow}  profToRender={profToRender} loggedInUser={loggedInUser} ourProfile={ourProfile}/>

              </div>
              <div className={styles.profileFollowersBar}>
                <ul>
                  <li>
                    <span className={styles.bolder}>{profToRender.following?.length}
                    </span> Following
                  </li>
                  <li>
                    <span className={styles.bolder}>{profToRender.followers?.length}
                    </span> Followers
                  </li>
                </ul>
              </div>
              
              <div className={styles.profileBio}>
                <p className={styles.bolder}>{profToRender.email}</p>
                <p>Place holder for Bio</p>
              </div>
          </div>
          
            <div className={styles.gallery}>
              <hr></hr>
                <div className={styles.galleryMenu}>
                  <h4>Posts</h4>
                  {/*⚠️ Placeholder for collections */}
                  <h4>Collections</h4>
                </div>
                <div className={styles.posts}>
                  {profToRender.posts?.map(post => (
                    <img src={`${post?.images}`} alt="profile post" />
                  ))}
                </div>
            </div>
    </div>
  )
}

export default OthersProfilePage