 
import Advertisement from '../components/Advertisement'
import LatestPosts from '../components/LatestPosts' 
import '../styles/Home.css' 
import Hero from '../components/user/Hero'

const Home = () => {
  return (
    <div>  
        <div className="content">
          <Hero /> 
          <Advertisement />
          <div className="latestPostWrapper">
            <h2> Latest Post</h2>
            <LatestPosts />
          </div>
          <Advertisement /> 
        </div> 
    </div>
  )
}

export default Home