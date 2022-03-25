const PostCard = ({post}) => {



  return (
    <div>
         <img
            src={post.images}
            alt='post'
          />
    </div>
  )
}

export default PostCard