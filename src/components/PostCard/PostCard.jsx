import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import CommentsContainer from './CommentsContainer.jsx'
import PostLikes from './PostLikes.jsx'
import styles from './PostCard.module.css'
import { deletePost } from '../../services/postService.js'
import EditDeletePost from './EditDeletePost.jsx'

const PostCard = ({post, profile, handleDeletedPost}) => {

  const handlePostDelete = () => {
    deletePost({postID: post._id, resourceAuthorID: post.author._id})
    .then(deletedPost => handleDeletedPost(deletedPost))
  }

  return (
    <div className={styles.postCardContainer}>
      <hr />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p 
            className={styles.username}>
              
            <Link 
              to={`/${post.author.email}`}>
                {post.author.email}
            </Link> 
          </p>
            {post?.author?._id == profile?._id ? <EditDeletePost post={post} handlePostDelete={handlePostDelete}/> : <></>}
            
        </div>
        <img
            src={post.images}
            alt='post'
          />
          <p 
            className={styles.author}>
              <span> 
                <Link to={`/${post.author.email}`}>
                  {post.author.email}
                </Link>
              </span>
              {post?.caption}
          </p>
          <div className={styles.cardFooter}>
          <PostLikes post={post} profile={profile}/> 
          
          
          <CommentsContainer post={post} profile={profile}/>
          </div>
      </div>
    </div>
  )
}

export default PostCard