import { PropTypes } from 'prop-types'

const UserBlock = ({user}) => {
  return (
    <div>
         <div className="userBlock">
           <div className="profile_image_cont"> 
              <img src={user.profile_image} alt=""  />
          </div>
          <div className="text">
              <h1>{user.name}</h1> 
              <p>{user.username}</p>
          </div>
              
      </div>
    </div>
  )
}

UserBlock.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserBlock