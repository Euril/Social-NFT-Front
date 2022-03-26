import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";
import { follow, unfollow } from "../../services/profileService";
import OthersProfilePage from "./OthersProfilePage";
import OurProfilePage from "./OurProfilePage";
import LoadedProfilePage from "./LoadedProfilePage";


const Profile = ({loggedInUser}) => {
  const [profToRender, setProfToRender] = useState()
  const [ourProfile, setOurProfile] = useState()
  const [profiles, setProfiles] = useState()
  //const params = useParams()
 //const [params, setParams] = useState(useParams())
  const location = useLocation()
  let otherEmail = location.pathname.split('/')[1]
  let ourEmail = loggedInUser.email
  console.log('Our Email in Profile Page: ',ourEmail)

  useEffect (()=>{
    console.log('other email',otherEmail)
    otherEmail = location.pathname.split('/')[1]
   // console.log('params in useEffect',params.email)
   
    getProfile(otherEmail).then(profile => setProfToRender(profile))
    getProfile(ourEmail).then(profile => {setOurProfile(profile)})
    
  }, [location])

  
  
  const handleFollow = evt => {
    evt.preventDefault()
    let followerEmail = loggedInUser.email
    let followeeEmail = otherEmail
    //console.log('!!', followerEmail)
    //console.log('followeeEmail: ',followeeEmail)
    follow(
      { 
        followerEmail : followerEmail, 
        followeeEmail : followeeEmail
      }
      
      ).then(profiles => setProfiles(profiles))
  }


  const handleUnfollow = evt => {
    evt.preventDefault()
    let followerEmail = loggedInUser.email
    let followeeEmail = otherEmail
    //console.log('!!', followerEmail)
    //console.log('followeeEmail: ',followeeEmail)
    unfollow(
      { 
        followerEmail : followerEmail, 
        followeeEmail : followeeEmail
      }
      
      ).then(profiles => setProfiles(profiles))
  }

  return (
    <>
      {
        
        profToRender && ourProfile ?

        <LoadedProfilePage handleFollow={handleFollow} handleUnfollow={handleUnfollow} ourProfile={ourProfile} loggedInUser={loggedInUser} profToRender={profToRender} />

        :

        <div>Loading</div>
      }
    </>
)

}

export default Profile