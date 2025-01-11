import useFetchLatestBlogs from '../../hooks/useFetchLatestBlogs' 
import { useState, useEffect } from 'react'
import HeroCard from './HeroCard'
const Hero = () => {

    const [ blog, setBlog ] = useState(null)

  const {blogs, isLoading, error} = useFetchLatestBlogs( )  
 useEffect(() => {
    setBlog(blogs.find(blog => blog.cover_image !== null) || null);  // set the first blog with a cover image
  }, [blogs]);



  return (
    <>{
        isLoading ? <p>Loading... </p>
        : error ? <p> {error.message}</p>
        : blog &&
        <div className="hero">
                <div className="heroImgCont">
                    <img src={blog.cover_image } className='heroImage' alt="" /> 
                </div>
                <HeroCard blog={blog}  />
              
        </div>}
    </>
  )
}

export default Hero