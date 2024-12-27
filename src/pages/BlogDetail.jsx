 
 import { useParams } from 'react-router-dom'
 import { useFetchSingleBlog } from '../hooks/useFechBlogs'
import { useFetchComments } from '../hooks/useFechBlogs' 
import '../styles/blogDetail.css' 

 
const BlogDetail = () => { 
    const  { id } = useParams()
    console.log(id)
    const { blog, isLoading, error } = useFetchSingleBlog({id})
    
    const {comments} = useFetchComments({id})
 
 console.log('comments', comments.body)
  
  return (
    <div className="">
    {   isLoading  ? <p>Loading .....</p>
        :
        error ?
        <p>Error: {error.message}</p>
        :   blog ?
        <div>
            <div className="blog-cover">
                            <img src={blog.cover_image} className='coverImage' alt="" /> 
                        </div>
            <h1 className='articleTitle' >{blog.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog.body_html }}  className='articleText'/>
            {
              comments.length >= 1 && 
              <div>
                <h3>Comments</h3>  
                  <div className="commentContainer">
                    {
                        comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <h4>{comment.user.name}</h4>
                                <p>{comment.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            }
           
            
        </div>
         : (
            <p>No blog found</p>  // In case blog is null or undefined
        )
    }
</div>
  )
}

export default BlogDetail