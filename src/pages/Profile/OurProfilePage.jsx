import styles from './Profile.module.css'

function OurProfilePage ({profToRender, loggedInUser, profile}) {
  console.log("🚀 ~ profile", profile.posts);
  console.log(profToRender)
  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.profileImage}>
          <img 
              src={`https://picsum.photos/id/42/150/150`} 
              alt="Placeholder Avatar"
            />
        </div>
        <div className={styles.profileTopBar}>
          <h1 className={styles.profileName}>{profToRender.name}</h1> 
          <button onClick={''}>Edit Profile</button> 
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
            <p>Place holder for Bio</p>
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


