import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";
import { follow } from "../../services/profileService";
import OthersProfilePage from "./OthersProfilePage";
import OurProfilePage from "./OurProfilePage";

const Profile = (props) => {
  const [profToRender, setProfToRender] = useState()
  const [profiles, setProfiles] = useState()
  //const params = useParams()
  const [params, setParams] = useState(useParams())

  useEffect (()=>{
   // console.log('params in useEffect',params.email)
    getProfile(params.email).then(profile => setProfToRender(profile))
    
  }, [params])

  
  
  const handleFollow = evt => {
    evt.preventDefault()
    let followerEmail = props.loggedInUser.email
    let followeeEmail = params.email
    //console.log('!!', followerEmail)
    //console.log('followeeEmail: ',followeeEmail)
    follow(
      { 
        followerEmail : followerEmail, 
        followeeEmail : followeeEmail
      }
      
      ).then(profiles => setProfiles(profiles))
  }

  return (
    <>
      {
        profToRender && props.loggedInUser.email === profToRender.email  ?

        <OurProfilePage loggedInUser={props.loggedInUser} profToRender={profToRender} />
        :

        profToRender ?
        <OthersProfilePage loggedInUser={props.loggedInUser} profToRender={profToRender} handleFollow={handleFollow}/>

        :

        <div>Loading</div>
      }
    </>
)

}

export default Profile