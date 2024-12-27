import { Link, useLocation } from 'react-router-dom'
import '../styles/navigation.css'
import Menu_1 from '/menu-01.svg'
import CloseIcon from '/close-Icon.svg'
// import LightCloseIcon from '/light-close-icon.svg'
import { useState, useEffect } from 'react'
import ModeToggle from './ModeToggel'
import 'animate.css'


const Navigation = () => {
    const [ showNav, setShowNav] = useState(false)
    const location = useLocation()
    const pages = [
        {value: '/', label:'Home'},
        {value: '/blogs', label:'Blog'},
        {value: '/contact', label:'Contact'}
    ]

    const handleNav = () => {
        setShowNav(!showNav)
    }

    useEffect(() => {
        setShowNav(false)
    }, [location])

  return (
    <>
        {
            showNav && <div className="overlay" onClick={handleNav}></div>
        }
        <div className={ showNav ? 'navigation showNav animate__animated animate__bounceInDown ' : 'navigation '}>
            {
            }
            <button className='navigationCloseBtn' onClick={handleNav}>
                <img src={CloseIcon} alt='close Icon' />
            </button>
            {
                pages.map((page, index) => (
                    <div className="navLink" key={index}>
                        <Link to={page.value}> {page.label}</Link>
                    </div>
                ))
               
            } 
             <div className="mobile">
                    <ModeToggle /> 

                </div>
        </div>
        <button className="navigationOpenBtn" onClick={handleNav}>
            <img src={Menu_1} alt="Menu Icon" />
        </button>
    </>
  )
}

export default Navigation