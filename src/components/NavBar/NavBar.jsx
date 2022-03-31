import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout, profile, handleSubmitSearch, handleSearchProfile, search}) => {

  return (
    <>
      {user ?
        <div className={styles.navContainer}>
          <div className={styles.home}>
            <Link to="/"><h2>Social NFT</h2></Link>
          </div>
          <div>
          
            <form onSubmit={handleSubmitSearch}>
              <input onChange={handleSearchProfile} name='query' type='search' placeholder='🔍 Search' aria-label="Search"/>
            </form>
          </div>
          <div className={styles.rightNav}>
            <Link to="/"><i class="fa-solid fa-house"></i></Link>
            <Link to="/messages"><i class="fa-solid fa-inbox"></i></Link>
            <Link to="/addpost"><i class="fa-regular fa-square-plus"></i></Link>
            <Link to="/explore"><i class="fa-brands fa-font-awesome"></i></Link>
            <Link to="/notifications"><i class="fa-regular fa-heart"></i></Link>
            <Link to={`${profile.email}`}><i class="fa-solid fa-user-plus"></i></Link>
            <Link to="" onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
          </div>
        </div>
      :
        <div>
          <h1>Social NFT</h1>
        </div>
      }
    </>
  )
}

export default NavBar