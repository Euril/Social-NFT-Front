import styles from './CommentsContainer.module.css'
import { useEffect, useState, useRef } from "react"
import { createComment } from '../../services/commentService'
import CommentCard from "./CommentCard"

const CommentsContainer = ({post, profile}) => {

    const [commentFormData, setCommentFormData] = useState()
    const [postState, setPostState] = useState(post)
    const [numComments, setNumComments] = useState()

    const commentFormElement = useRef()
    useEffect(()=> {
    }, [postState])
    
    const handleCommentFormChange = evt => {
        setCommentFormData(evt.target.value)
    }
    const handleComment = (evt) => {
       evt.preventDefault()
       createComment({commentFormData, postID: postState._id})
       .then(newPostState => setPostState(newPostState))
    }

    const handleDeletedComment = (deletedCommentID) => {
        let tempComments = postState.comments
        try {
          tempComments= tempComments.filter(comment => comment._id != deletedCommentID)
        }
    
        catch (error) {
          console.log(error)
        }
        
        let tempPostState = {...postState, comments: tempComments}
        setPostState(tempPostState)
      } 

    return (
        <div className={styles.commentContainer}>
            <div className={styles.comment}>
                <form ref={commentFormElement} onSubmit={handleComment}>
                    <textarea onChange={handleCommentFormChange} name="comment" cols="40" rows="1" placeholder='   Add a comment...'></textarea>
                    <button className={styles.commentButton}type="submit">Comment</button>
                </form>
            </div>
            <div className={styles.commentSection}>
            {
                postState.comments?.map(comment => (
                    <CommentCard 
                        comment={comment} 
                        postID={post._id} 
                        profileID={profile._id} handleDeletedComment={handleDeletedComment}
                        key={profile._id}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default CommentsContainer