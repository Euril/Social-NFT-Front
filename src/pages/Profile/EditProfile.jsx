import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './EditProfileForm.module.css'
import * as profileService from '../../services/profileService'
import Profile from './Profile'

const EditProfile = ({loggedInUser, profile, setProfile}) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    bio: profile?.bio,
    profilePicture: profile?.profilePicture,
  })


  const handleSubmit = async e => {
    e.preventDefault()
    let profileFormData = new FormData()
    profileFormData.append('bio', formData.bio)
    profileFormData.append('profilePicture', formData.profilePicture)
    //console.log('formData', profileFormData.entries().next())
    let returnedProfile = await profileService.updateProfile(profileFormData)
    setProfile({...returnedProfile, navigateTo: `/${profile.email}`})
    //navigate()
    //console.log('returned profile:', returned)
  }

  const handleChangePhoto = (evt) => {
    //console.log(evt.target.files[0])
    setFormData({...formData, profilePicture: evt.target.files[0]})
  }

  const handleChangeBio = (evt) => {
    //console.log(evt.target.files[0])
    setFormData({...formData, bio: evt.target.value})
  }



  useEffect(()=>{
    //console.log('formData in useEffect: ',formData)
  }, [formData])

  //const { bio, profilePicture } = formData

 


  return (
    <form
      onSubmit={handleSubmit}
      className={styles.container}
      ref={formElement}
    >
      <h1>Edit Profile</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="bioInput" className={styles.label}>Bio:</label>
        <textarea onChange={handleChangeBio} name="bio" minLength={1} id="bioInput">{profile.bio}</textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="profilePictureFile" className={styles.label}>Upload Profile Picture: </label>
        <input
          type="file"
          id="profilePictureFile"
          name="profilePicture"
          onChange={handleChangePhoto}
        />
      </div>
      <div className={styles.inputContainer}>
        <button  type="submit" className={styles.button}>
          Submit Changes
        </button>
      </div>
    </form>
  )
}

export default EditProfile
