import {   useNavigate } from 'react-router-dom'
 
import { PropTypes } from 'prop-types'

const BlogCard = ( {post, }) => {
    const navigate = useNavigate()
    const handleBlogDetail = (id) =>{
        navigate(`/blogs/${id}`);
      }

    const handleUser = (username ) => { 
        navigate(`/users/${username}` )
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
        <div   className="postUserInfo" onClick={() => handleUser(post.user.username)}> 
            <div className="userImgWrapper">
                <img src={post.user.profile_image}  className='userImage'  alt="" />
               
            </div> 
            <div className="nameDate">
                <p className="postUserName">{post.user.name}</p>
                <p className="postCategory">{post.readable_publish_date}</p>
            </div>
        </div>
        </div> 
    </div>
  )
}

BlogCard.propTypes = {
    post: PropTypes.object.isRequired,
    // key: PropTypes.number.isRequired
}

export default BlogCard