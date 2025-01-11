//  import Image_1 from '../assets/post_image/Rectangle_1.jpg'
//  import Image_2 from '../assets/post_image/Rectangle_2.jpg'
//  import Image_3 from '../assets/post_image/Rectangle_3.jpg'
//  import Image_4 from '../assets/post_image/Rectangle_4.jpg'
//  import Image_5 from '../assets/post_image/Rectangle_5.jpg'
//  import Image_6 from '../assets/post_image/Rectangle_6.jpg'
//  import Image_7 from '../assets/post_image/Rectangle_7.jpg'
//  import Image_8 from '../assets/post_image/Rectangle_8.jpg'
//  import Image_9 from '../assets/post_image/Rectangle_9.jpg'
//  import User_1_image from '../assets/profile_image/Image_1.jpg';
//  import User_2_image from '../assets/profile_image/Image_2.jpg'
//  import User_3_image from '../assets/profile_image/Image_3.jpg'
//  import User_4_image from '../assets/profile_image/Image_4.jpg'
//  import User_5_image from '../assets/profile_image/Image_5.jpg'
import BlogCard from './blogs/BlogCard'
 
 
  import { Link,   } from 'react-router-dom';
 import { PropTypes } from 'prop-types'
 import useFetchLatestBlogs from '../hooks/useFetchLatestBlogs' 
 
 import '../styles/latestPosts.css'

 
 const LatestPosts = (  ) => {
 

  const {blogs, isLoading, error} = useFetchLatestBlogs( )  

  

   return (
    <>

    {
      isLoading ? <p>Loading... </p>
      : error ? <p> {error.message}</p>
      : blogs ?
  
    
     
     
     <div className='latestpostContainer'>
        {
          blogs &&
          blogs.filter((blog, index) => index !== blogs.findIndex(blog => blog.cover_image !== null)) .slice(0, 9).map((post, index) =>(
                 <BlogCard post={post} key={index}     />
           
          ) )
        }

     </div>
     :  (
      <p>No blog found</p>  // In case blog is null or undefined
  )
      
        }
        <Link to={'/blogs'} >
          <button className="allPostBtn" to={'/blogs'}>  View All Post  </button>
        </Link>
        
     </>
   )
 }


 LatestPosts.propTypes = {
   blogs: PropTypes.array
 }


 
 export default LatestPosts