import { upload } from "@testing-library/user-event/dist/upload"
import { useState, useRef, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import styles from './AddPost.module.css'
import { useMoralis } from "react-moralis";
import { Moralis } from 'moralis'
// import { Button } from 'web3uikit'


const AddPost = ({profile, handleAddPost}) => {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  // MetaMask Login
  const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(!user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  }

  // MetaMask Logout
  const logOut = async () => {
    await logout();
    console.log("logged out");
  }


  const formElement = useRef()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  let char=0
  const [formData, setFormData] = useState({
    images: "",
    caption: ""
  })


  const handleChange = evt => {
    // console.log('HANDLE CHANGE EVENT hitting', evt.target.value)
    setFormData({...formData, [evt.target.name]: evt.target.value})
    char= (evt.target.value)
  }

  const handleChangePhoto = (evt) => {
    setFormData({...formData, images: evt.target.files[0]})
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log('hello handle submit')
    const postFormData = new FormData()
    postFormData.append('images', formData.images)
    console.log("🚀 ~ formData.images", formData.images);
    postFormData.append('caption', formData.caption)
    // let image = formData.images[0]
    
    // await upload(image)
    
    if (!submitted) {
      setSubmitted(true)
      
      handleAddPost(postFormData)
    }

    gogo()
  }

  const gogo = async () => {
    console.log('running gogo function: ')
    const image = await uploadImage()
    let returnedAfterUpload = await uploadMetadata(image)
    console.log(returnedAfterUpload)
  }
  
  const uploadImage = async () => {
    //const data = document.getElementById('imageFile').value
    const data = formData.images
    console.log('hello world')
    console.log("🚀 ~ data", data);
    const file = new Moralis.File(data.name, data)
    await file.saveIPFS()

    console.log(file.ipfs(), file.hash())

    return file.ipfs()
  }

  //Upload metadata object: name caption image
  const uploadMetadata = async (imageUrl) => {

    const metadata ={
      "caption": formData.caption,
      "image": imageUrl
    }
    const file = new Moralis.File('file.json' , {base64: btoa(JSON.stringify(metadata))})
    await file.saveIPFS()
    console.log('uploaded object: ',file._url)
  }



  return (
    <>
    
    <div className={styles.container}>
      <div className={styles.header}> 
        <h1>Create New Post</h1>
        <hr></hr>
      </div>
      <div>
        <form action="" ref={formElement} onSubmit={handleSubmit}>
          <input 
            type="file" 
            id="imageFile" 
            name="images" 
            onChange={handleChangePhoto} 
            className={styles.imageLabel} 
            required
          />
          <button onClick={login}>Moralis Metamask Login</button>
          <button onClick={logOut}>Moralis Metamask Logout</button>
          
          <div>
            <textarea
              placeholder="Write a caption..." 
              name="caption" 
              id='metadataCaption'
              className={styles.caption} 
              maxLength='1000' 
              onChange={handleChange} 
            ></textarea> 
          </div>
          <button type="submit"  >SHARE</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddPost