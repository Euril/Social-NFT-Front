const FollowUnfollowButton = ({profToRender, loggedInUser, handleUnfollow, handleFollow, ourProfile}) => {
    console.log('ourProfile in FollowUnfollowButton: ', ourProfile)
    console.log('proftorender followers: ', profToRender.followers)
    

    return (
        <div>
            {
                !profToRender.followers?.includes(ourProfile._id) ?
                    <form action="" onSubmit={handleFollow}>
                        <button type="submit">Follow</button>
                    </form>
                :
                    <form action="" onSubmit={handleUnfollow}>
                        <button type="submit">Unfollow</button>
                    </form>
            }
        </div>
        

    )
}


export default FollowUnfollowButton