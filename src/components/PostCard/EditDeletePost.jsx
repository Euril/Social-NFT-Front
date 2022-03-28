import { Link } from "react-router-dom"
import styles from './PostCard.module.css'

const EditDeletePost = ({handlePostDelete, post}) => {

  

  return (
    <>
      <span><Link to="/editpost" state={{post}}>edit</Link></span>
      <span 
        onClick={handlePostDelete}
        className={styles.delete}
      >
        <i class="fa-solid fa-trash-can"></i>
      </span> 
    </>
  )
}

export default EditDeletePost