import styles from './Profile.module.css'
import { Link } from 'react-router-dom';

function OurProfilePage ({profToRender, loggedInUser, profile}) {
  console.log("🚀 ~ profile", profile.posts);
  console.log(profToRender)
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <Link to={`/${profToRender?.email}/edit`}>
          <div className={styles.profileImage}>
            <img 
                src={`${profToRender.profilePicture}`} 
                alt="profilePicture"
              />
          </div>
        </Link>
        <div className={styles.profileTopBar}>
          <h1 className={styles.profileName}>{profToRender.name}</h1> 
          <Link to={`/${profToRender?.email}/edit`}><button>Edit Profile</button></Link> 
        </div>
        <div className={styles.profileFollowersBar}>
          <ul>
            <li>
              <span className={styles.bolder}>{profToRender.following?.length}
              </span> Following 
            </li>
            <li>
              <span className={styles.bolder}>{profToRender.followers?.length}
              </span> Followers
            </li>
          </ul>
        </div>
          <div className={styles.profileBio}>
            <p className={styles.bolder}>{profToRender.email}</p>
            <p>Bio: {profToRender.bio}</p>
          </div>
      </div>
      
      <div className={styles.gallery}>
        <hr></hr>
          <div className={styles.galleryMenu}>
            <h4>Posts</h4>
            {/*⚠️ Placeholder for collections */}
            <h4> Collections</h4>
          </div>
          <div className={styles.posts}>
            {profToRender.posts?.map(post => (
              <img src={`${post?.images}`} alt="profile post" />
            ))}
          </div>
      </div>
    </div>
  )
}

export default OurProfilePage


