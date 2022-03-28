import { useState, useRef, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import styles from './AddPost.module.css'

const AddPost = ({profile, handleAddPost}) => {
  const formElement = useRef()
  const navigate = useNavigate()

  let char=0
  const [formData, setFormData] = useState({
    images: "",
    caption: ""
  })

  const handleChange = evt => {
    console.log('HANDLE CHANGE EVENT hitting', evt.target.value)
    setFormData({...formData, [evt.target.name]: evt.target.value})
    char= (evt.target.value)
  }

  const handleChangePhoto = (evt) => {
    setFormData({...formData, images: evt.target.files[0]})
  }


  const handleSubmit = evt => {
    evt.preventDefault()
		const postFormData = new FormData()
		postFormData.append('images', formData.images)
    postFormData.append('caption', formData.caption)
    handleAddPost(postFormData)
    // navigate('/')
    // ☝️ doesnt show new post in landing page if navigated to, doesn't have the updated state of posts
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
          <input type="file" id="imageFile" name="images" onChange={handleChangePhoto} className={styles.imageLabel} required/>
          {/* <div>
            <input type="text" placeholder="Write a caption..." name="caption" onChange={handleChange} className={styles.caption} /> 
          </div> */}
          <div>
            <textarea
            placeholder="Write a caption..." name="caption" className={styles.caption} maxLength='1000' onChange={handleChange} ></textarea> 
          </div>
          <button type="submit">SHARE</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddPost