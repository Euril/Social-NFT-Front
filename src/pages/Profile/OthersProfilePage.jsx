import FollowUnfollowButton from "../../components/ProfilePageComponents/FollowUnfollowButton"

function OthersProfilePage ({handleFollow, profToRender, loggedInUser, handleUnfollow, ourProfile}) {
  console.log('others profile page our profile: ', ourProfile)

  

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