import { useState, useEffect } from 'react'
import { getPopularProfiles } from '../../services/profileService'
import { Link } from 'react-router-dom'

import Profile from '../Profile/Profile'
import styles from './NewsFeedIsEmpty.module.css'

const NewsFeedIsEmpty = () => {

  const [popularProfiles, setPopularProfiles] = useState()

  useEffect(()=>{
    getPopularProfiles()
    .then(profiles => setPopularProfiles(profiles))
  },[])

  

  return ( 
    <>
    {popularProfiles?.length ?
        <>
        <h1>Follow Suggestions:</h1>
        <div className={styles.resultsContainer}>
            <ul>
                <div>
            {popularProfiles.map(profile => 
            <div className={styles.results}>
                <Link to={`/${profile.email}`} style={{ textDecoration: 'none' }}>
                    <div className={styles.resultsCard}>
                    <img src={profile.profilePicture} alt='profile'/>
                    <h4>{profile.email}</h4>
                    <h5>{profile.email}</h5>

                    </div>
                    </Link>
            </div>
            )}
            </div>
            </ul>
        </div>
        </>
        :
        <>
        <h3></h3>
        </>
    }
    </>
 );
  // return (
  //   <div className={styles.testing}>
  //     <h1>Follow Suggestions: </h1>
  //       <div className={styles.resultsContainer}>
  //           {
  //           popularProfiles?.map(popProfile => (
  //             <div className={styles.suggestionCard}>
  //               <img className={styles.profilePicture} src={popProfile.profilePicture}/>
  //               <p className={styles.username}>{popProfile.email}</p>
  //             </div>
  //           ))
  //         }
  //       </div>

  //   </div>
  // )
}

export default NewsFeedIsEmpty