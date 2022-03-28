import styles from './Explore.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'
import { getExploreFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Explore = ({ user, profile }) => {

const [exploreFeed, setExploreFeed] = useState(null)
const navigate = useNavigate()
const location = useLocation()
const getLastWordInURL = () => location.pathname.split('/').at(-1) 
let lastWordInURL = getLastWordInURL

const handleDeletedPost = (deletedPost) => {
  let tempExploreFeed = exploreFeed
  try {
    //console.log('deletedPost: ',deletedPost, 'temp news feed: ', tempNewsFeed)
    //console.log('length before: ', tempNewsFeed.length)
    tempExploreFeed = exploreFeed.filter(post => post._id != deletedPost._id)
    //console.log('length after: ', tempNewsFeed.length)
  }

  catch (error) {
    console.log(error)
  }
  
  setExploreFeed(tempExploreFeed)
} 

useEffect(() => {
  //lastWordInURL = getLastWordInURL()
  //console.log('last item in URL: ', lastWordInURL)
  //if (lastWordInURL !== 'explore') navigate(`/${lastWordInURL}`)
  //console.log('in use effect in explore')
 if (!exploreFeed) {
  getExploreFeed()
  .then(fetchedExploreFeed => setExploreFeed(fetchedExploreFeed))
 }

}, [location])

return (
  <main className={styles.container}>
    <h1>Explore</h1>
    {
      exploreFeed  ? 

      <div className="post-card-container">
        {exploreFeed.map(post => (
            <PostCard post={post}  profile={profile} handleDeletedPost={handleDeletedPost} />
        ))}
      </div>

      :

      <h1>Loading...</h1>

    }
    
    <ul>
      {/* {newsFeed?.map(post => (
        <img
          src={post.images}
          alt='post'
        />
      ))} */}
    </ul>
  </main>
)

}

export default Explore
