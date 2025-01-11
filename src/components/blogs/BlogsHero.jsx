 
//  import { useNavigate } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
 import '../../styles/blogsHero.css'
 import HeroCard from '../user/HeroCard'

const BlogsHero = ({blog}) => {
  // const navigate = useNavigate()
//   const handleBlogDetail = (id) =>{
//     navigate(`/blogs/${id}`);
//   }
//   const handleUser = (username) => { 
//     navigate(`/users/${username}`)
// }


  return (
    <aside className='blogsHero'>
     
                  <div className="hero">
                    <div className="heroImgCont">
                        <img src={blog.cover_image } className='heroImage' alt="" /> 
                    </div>
                    <HeroCard blog={blog}  /> 
                  </div>
    </aside>
  )
}

BlogsHero.propTypes = {
  blog: PropTypes.object.isRequired
}

export default BlogsHero