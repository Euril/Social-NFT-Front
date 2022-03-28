import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import CommentsContainer from './CommentsContainer.jsx'
import PostLikes from './PostLikes.jsx'
import styles from './PostCard.module.css'

const PostCard = ({post, profile}) => {
  
  return (
    <div className={styles.postCardContainer}>
      <hr />
      <div className={styles.card}>
        <div >
          <p className={styles.username}> <Link to={`/${post.author.email}`}>{post.author.email}</Link></p>
        <img
            src={post.images}
            alt='post'
          />
          <p><span> <Link to={`/${post.author.email}`}>{post.author.email}</Link></span>{post?.caption}</p>
          
          <PostLikes post={post} profile={profile}/> 

          <CommentsContainer post={post} profile={profile}/>
        </div>
      </div>
        
         
    </div>
  )
}

export default PostCard