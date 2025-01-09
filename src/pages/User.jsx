
import { useFetchUserProfile, useFetchUserArticles } from '../hooks/useFechBlogs'
import { useParams } from 'react-router-dom' 
import BlogCard from '../components/blogs/BlogCard'
import UserHero from '../components/user/userHero'
// import { useLocation } from 'react-router-dom'


const User = () => {
  // const location = useLocation()
  const { username } = useParams()
  // const { name } = location.state || {}
  const {profile, isLoading: isLoadingProfile } = useFetchUserProfile({username })
  const {articles, isLoading: isLoadingArticle} = useFetchUserArticles({username})
 
  const isLoading = isLoadingProfile || isLoadingArticle
 

  return (
    <div className='userPage'>
      {
        !isLoading ? ( 
            <UserHero profile={profile} /> 
        ) : (
          <div>Loading...</div>
        )
      }

      {
        !isLoadingArticle ?
        (    
          <div className="content">
            <div className='latestpostContainer'>
              {
              articles && (
                
                articles.map((post, index) => (
                  <BlogCard post={post} key={index} />
              )))}
            </div>
          </div>
          
      )
        : <div>Loading articles...</div>
      }
    </div>
  )
}

export default User