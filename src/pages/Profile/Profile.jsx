import loading from '../loading.module.css'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";
import { follow, unfollow } from "../../services/profileService";
import OthersProfilePage from "./OthersProfilePage";
import OurProfilePage from "./OurProfilePage";
import LoadedProfilePage from "./LoadedProfilePage";


const Profile = ({loggedInUser, profile}) => {
  const [profToRender, setProfToRender] = useState()
  const [ourProfile, setOurProfile] = useState()
  const [profiles, setProfiles] = useState()

  const location = useLocation()
  let otherEmail = location.pathname.split('/')[1]
  let ourEmail = loggedInUser.email

  useEffect (()=>{
    otherEmail = location.pathname.split('/')[1]
   
    getProfile(otherEmail).then(profile => setProfToRender(profile))
    getProfile(ourEmail).then(profile => {setOurProfile(profile)})
    
  }, [location, profiles])

  
  
  const handleFollow = evt => {
    evt.preventDefault()
    let followerEmail = loggedInUser.email
    let followeeEmail = otherEmail
    follow(
      { 
        followerEmail : followerEmail, 
        followeeEmail : followeeEmail
      }
      
      ).then(profiles => {setProfiles(profiles); setProfToRender(profiles.followee); setOurProfile(profiles.follower)})
  }


  const handleUnfollow = evt => {
    evt.preventDefault()
    let followerEmail = loggedInUser.email
    let followeeEmail = otherEmail
    unfollow(
      { 
        followerEmail : followerEmail, 
        followeeEmail : followeeEmail
      }
      
      ).then(profiles => {setProfiles(profiles); setProfToRender(profiles.followee); setOurProfile(profiles.follower)})
  }

  return (
    <>
      {
        
        profToRender && ourProfile ?

        <LoadedProfilePage          
          setProfToRender={setProfToRender} 
          profiles={profiles} 
          handleFollow={handleFollow} 
          handleUnfollow={handleUnfollow} 
          ourProfile={ourProfile} 
          loggedInUser={loggedInUser} 
          profToRender={profToRender} 
          profile={profile}
        />

        :

        // <div>Loading</div>
        <div className={loading.loading}>
      <i class="fas fa-spinner fa-pulse fa-2x"></i>
    </div>
      }
    </>
)

}

export default Profile