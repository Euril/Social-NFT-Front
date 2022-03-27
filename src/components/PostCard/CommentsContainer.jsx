import { useEffect, useState, useRef } from "react"
import { createComment } from '../../services/commentService'
import CommentCard from "./CommentCard"

const CommentsContainer = ({post, profile}) => {

    const [commentFormData, setCommentFormData] = useState()
    const [postState, setPostState] = useState(post)
    const [numComments, setNumComments] = useState()

    const commentFormElement = useRef()
    useEffect(()=> {
        console.log('in useEffect, postState: ', postState)
    }, [postState])
    
    const handleCommentFormChange = evt => {
        setCommentFormData(evt.target.value)
    }
    const handleComment = (evt) => {
       evt.preventDefault()
       createComment({commentFormData, postID: postState._id})
       .then(newPostState => setPostState(newPostState))
    }


    
  

    return (
        <div>
            <form ref={commentFormElement} onSubmit={handleComment}>
                <textarea onChange={handleCommentFormChange} name="comment" id="" cols="30" rows="10"></textarea>
                <button type="submit">Comment</button>
            </form>

            <ul>
            {
                postState.comments?.map(comment => (
                    <CommentCard comment={comment} postID={post._id} profileID={profile._id}/>
                ))
            }
            </ul>
        </div>
    )
}

export default CommentsContainer