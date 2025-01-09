
import { PropTypes } from 'prop-types'
import '../../styles/userHero.css'
import UserCard from './userCard'


 const userHero = ({profile}) => {
   return ( 
        <div className='userHero'>   
              <UserCard user={profile} />
           { (profile.summary) && <p className='summary'> {profile.summary}</p>}
           { (profile.github_username) && <a  href={`https://github.com/${profile.github_username}`} > Github: {profile.github_username}</a>}
           { (profile.twitter_username) && <a href={`https://x.com/${profile.twitter_username}`} target='_blank'>X: {profile.twitter_username}</a>}
           { (profile.website_url) && <p>website: {profile.website_url}</p>}
           { (profile.location) && <p>Location: {profile.location}</p>} 
            <p> Joined : {profile.joined_at}</p>
        </div> 
   )
 }
 
    userHero.propTypes = {
    profile: PropTypes.object.isRequired
    }

 export default userHero