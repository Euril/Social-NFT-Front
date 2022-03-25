import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/profileService";

const Profile = () => {
  const [profToRender, setProfToRender] = useState()
  const params = useParams()

  useEffect (()=>{
   // console.log('params in useEffect',params.email)
    getProfile(params.email).then(profile => setProfToRender(profile))
  }, [])

  
  
  

  return (
    <div>sanity check profile - {profToRender?.email}</div>
)

}

export default Profile