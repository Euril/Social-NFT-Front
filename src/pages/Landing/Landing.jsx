import styles from './Landing.module.css'
import loading from '../loading.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'
import NewsFeedIsEmpty from './NewsFeedIsEmpty'

const Landing = ({ user, profile, returnedPost}) => {
  const [newsFeed, setNewsFeed] = useState(null)
  const navigate = useNavigate()

  const handleDeletedPost = (deletedPost) => {
    let tempNewsFeed = newsFeed
    try {
     // console.log('deletedPost: ',deletedPost, 'temp news feed: ', tempNewsFeed)
     // console.log('length before: ', tempNewsFeed.length)
      tempNewsFeed = newsFeed.filter(post => post._id != deletedPost._id)
     // console.log('length after: ', tempNewsFeed.length)
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
    <main className={styles.container}>
      {
        newsFeed?.length > 0 ? 

        <div>
          {newsFeed?.map(post => (
              <PostCard post={post} profile={profile} handleDeletedPost={handleDeletedPost} />
          ))}
        </div>

        :
        // fix loading page with cool animation gif
        // <span className={styles.loading}>Loading...</span>

        newsFeed == null || newsFeed?.length == 0 ?

          <NewsFeedIsEmpty />

        :

          <div className={loading.loading}>
            <i class="fas fa-spinner fa-pulse fa-2x"></i>
          </div>
          
      }
    </main>
  )
}

export default Landing
