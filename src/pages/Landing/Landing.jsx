import styles from './Landing.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Landing = ({ user, profile }) => {
  const [newsFeed, setNewsFeed] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
   getNewsFeed()
   .then(fetchedNewsFeed => setNewsFeed(fetchedNewsFeed))
  }, [])

  return (
    <main className={styles.container}>
      {
        newsFeed  ? 

        <div className="post-card-container">
          {newsFeed.map(post => (
              <PostCard post={post} profile={profile} />
          ))}
        </div>

        :
        // fix loading page with cool animation gif
        <span className={styles.loading}>LOADING</span>

      }
    </main>
  )
}

export default Landing
