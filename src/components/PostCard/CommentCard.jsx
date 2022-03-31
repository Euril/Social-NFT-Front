import styles from './CommentCard.module.css'
import { toggleLike } from "../../services/commentService"
import { useState } from "react"
import { deleteComment } from '../../services/commentService'

const CommentCard = ({comment, postID, profileID, handleDeletedComment}) => {

  const [commentLikedBy, setCommentLikedBy] = useState(comment.likedBy)

  const handleCommentLike = () => {
    toggleLike({commentID: comment._id, postID, profileID})
    .then(tempCommentLikedBy => setCommentLikedBy(tempCommentLikedBy))
}

const handleDeleteComment = () => {
  //console.log('clicked', post._id)
  deleteComment({commentID: comment._id, resourceAuthorID: comment.author, postID})
  .then(deletedCommentID => handleDeletedComment(deletedCommentID))
}

  return (
    <li>
      <div className={styles.commentCard}>
          <span 
            onClick={handleDeleteComment}
            className={styles.delete}
          >
            {comment.author === profileID? 
             <i class="fa-solid fa-trash-can"></i>
             :
             <></>  
          }
             

          </span> 
          <div className={styles.comment}>
            <span 
              className={styles.author}>
                {comment.author}: 
            </span> 
            <h4 className={styles.text}>
                  {comment.text}  
            </h4>
          </div>
          <div className={styles.commentLike}>
             <button  onClick={handleCommentLike}><i class="fa-regular fa-thumbs-up"></i></button>
            <h4 className={styles.number}>{commentLikedBy.length}</h4>
          </div>        
        </div>
    </li>
        
  )

}

export default CommentCard