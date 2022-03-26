import { Link, useNavigate } from 'react-router-dom'

const PostCard = ({post}) => {

  return (
    <div>
      <hr />
         <img
            src={post.images}
            alt='post'
          />
          <p>{post?.caption}</p>
          <p>Posted by: {post.author.name}</p>
          <p>Likes: {post.numLikes}</p>
          <p><Link to={`/${post.author.email}`} >{post.author.email}</Link> </p>
    </div>
  )
}

export default PostCard