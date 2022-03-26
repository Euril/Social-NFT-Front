import { useState, useRef, useEffect } from "react"

const AddPost = ({profile, handleAddPost}) => {
  const formElement = useRef()


  const [formData, setFormData] = useState({
    images: "",
    caption: ""
  })


  const handleChange = evt => {
    console.log(evt.target.value)
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleChangePhoto = (evt) => {
    setFormData({...formData, images: evt.target.files[0]})
  }


  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('hi')
		const postFormData = new FormData()
		postFormData.append('images', formData.images)
    postFormData.append('caption', formData.caption)
    console.log('sanity check - in add post - handle submit')
    console.log('post form data: ', postFormData)
    handleAddPost(postFormData)
    console.log('form Data in addpost', formData)
    console.log(formData.caption)
  }

  return (
    <div>
      <form action="" ref={formElement} onSubmit={handleSubmit} >
        <input type="file" name="images" onChange={handleChangePhoto} required/>
        <input type="text" placeholder="caption" name="caption" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
  
    </div>
  )
}

export default AddPost