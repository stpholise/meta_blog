 
  
 import  useFetchBlogs  from '../../hooks/useFechBlogs'  
 import '../../styles/latestPosts.css'
 import '../../styles/blogs.css'
 import BlogCard from './BlogCard'
 import { useState, useEffect } from 'react'
 import BlogsHero from './BlogsHero'
 
 const FetchBlogs = (  ) => {
  const [ pageNumber, setPageNumber ] = useState(1)

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

   return (
        <> 
              { isLoading  ? <p>Loading .....</p>
                :
                error ?
                <p>Error: {error.message}</p>
                :   blogs ?
                <div> 
                  <BlogsHero blog={blogs[0]} />
                </div>
                : (
                  <p>No blog found</p>  // In case blog is null or undefined
              )
              }
         
                <div className='latestpostContainer'>
                    {
                    blogs &&
                    blogs.slice(1, 30).map((post, index) =>(
                        <BlogCard post={post} key={index}     />
                    ) 
                )
                    }

                </div> 
            <div className="viewButtons">
                {
                    (!isLoading && pageNumber > 1) && <button className="allPostBtn"  onClick={handleVieLess}>  View Less  </button>
                }
                <button className="allPostBtn"  onClick={handleViewMore}>  View More  </button>
            
        
            </div>
        </>
   )
 }

 

 
 export default FetchBlogs