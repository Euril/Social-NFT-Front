import styles from './Explore.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate, useLocation } from 'react-router-dom'
import { getExploreFeed } from '../../services/postService'
import PostCard from '../../components/PostCard/PostCard.jsx'

const Explore = ({ user }) => {

const [exploreFeed, setExploreFeed] = useState(null)
const navigate = useNavigate()
const location = useLocation()
const getLastWordInURL = () => location.pathname.split('/').at(-1) 
let lastWordInURL = getLastWordInURL

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
