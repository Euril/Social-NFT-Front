import FollowUnfollowButton from "../../components/ProfilePageComponents/FollowUnfollowButton"
import { useState, useEffect } from "react"
import { follow } from "../../services/profileService"

function OthersProfilePage ({profiles, handleFollow, profToRender, loggedInUser, handleUnfollow, ourProfile}) {
  console.log('others profile page our profile: ', ourProfile)

//   let followButtonText = !profToRender.followers?.includes(ourProfile._id) ? 'Follow' : 'Unfollow'

  // const [followState, setFollowState] = useState({
  //   profToRenderFollowers: profToRender.followers,
  //   profToRenderFollowing: profToRender.following,
  //   ourProfileFollowers: ourProfile.followers,
  //   ourProfileFollowing: ourProfile.following,
  // })

//   const [followStateChanged, setFollowStateChanged] = useState(false)

//   function getNumFollowersProfToRender () {
//     return followState.profToRenderfollowers ? followState.profToRenderfollowers.length : 0 
//   }

//   function getNumFollowingProfToRender () {
//     return followState.profToRenderfollowing ? followState.profToRenderfollowing.length : 0 
//   }

//   //let numFollowersProfToRender = getNumFollowersProfToRender()
//  // let numFollowingProfToRender = getNumFollowingProfToRender()

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
        </div>
    </div>
  )
}

export default OthersProfilePage