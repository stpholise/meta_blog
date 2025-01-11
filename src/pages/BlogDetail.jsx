 
 import { useParams } from 'react-router-dom'
 import { useFetchSingleBlog } from '../hooks/useFechBlogs'
import { useFetchComments } from '../hooks/useFechBlogs' 
import '../styles/blogDetail.css' 
import HeroCard from '../components/user/HeroCard'
 
import DOMPurify from 'dompurify';


const BlogDetail = () => { 
    const  { id } = useParams() 
    const { blog, isLoading, error } = useFetchSingleBlog({id})
    
    const {comments} = useFetchComments({id})
    const sanitizedHtml = blog ? DOMPurify.sanitize(blog.body_html) : '';
 
  
  return (
    <div className="">
    {   isLoading  ? <p>Loading .....</p>
        :
        error ?
        <p>Error: {error.message}</p>
        :   blog ?
        <div className="blogDetail">
                <HeroCard blog={blog} />
                            <div className="blog-cover">               
                                <img src={blog.cover_image} className='coverImage' alt="" /> 
                            <div className="coverText"> 
                                <p>{blog.tag_list}</p>
                           </div> 
            </div>
            <h1 className='articleTitle' >{blog.title}</h1>
            <div className='articleText' dangerouslySetInnerHTML={{ __html: sanitizedHtml   }}  /> 
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