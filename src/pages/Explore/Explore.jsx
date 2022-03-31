import styles from './Explore.module.css'
import loading from '../loading.module.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'
import { getExploreFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'
import ModalPost from '../../components/PostCard/ModalPost.jsx'

const Explore = ({ user, profile }) => {

const [exploreFeed, setExploreFeed] = useState(null)
const [show, setShow] = useState(false)
const [modalPost, setModalPost] = useState(null)

const navigate = useNavigate()
const location = useLocation()
const getLastWordInURL = () => location.pathname.split('/').at(-1) 
let lastWordInURL = getLastWordInURL

const handleDeletedPost = (deletedPost) => {
  let tempExploreFeed = exploreFeed
  try {
    tempExploreFeed = exploreFeed.filter(post => post._id != deletedPost._id)
  }

  catch (error) {
    console.log(error)
  }
  
  setExploreFeed(tempExploreFeed)
} 

useEffect(() => {
 if (!exploreFeed) {
  getExploreFeed()
  .then(fetchedExploreFeed => setExploreFeed(fetchedExploreFeed))
 }
}, [location])

const handleShow = () => setShow(true)
const handleClose = () => {
  setShow(false)
  console.log('HANDLE CLOSE TRIGGERED')
}

return (
  <React.Fragment key={profile._v}>
    
  {
    exploreFeed ?
    <div className={styles.container}>
      <h1>Explore</h1>
        <div className={styles.containerRow}>
          
            {exploreFeed.map(post => (
              <div 
                className={styles.col} onClick={() => {
              setModalPost(post); handleShow();}}>
      
                <img
                src={post.images}
                alt='post'
                />
                
              <ModalPost 
                
                handleClose={handleClose} 
                handleDeletedPost={handleDeletedPost} 
                post={modalPost}  
                profile={profile} 
                show={show}
              />
              </div>
            ))}
        </div>
    </div>
  :
    <div className={loading.loading}>
      <i class="fas fa-spinner fa-pulse fa-2x"></i>
    </div>
  }
  </React.Fragment>

  
  )

}

export default Explore