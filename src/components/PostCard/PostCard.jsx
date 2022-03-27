import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import CommentsContainer from './CommentsContainer.jsx'

const PostCard = ({post}) => {
  
  const likeFormElement = useRef()
  
  const handleLike = (evt) => {
    evt.preventDefault()
  }
  
  return (
    <div>
      <hr />
         <img
            src={post.images}
            alt='post'
          />
          <p>{post?.caption}</p>
          <p>Posted by: {post.author.name}</p>
          <p><Link to={`/${post.author.email}`} >{post.author.email}</Link> </p>
          <form onSubmit={handleLike} ref={likeFormElement}>
            <button type="submit">Like</button>
          </form>
          <p>Likes: {post.numLikes}</p>

          <CommentsContainer post={post}/>
    </div>
  )
}

export default PostCard