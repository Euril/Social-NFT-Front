import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Messages from './pages/Messages/Messages'
import * as authService from './services/authService'
import * as postService from './services/postService'
import AddPost from './pages/AddPost/AddPost'


// Have fun, y'all. ;)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  // [posts, setPosts] = useState([])
  const navigate = useNavigate()

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

  // const getPosts = () => {
  //   return posts
  // }

  useEffect(() => {
    user ? navigate('/') : navigate('login')
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} /> 
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
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
