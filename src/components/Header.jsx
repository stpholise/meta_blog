 import Navigation from './Navigation'
 import Logo from '../assets/Logo_with_text.svg'
 import LightHeadingLogo from '../assets/icons/Light_Heading_Logo.svg'
 import Search from './Search'
 import '../styles/Header.css'
 import { Link } from 'react-router-dom'
 import { useSelector } from 'react-redux'
 

const Header = () => {
  const darkModeState = useSelector(state => state.app.darkMode)


  return (
    <div className='header'>
        <Link to={'/'} className="logoCont">
          {
            darkModeState ?
            <img src={Logo} className='logo' alt="" />
            :<img src={LightHeadingLogo} className='logo' alt="" />
          } 
        </Link>
        <Navigation />
        <Search />
        
    </div>
  )
}

export default Header