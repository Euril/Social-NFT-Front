import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import SearchResults from './pages/SearchResults/SearchResults'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Messages from './pages/Messages/Messages'
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'
import AddPost from './pages/AddPost/AddPost'


// Have fun, y'all. ;)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.profile)
      .then(profileData => {
        setProfile(profileData)
      })
    }
  }, [user])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (newPostData) => {
    console.log('sanity check handleAddPost', newPostData)
    const newPost = await postService.create(newPostData)
    console.log('newPost: ',newPost)
  }

  const getPosts = () => {
    return posts
  }

  useEffect(() => {
    user ? navigate('/') : navigate('login')
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} getPosts={getPosts}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/search"
          element={<SearchResults profile={profile} />}
        />
        <Route
          path="/messages"
          element={<Messages />}
        />

        <Route
          path="/addpost"
          element={<AddPost handleAddPost={handleAddPost}/>}
        />
      </Routes>
    </>
  )
}

export default App
