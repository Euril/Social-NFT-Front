import { Link } from "react-router-dom"

const EditDeletePost = ({handlePostDelete, post}) => {

  

  return (
    <>
      <span><Link to="/editpost" state={{post}}>edit</Link></span>
      <span onClick={handlePostDelete}>delete</span> 
    </>
  )
}

export default EditDeletePost