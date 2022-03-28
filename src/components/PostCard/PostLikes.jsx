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
  //console.log('likedbytemp: ',likedByTemp)
  
} 

return (
    <div className={styles.likesContainer}>
      
      <form onSubmit={handleLike} ref={likeFormElement}>
        <button name="likeButton" type="submit">Like</button>
      </form>
      <p>Likes: {likedBy.length}</p>
    </div>


)
}

export default PostLikes