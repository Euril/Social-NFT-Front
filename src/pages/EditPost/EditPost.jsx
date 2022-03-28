import { useState, useRef, useEffect } from "react"
import { Navigate, useNavigate, useLocation } from "react-router-dom"
import styles from './EditPost.module.css'

const EditPost = ({profile, handleEditPost}) => {
  const formElement = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const post = location.state.post
  let submitted = false
 // console.log('handleEditPost', handleEditPost)
  

  let char=0
  const [formData, setFormData] = useState({
    images: "",
    caption: ""
  })

  const handleChange = evt => {
    //console.log('HANDLE CHANGE EVENT hitting', evt.target.value)
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
    postFormData.append('postID', post._id)
    handleEditPost(postFormData)
  }

  return (
    <>
    
    <div className={styles.container}>
      <div className={styles.header}> 
        <h1>Edit Post</h1>
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
            placeholder="Write a caption..." name="caption" className={styles.caption} maxLength='1000' onChange={handleChange}>{post.caption}</textarea> 
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default EditPost