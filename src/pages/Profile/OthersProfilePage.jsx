import FollowUnfollowButton from "../../components/ProfilePageComponents/FollowUnfollowButton"
import { useState, useEffect } from "react"
import { follow } from "../../services/profileService"

function OthersProfilePage ({profiles, handleFollow, profToRender, loggedInUser, handleUnfollow, ourProfile}) {

  useEffect(()=>{
      console.log('profiles changed and/or page loaded', profiles)

  },[profiles])

  

  return (
    <div>
          <FollowUnfollowButton handleUnfollow={handleUnfollow} handleFollow={handleFollow}  profToRender={profToRender} loggedInUser={loggedInUser} ourProfile={ourProfile}/>
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