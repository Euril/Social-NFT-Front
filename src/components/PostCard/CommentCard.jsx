import { toggleLike } from "../../services/commentService"
import { useState } from "react"

const CommentCard = ({comment, postID, profileID}) => {

  const [commentLikedBy, setCommentLikedBy] = useState(comment.likedBy)

  const handleCommentLike = () => {
    //console.log('sanity check - handle Like function')
    toggleLike({commentID: comment._id, postID, profileID})
    .then(tempCommentLikedBy => setCommentLikedBy(tempCommentLikedBy))
}

  return (
        <li>
          {comment.text} -by: {comment.author}
          <button onClick={handleCommentLike}>Like</button>
          <h3>NumLikes: {commentLikedBy.length}</h3>
        </li>
  )

}

export default CommentCard