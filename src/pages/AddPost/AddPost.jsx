import { upload } from "@testing-library/user-event/dist/upload"
import { useState, useRef, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import styles from './AddPost.module.css'
import { useMoralis } from "react-moralis";
import { Moralis } from 'moralis'
// import { Button } from 'web3uikit'


const AddPost = ({profile, handleAddPost}) => {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  if (window.ethereum) {
      
  } else {

  }

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

    const checkFormData = (postFormData) => {
      for (let entry of postFormData.entries()) {
        console.log('entry: ', entry)
      }
    }
        
    if (!submitted) {
      setSubmitted(true)
      gogo()
      .then(tempIPFSURL => {postFormData.append('MetaDataURL', tempIPFSURL); checkFormData(postFormData); handleAddPost(postFormData)})
      //handleAddPost(postFormData)
    }

    //gogo()
  }

  const gogo = async () => {
    const image = await uploadImage()
    let returnedURL = await uploadMetadata(image)
    console.log('returnedURL: ',returnedURL)
    return returnedURL
  }
  
  const uploadImage = async () => {
    const data = formData.images
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
    return file._url
    //setFormData({...formData,IPFS_URL: file._url})
  }

  


  return (
    <>
      {
        handleAddPost ? 
      
    <div className={styles.container}>
      <div className={styles.header}> 
        <h1>Create New Post</h1>
        <hr></hr>
      </div>
      <div>
        {
          window.ethereum ?

        <form action="" ref={formElement} onSubmit={handleSubmit}>
          <input 
            type="file" 
            id="imageFile" 
            name="images" 
            onChange={handleChangePhoto} 
            className={styles.imageLabel} 
            required
          />
          <div className={styles.metamask}>
            
            <h4>
              Metamask Connection
            </h4>
            <button onClick={login}>Metamask Login</button>
            <button onClick={logOut}>Metamask Logout</button>
          </div>
          
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
          <button type="submit" >SHARE</button>
        </form>
        :

        <div>
          <h2>

          Please download MetaMask at <a href="http://metamask.io/download" target="_blank">metamask.io</a>
          </h2>
        </div>

      }
      </div>
    </div>
    :
    // fix loading page with cool animation gif
    <span className={styles.loading}>Loading...</span>
    }
    </>
  )
}

export default AddPost