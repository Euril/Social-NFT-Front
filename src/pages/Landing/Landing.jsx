import styles from './Landing.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Landing = ({ user }) => {
  const [newsFeed, setNewsFeed] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
   getNewsFeed()
   .then(fetchedNewsFeed => setNewsFeed(fetchedNewsFeed))
  }, [])

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {
        newsFeed  ? 

        <div className="post-card-container">
          {newsFeed.map(post => (
              <PostCard post={post}  />
          ))}
        </div>

        :

        <h1>Loading...</h1>

      }
    </main>
  )
}

export default Landing
