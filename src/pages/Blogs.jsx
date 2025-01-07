 
import FetchBlogs from '../components/blogs/FetchBlogs' 

const Blogs = () => { 

  return (
    <div>
        <h2 className="pagetitle">Blogs</h2>
        <div className="content">
            <FetchBlogs />
        </div>
    </div>
  )
}

export default Blogs