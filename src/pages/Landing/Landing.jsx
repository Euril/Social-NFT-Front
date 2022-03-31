import styles from './Landing.module.css'
import loading from '../loading.module.css'
import React, { useEffect, useState, } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Landing = ({ user, profile, returnedPost}) => {
  const [newsFeed, setNewsFeed] = useState(null)
  const navigate = useNavigate()

  const handleDeletedPost = (deletedPost) => {
    let tempNewsFeed = newsFeed
    try {
      tempNewsFeed = newsFeed.filter(post => post._id != deletedPost._id)
    }

    catch (error) {
      console.log(error)
    }
    
    setNewsFeed({...tempNewsFeed})
  } 
  
  useEffect(() => {
  console.log('about to fetch newsfeed')
   getNewsFeed()
   .then(fetchedNewsFeed => {
     if (returnedPost && !returnedPost.addedToFeed) {
      let inFetchedNewsFeed =false
      let mappedNewsFeed = fetchedNewsFeed.map(post => {
        try {
          if (post._id == returnedPost._id) {
            inFetchedNewsFeed = true
            post.caption = returnedPost.caption
            post.images = returnedPost.images
            return post
          }
        } catch (error) {
          
        }
         return post
      })

      if (!inFetchedNewsFeed) mappedNewsFeed.push(returnedPost)
      setNewsFeed(mappedNewsFeed)
      returnedPost.addedToFeed = true
    }
    else {
      setNewsFeed(fetchedNewsFeed)
    }
   })
  }
  , [])

  return (
    <React.Fragment key={profile._id}>
      <main className={styles.container}>
        {
          newsFeed  ? 

          <div>
            {newsFeed?.map(post => (
                <PostCard 
                  key={user._id} 
                  post={post} 
                  profile={profile} 
                  handleDeletedPost={handleDeletedPost} 
                />
            ))}
          </div>
          :
          <div className={loading.loading}>
            <i class="fas fa-spinner fa-pulse fa-2x"></i>
          </div>
        }
      </main>
    </React.Fragment>
  )
}

export default Landing
