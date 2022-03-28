import styles from './CommentCard.module.css'
import { toggleLike } from "../../services/commentService"
import { useState } from "react"

const CommentCard = ({comment, postID, profileID}) => {

  const [commentLikedBy, setCommentLikedBy] = useState(comment.likedBy)

  const handleCommentLike = () => {
    toggleLike({commentID: comment._id, postID, profileID})
    .then(tempCommentLikedBy => setCommentLikedBy(tempCommentLikedBy))
}

  return (
    <li>
      <div className={styles.commentCard}>
          <div className={styles.comment}>
            <h4><span className={styles.author}>{comment.author}: </span> {comment.text} </h4>
          </div>
          <div className={styles.commentLike}>
             <button  onClick={handleCommentLike}><i class="fa-regular fa-thumbs-up"></i></button>
            <h4>{commentLikedBy.length}</h4>
          </div>        
        </div>
    </li>
        
  )

}

export default CommentCard