import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, profile }) => {

  return (
    <>
      {user ?
        <div className={styles.navContainer}>
          <div className={styles.home}>
            <h2>Social NFT</h2>
          </div>
          <div>
            {/* <SearchResults /> */}
          </div>
          <div className={styles.rightNav}>
            <Link to="/"><i class="fa-solid fa-house"></i></Link>
            <Link to="/messages"><i class="fa-solid fa-inbox"></i></Link>
            <Link to="/addpost"><i class="fa-regular fa-square-plus"></i></Link>
            <Link to="/explore"><i class="fa-brands fa-font-awesome"></i></Link>
            <Link to="/notifications"><i class="fa-regular fa-heart"></i></Link>
            <Link to={`${profile.email}`}><i class="fa-regular fa-user-astronaut"></i></Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
          </div>
        </div>
      :
        <nav>
        </nav>
      }
    </>
  )
}

export default NavBar