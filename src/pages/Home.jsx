import Header from '../components/Header'
import Advertisement from '../components/Advertisement'
import LatestPosts from '../components/LatestPosts'
import Footer from '../components/Footer'
import Hero_Image from '../assets/hero_Image.jpg'
import '../styles/Home.css'
import User_2_image from '../assets/profile_image/image_2.jpg'


const Home = () => {
  return (
    <div> 
        <Header />
        <div className="content">
          <div className="hero">
            <div className="heroImgCont">
                <img src={Hero_Image} className='heroImage' alt="" /> 
            </div>
            <div className="heroCard">
                <div className="heroCardText">
                  <h5 className="heroCardCategory">Technology</h5>
                  <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                </div>
                <div className="postUserInfo">
                  <div className="userImgWrapper">
                      <img src={User_2_image} className='userImage' alt="" />
                      <p className="postUserName">Jason Francisco</p>
                  </div>
                  <p className="postDate">August 20, 2022 </p>
                </div>
            </div>
          </div>
          <Advertisement />
          <div className="latestPostWrapper">
            <h2> Latest Post</h2>
            <LatestPosts />
          </div>
          <Advertisement /> 
        </div>
        <Footer />
    </div>
  )
}

export default Home