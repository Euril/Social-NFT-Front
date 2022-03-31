import { Link } from "react-router-dom"
import styles from './PostCard.module.css'

const EditDeletePost = ({handlePostDelete, post}) => {

  return (
    <div className={styles.editDeletePost}>
      <span
        lassName={styles.edit}
      >
          <Link to="/editpost" state={{post}}>
            <i class="fa-solid fa-wrench"></i>
          </Link>
      </span>
      <span 
        onClick={handlePostDelete}
        className={styles.delete}
      >
        <i class="fa-solid fa-trash-can"></i>
      </span> 
    </div>
  )
}

export default EditDeletePost