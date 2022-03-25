import styles from './Landing.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { getNewsFeed } from '../../services/postService'

const Landing = ({ user, getPosts }) => {
  const [newsFeed, setNewsFeed] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => { let ben = await getNewsFeed(); setNewsFeed(ben)})()
    // let returnedNewsFeed = getNewsFeed()
    // console.log(returnedNewsFeed)
    // if (!user) Navigate('login')
    // setNewsFeed(returnedNewsFeed)
  }, [])

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {console.log(newsFeed)}
      <ul>
        {newsFeed?.map(post => (
          <li>{post?.images}</li>
        ))}
      </ul>
    </main>
  )
}

export default Landing
