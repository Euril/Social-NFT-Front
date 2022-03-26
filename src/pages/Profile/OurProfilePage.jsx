import { post } from "jquery";

function OurProfilePage ({profToRender, loggedInUser, profile}) {
  console.log("🚀 ~ profile", profile.posts);
  console.log(profToRender)
  return (
    <div>
      <h3>Name: {profToRender.name}</h3>  
      <h3>Email: {profToRender.email}</h3>
      <h3>Following: {profToRender.following?.length}</h3>
      <h3>Followers: {profToRender.followers?.length}</h3>
      {/* <img src={profToRender.posts}/> */}
      {profToRender.posts?.map(post => (
        <img src={`${post?.images}`} alt="profile post" />
      ))}
    </div>
  )
}

export default OurProfilePage


