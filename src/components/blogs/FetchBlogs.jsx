 
  
 import  useFetchBlogs  from '../../hooks/useFechBlogs'  
 import '../../styles/latestPosts.css'
 import '../../styles/blogs.css'
 import BlogCard from './BlogCard'
 import { useState, useEffect } from 'react'
 import BlogsHero from './BlogsHero'
 
 const FetchBlogs = (  ) => {
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ blog, setBlog ] = useState(null)

  const {blogs, isLoading, error} = useFetchBlogs( {pageNumber})  

  const handleViewMore = () => {
    setPageNumber(prev => prev + 1)
    console.log(pageNumber)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  },[pageNumber])

  const handleVieLess = () => {
    if(pageNumber > 1) {
        setPageNumber(prev => prev - 1)
    }
  }

  useEffect(() => {
    setBlog(blogs.find(blog => blog.cover_image !== null) || null);  // set the first blog with a cover image
  }, [blogs]);
 
 
   return (
        <> 
              { isLoading  ? <p>Loading .....</p>
                :
                error ?
                <p>Error: {error.message}</p>
                :   blogs ?(
                blog ?
                <div> 
                  <BlogsHero blog={blog} />
                </div>
                : (
                  <p>No blog found</p>  // In case blog is null or undefined
              )): (
                <p>No blogs available</p> // In case blogs is null or empty
              )
              }
         
                <div className='latestpostContainer'>
                    {
                    blogs &&
                    blogs
                    .filter((blog, index) => index !== blogs.findIndex(blog => blog.cover_image !== null)) // Remove the first blog with a cover image
                    .slice(0,30)
                    .map((post, index) =>(
                        <BlogCard post={post} key={index}     />
                    ) 
                )
                    }

                </div> 
            <div className="viewButtons">
                {
                    (!isLoading && pageNumber > 1) && <button className="allPostBtn"  onClick={handleVieLess}  disabled={isLoading}>  View Less  </button>
                }
                <button className="allPostBtn"  onClick={handleViewMore}  disabled={isLoading}>  View More  </button>
            
        
            </div>
        </>
   )
 }

 

 
 export default FetchBlogs