import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Explore from './pages/Explore/Explore'
import SearchResults from './pages/SearchResults/SearchResults'
import Profiles from './pages/Profiles/Profiles'
import Profile from './pages/Profile/Profile'
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
      //console.log('use Effect testing:', user.profile, user.profile?.name)
      //console.log(user)
      //console.log('user.name: ', user.name)
      profileService.getProfile(user.email)
      .then(profileData => {
        setProfile(profileData)
      })
   // console.log('profile in useEffect Appjs', profile)
    } else {
      navigate('login')
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

  // const getPosts = () => {
  //   return posts
  // }

  // useEffect(() => {
  //   user ? navigate('/') : navigate('login')
  // }, [user])

  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} />
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

        <Route
          path="/explore"
          element={<Explore user={user}/>}
        />

        <Route
          path=':email'
          element={<Profile loggedInUser={user}/>}
        />
      </Routes>
    </>
  )
}

export default App
