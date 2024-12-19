 import EmailIcon from '../assets/icons/Email.svg'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h3>Weekly Newnletter</h3>
        <p>Get blog articles and offers via email</p>
        <div className="">
            <div className="mailInputContainer">
                <input type="email" placeholder="Your Email"  />
                <img    src={EmailIcon} alt="email icon"  className='emailIcon' />

            </div>
            <button className="subscribeBtn"> Subscribe </button>
        </div>
    </div>
  )
}

export default NewsLetter