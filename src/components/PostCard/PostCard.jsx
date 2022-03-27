import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import CommentsContainer from './CommentsContainer.jsx'
import PostLikes from './PostLikes.jsx'

const PostCard = ({post, profile}) => {
  
  return (
    <div>
      <hr />
         <img
            src={post.images}
            alt='post'
          />
          <p>{post?.caption}</p>
          <p>Posted by: {post.author.name}</p>

          <PostLikes post={post} profile={profile}/> 



          <CommentsContainer post={post} profile={profile}/>
    </div>
  )
}

export default PostCard