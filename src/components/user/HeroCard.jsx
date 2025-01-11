 
    import { PropTypes } from 'prop-types'
    import { useNavigate } from 'react-router-dom'


const HeroCard = ({blog}) => {
    const navigate = useNavigate()
    const handleBlogDetail = (id) =>{
      navigate(`/blogs/${id}`);
    }
    const handleUser = (username) => { 
      navigate(`/users/${username}`)
  }
  
  return (
    <div className="heroCard">
        <div className="heroCardText"  onClick={() => handleBlogDetail(blog.id)}>
            <h5 className="heroCardCategory">{blog.type_of}</h5>
            <h1>{blog.title}</h1>
        </div>
        <div className="postUserInfo" onClick={() => handleUser(blog.user.username)}>
            <div className="userImgWrapper">
                <img src={blog.user.profile_image} className='userImage' alt="user profile " />
                <p className="postUserName">{blog.user.name}</p>
            </div>
            <p className="postDate">{blog.readable_publish_date}</p>
        </div>
    </div>
  )
}

HeroCard.propTypes = {
  blog: PropTypes.object.isRequired
}

export default HeroCard