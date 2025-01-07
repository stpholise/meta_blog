import {   useNavigate } from 'react-router-dom'
 
import { PropTypes } from 'prop-types'

const BlogCard = ( {post, }) => {
    const navigate = useNavigate()
    const handleBlogDetail = (id) =>{
        navigate(`/blogs/${id}`);
      }

    const handleUser = (username, name) => {
        // console.log({'usernamer': username, 'name': name})
        navigate(`/users/${username}`,  { state: { name } })
    }
    
  return (
    <div className="postContainer"  >
        <div className="postTop"> 
            <img src={post.cover_image   } alt="" /> 
        </div>
        <div className="postBottom"> 
            <div className="postText" onClick={() => handleBlogDetail(post.id)}>
                <p className="postCategory">{post.type_of}</p>
                <h3 className="postTitle">{post.title} </h3>
            </div>
        <div   className="postUserInfo" onClick={() => handleUser(post.user.username, post.user.name)}> 
            <div className="userImgWrapper">
                <img src={post.user.profile_image}  className='userImage'  alt="" />
                <p className="postUserName">{post.user.name}</p>
            </div> 
            <p className="postCategory">{post.readable_publish_date}</p>
        </div>
        </div>
        {/* <div className="commentContainer">
            <p className="commentCount">{comments.length} Comments</p>
        </div> */}
    </div>
  )
}

BlogCard.propTypes = {
    post: PropTypes.object.isRequired,
    // key: PropTypes.number.isRequired
}

export default BlogCard