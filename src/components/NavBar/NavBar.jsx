import { Link } from 'react-router-dom'
import '../../App.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li><Link to="/">HomeButton</Link></li>
            <li><Link to="/messages">MessageButton</Link></li>
            {/* {<li><Link to="/">AddPostButton</Link></li> need to add modal} */}
            <li><Link to="/explore">ExploreButton</Link></li>
            {/* {<li><Link to="/notifications">NotificationsButton</Link></li> need to add modal} */}
            {/* SEARCH BAR */}
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
