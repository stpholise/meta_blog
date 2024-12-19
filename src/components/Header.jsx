 import Navigation from './Navigation'
 import Logo from '../assets/Logo_with_text.svg'
 import Search from './Search'
 import '../styles/Header.css'
 import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={'/'} className="logoCont">
          <img src={Logo} className='logo' alt="" />
        </Link>
        <Navigation />
        <Search />
        
    </div>
  )
}

export default Header