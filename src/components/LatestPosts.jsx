 import Image_1 from '../assets/post_image/Rectangle_1.jpg'
 import Image_2 from '../assets/post_image/Rectangle_2.jpg'
 import Image_3 from '../assets/post_image/Rectangle_3.jpg'
 import Image_4 from '../assets/post_image/Rectangle_4.jpg'
 import Image_5 from '../assets/post_image/Rectangle_5.jpg'
 import Image_6 from '../assets/post_image/Rectangle_6.jpg'
 import Image_7 from '../assets/post_image/Rectangle_7.jpg'
 import Image_8 from '../assets/post_image/Rectangle_8.jpg'
 import Image_9 from '../assets/post_image/Rectangle_9.jpg'
 import User_1_image from '../assets/profile_image/Image_1.jpg';
 import User_2_image from '../assets/profile_image/Image_2.jpg'
 import User_3_image from '../assets/profile_image/Image_3.jpg'
 import User_4_image from '../assets/profile_image/Image_4.jpg'
 import User_5_image from '../assets/profile_image/Image_5.jpg'
 


 
 import '../styles/latestPosts.css'

 
 const LatestPosts = () => {
    const posts =[
        {image: Image_1, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_1_image, userName:'Tracey Wilson', postedAt:'August 20, 2022'}
        },
        {image: Image_2, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_2_image, userName:'Jason Francisco', postedAt:'August 20, 2022'}
        },
        {image: Image_3, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_3_image, userName:'Elizabeth Slavin', postedAt:'August 20, 2022'}
        }, 
        {image: Image_4, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_4_image, userName:'Ernie Smith', postedAt:'August 20, 2022'}
        },
        {image: Image_5, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_5_image, userName:'Eric Smith', postedAt:'August 20, 2022'}
        },  
        {image: Image_6, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_1_image, userName:'Tracey Wilson', postedAt:'August 20, 2022'}
        },    
        {image: Image_7, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_2_image, userName:'Jason Francisco', postedAt:'August 20, 2022'}
        },    
        {image: Image_8, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_3_image, userName:'Elizabeth Slavin', postedAt:'August 20, 2022'}
        },    
        {image: Image_9, 
          title: 'The Impact of Technology on the Workplace: How Technology is Changing', 
          category: 'Technology', 
          user:{ userImage: User_4_image, userName:'Ernie Smith', postedAt:'August 20, 2022'}
        },  
    ]
   return (
    <>
     <div className='latestpostContainer'>
        {
          posts.map((post, index) =>(
            <div className="postContainer" key={index}>
                <div className="postTop">
                   <img src={post.image} alt="" /> 
                </div>
                <div className="postBottom"> 
                  <div className="postText">
                    <p className="postCategory">{post.category}</p>
                    <h3 className="postTitle">{post.title} </h3>
                  </div>
                  <div className="postUserInfo"> 
                    <div className="userImgWrapper">
                        <img src={post.user.userImage}  className='userImage'  alt="" />
                        <p className="postUserName">{post.user.userName}</p>
                    </div>
                    <p className="postDate">{post.user.postedAt} </p>
                  </div>

                </div>
            </div>
          ) )
        }

     </div>
        <button className="allPostBtn">  View All Post  </button>
     </>
   )
 }
 
 export default LatestPosts