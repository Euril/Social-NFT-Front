import FollowUnfollowButton from "../../components/ProfilePageComponents/FollowUnfollowButton"
import { useState, useEffect } from "react"
import { follow } from "../../services/profileService"
import { useNavigate } from "react-router-dom"

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
    <div>
          <FollowUnfollowButton handleUnfollow={handleUnfollow} handleFollow={handleFollow}  profToRender={profToRender} loggedInUser={loggedInUser} ourProfile={ourProfile}/>
          <button onClick={handleMessageButtonClick}>Message  </button>
          <div>
            <h3>Name: {profToRender.name}</h3>  
            <h3>Email: {profToRender.email}</h3>
            <h3>Following: {profToRender.following?.length}</h3>
            <h3>Followers: {profToRender.followers?.length}</h3>
            {profToRender.posts?.map(post => (
              <img src={`${post?.images}`} alt="profile post" />
            ))}
        </div>
    </div>
  )
}

export default OthersProfilePage