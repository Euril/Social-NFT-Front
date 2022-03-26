import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";
import { follow } from "../../services/profileService";

const Profile = (props) => {
  const [profToRender, setProfToRender] = useState()
  const [profiles, setProfiles] = useState()
  const params = useParams()

  useEffect (()=>{
   // console.log('params in useEffect',params.email)
    getProfile(params.email).then(profile => setProfToRender(profile))
    
  }, [])

  
  
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
    <div>sanity check profile - {profToRender?.email}</div>
    <div>{profToRender?.name}</div>
    {/* <div>followers {profiles?.following?.length}</div> */}
    

    <form action="" onSubmit={handleFollow}>
      <button type="submit">Follow</button>
    </form>
    
    </>
)

}

export default Profile