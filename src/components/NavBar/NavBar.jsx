import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = ({ user, handleLogout, profile }) => {
  //console.log('profile in nav bar', profile)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  // useEffect(()=>{
  // }, [])
  
  const pageChange = () => {
    
    navigate(location.pathname)
  }
  
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/addpost">Add Post</Link></li>
            <li><Link to="/explore" onClick={pageChange}>Explore</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to={`${profile.email}`} onClick={pageChange}>Profile</Link></li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
        </nav>
      :
        <nav>
        </nav>
      }
    </>
  )
}

export default NavBar