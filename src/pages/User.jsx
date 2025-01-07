
import { useFetchUserProfile, useFetchUserArticles } from '../hooks/useFechBlogs'
import { useParams } from 'react-router-dom' 
import BlogCard from '../components/blogs/BlogCard'
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
          <div>
            <img src={profile.profile_image} alt=""  />
            <h1>{username}</h1> 
            <p>{profile.name}</p>
            <p> Joined : {profile.joined_at}</p>
           { (profile.location) && <p>Location: {profile.location}</p>}
           { (profile.twitter_username) && <p>Location: {profile.twitter_username}</p>}
           { (profile.website_url) && <p>Location: {profile.website_url}</p>}
          </div>
        ) : (
          <div>Loading...</div>
        )
      }

      {
        !isLoadingArticle ?
        (
          <div className='latestpostContainer'>
            {
            articles && (
              
              articles.map((post, index) => (
                <BlogCard post={post} key={index} />
            )))}
          </div>
          
      )
        : <div>Loading articles...</div>
      }
    </div>
  )
}

export default User