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
import EditPost from './pages/EditPost/EditPost'


// Have fun, y'all. ;)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})


  // States for search refactor as you please
  //⬇️  Holds the array of all profiles to be then filtered
  const [tempProfiles, setTempProfiles] = useState({})
  //⬇️  Holds the search results from the navbar
  const [search, setSearch] = useState({query: ''})
  //⬇️  Holds the filted array of profiles to be sent to searchResults
  const [searchResults, setSearchResults] = useState({tempProfiles: []})
  const [search, getSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState({profile: []})
  const [postUpdate, setPostUpdate] = useState(0)


  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.email)
      .then(profileData => {
        setProfile(profileData)
      })
    } else {
      navigate('login')
    }
  }, [user])

  useEffect(()=>{
      navigate('/')
  }, [profile])



  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('login')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData)
    console.log("🚀 ~ newPost", newPost);
    profile.posts.push(newPost)
//await setProfile(profile)
    setProfile({...profile})
    //navigate('/')
  }

  const handleEditPost = async (editedPostData) => {
    const editedPost = await postService.update(editedPostData)
    let tempProfile = {...profile}
    tempProfile.posts = tempProfile.posts.map(post => {
      try {
        if (post._id == editedPost._id) return editedPost
        else return post
      } catch (error) {
        console.log(error)
        return post
      }
      
    })
    //await setProfile(tempProfile)
    //navigate('/')
    setProfile(tempProfile)
  }

  //Second useEffect when page loads fills temp profiles with all profiles
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setTempProfiles(profiles))
  },[])

  //does the actual filtering for search
  const handleSubmitSearch = evt => {
    evt.preventDefault() //<- not sure why this is needed but is needed to prevent search results from being refreshed away
    // getProfileList()
    // console.log('ARRAY OF ALL PROFILES', tempProfiles)
    setSearchResults({
      tempProfiles: tempProfiles.filter(profile => profile.email.includes(search.query))
    })
    navigate('/search')
  }
  //takes the results from navbar
  const handleSearchProfile = evt => {
    //console.log('SEARCH PROFILE VALUE', evt.target.value)
    // console.log('SEARCH PROFILE VALUE', getSearch)
    setSearch({...search, [evt.target.name]: evt.target.value})
    // console.log('GET SEARCH', search.query)
  }

  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} search={search} handleSubmitSearch={handleSubmitSearch} handleSearchProfile={handleSearchProfile}/>
      <Routes>
        <Route path="/" element={<Landing user={user} profile={profile} />} /> 
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
          element={<SearchResults profile={profile} filteredProfiles={searchResults.tempProfiles} />}
        />
        <Route
          path="/messages"
          element={<Messages profile={profile}/>}
        />
        <Route
          path="/messages/:id"
          element={<Messages profile={profile}/>}
        />

        <Route
          path="/addpost"
          element={<AddPost handleAddPost={handleAddPost} profile={profile}/>}
        />

        <Route
          path="/editpost"
          element={<EditPost handleEditPost={handleEditPost} profile={profile}/>}
        />

        <Route
          path="/explore"
          element={<Explore user={user} profile={profile}/>}
        />

        <Route
          path=':email'
          element={<Profile loggedInUser={user} profile={profile}/>}
        />
      </Routes>
    </>
  )
}

export default App
