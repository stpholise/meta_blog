 

const userCard = ({user}) => {
  return (
    <div className="userCard">
         <div className="profile_image_cont"> 
            <img src={user.profile_image} alt=""  />
        </div>
        <div className="text">
            <h1>{user.name}</h1> 
            <p>@{user.username}</p>
        </div>
            
    </div>
  )
}

export default userCard