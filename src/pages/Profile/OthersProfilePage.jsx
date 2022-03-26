function OthersProfilePage (props) {

  return (
    <div>
          <form action="" onSubmit={props.handleFollow}>
            <button type="submit">Follow</button>
          </form>
          <div>
            <h3>Email: {props.profToRender.email}</h3>
            <h3>Following: {props.profToRender.following?.length}</h3>
            <h3>Followers: {props.profToRender.followers?.length}</h3>
            <h3>Name: {props.profToRender.name}</h3>  
        </div>
    </div>
  )
}

export default OthersProfilePage