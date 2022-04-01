import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import {toggleLike} from '../../services/postService.js'
import styles from './PostLikes.module.css'

function PostLikes ({post, profile}) {

const likeFormElement = useRef()
const [likedBy, setLikedBy] = useState(post.likedBy)

const handleLike = evt => {
  evt.preventDefault()
  toggleLike({
    profileID: profile._id,
    postID: post._id
  }).then(likedByTemp => setLikedBy(likedByTemp))
} 

return (
    <div className={styles.likesContainer}>
      <p><span className={styles.likes}>Likes </span>{likedBy.length}</p>
      
      <form onSubmit={handleLike} ref={likeFormElement}>
        <button className={styles.likeButton}name="likeButton" type="submit">Like</button>
      </form>
      
    </div>


)
}

export default PostLikes