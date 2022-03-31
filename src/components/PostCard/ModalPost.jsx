import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import CommentsContainer from './CommentsContainer.jsx'
import PostLikes from './PostLikes.jsx'
import styles from './PostCard.module.css'
import { deletePost } from '../../services/postService.js'
import EditDeletePost from './EditDeletePost.jsx'

const ModalPost = ({post, profile, show, handleClose, handleDeletedPost}) => {

  const handlePostDelete = () => {
    //console.log('clicked', post._id)
    deletePost({postID: post._id, resourceAuthorID: post.author._id})
    .then(deletedPost => handleDeletedPost(deletedPost))
  }

  if(!show){
    return null
  }

  return (
    <div >
   
    <div className={styles.modal} onClick={evt => evt.stopPropagation()}>
      <div className={styles.modalBody} >
      <div className={styles.card} >
        <div >
          <p 
            className={styles.username}> 
            <button onClick={handleClose}>CLOSE</button>
              <Link 
                to={`/${post.author.email}`}>
                  {post.author.email}
              </Link> 
              {post?.author?._id == profile?._id ? <EditDeletePost post={post} handlePostDelete={handlePostDelete}/> : <></>}
            </p>
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
          
          <PostLikes post={post} profile={profile}/> 

          <CommentsContainer post={post} profile={profile}/>
        </div>
      </div>
      </div>
    </div>
    </div>
    // <div className={styles.postCardContainer}>
    //   <hr />
    //   <div className={styles.card}>
    //     <div >
    //       <p 
    //         className={styles.username}> 
    //           <Link 
    //             to={`/${post.author.email}`}>
    //               {post.author.email}
    //           </Link> 
    //           {post?.author?._id == profile?._id ? <EditDeletePost post={post} handlePostDelete={handlePostDelete}/> : <></>}
    //         </p>
    //     <img
    //         src={post.images}
    //         alt='post'
    //       />
    //       <p 
    //         className={styles.author}>
    //           <span> 
    //             <Link to={`/${post.author.email}`}>
    //               {post.author.email}
    //             </Link>
    //           </span>
    //           {post?.caption}
    //       </p>
          
    //       <PostLikes post={post} profile={profile}/> 

    //       <CommentsContainer post={post} profile={profile}/>
    //     </div>
    //   </div>
        
    // </div>
  )
}

export default ModalPost