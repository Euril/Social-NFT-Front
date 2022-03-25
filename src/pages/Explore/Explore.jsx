import styles from './Explore.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getExploreFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Explore = ({ user }) => {

const [exploreFeed, setExploreFeed] = useState(null)
const navigate = useNavigate()

useEffect(() => {
  console.log('in use effect in explore')
 getExploreFeed()
 .then(fetchedExploreFeed => setExploreFeed(fetchedExploreFeed))
}, [])

return (
  <main className={styles.container}>
    <h1>hello, {user ? user.name : 'friend'}</h1>
    {
      exploreFeed  ? 

      <div className="post-card-container">
        {exploreFeed.map(post => (
            <PostCard post={post}  />
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
