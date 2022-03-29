import styles from './Landing.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Landing = ({ user, profile, updated, returnedPost, setReturnedPost }) => {
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
    
    setNewsFeed(tempNewsFeed)
  } 
  
  useEffect(() => {
  console.log('about to fetch newsfeed')
   getNewsFeed()
   .then(fetchedNewsFeed => {
     if (returnedPost && !returnedPost.addedToFeed) {
      let mappedNewsFeed = fetchedNewsFeed.map(post => {
        try {
          if (post._id == returnedPost._id) {
            post.caption = returnedPost.caption
            post.images = returnedPost.images
            return post
          }
        } catch (error) {
          
        }
         return post
      })
      setNewsFeed(mappedNewsFeed)
      returnedPost.addedToFeed = true
    }
    else {
      setNewsFeed(fetchedNewsFeed)
    }
   })
  }
  // .then(fetchedNewsFeed => {setNewsFeed([...fetchedNewsFeed]);console.log('fetched newsfeed: ',fetchedNewsFeed.at(-1)); console.log('profile last post: ', profile?.posts?.at(-1))})
  , [updated])

  return (
    <main className={styles.container}>
      {
        newsFeed  ? 

        <div className="post-card-container">
          {newsFeed?.map(post => (
              <PostCard post={post} profile={profile} handleDeletedPost={handleDeletedPost} />
          ))}
        </div>

        :
        // fix loading page with cool animation gif
        <span className={styles.loading}>Loading...</span>

      }
    </main>
  )
}

export default Landing
