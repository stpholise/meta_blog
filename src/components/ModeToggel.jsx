import { useState,useEffect } from 'react'
import Ball from '../assets/icons/Vector.svg'

const ModeToggel = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode = (darkMode) => {
        setDarkMode(!darkMode)
     
    }

useEffect(()=> {
    if(darkMode) {
        document.body.classList.add('darkMode')
        console.log(document.body)
    }else(
        document.body.classList.remove('darkMode')
    )
}, [darkMode])

  return (
    <div>
        <button className={darkMode ? 'modeBtn active' :'modeBtn'} onClick={() => handleDarkMode(darkMode)}>
            <div className="ballContainer">
                <img className='toggleBall' src={Ball} alt="" /> 
            </div>
        </button>
    </div>
  )
}

export default ModeToggel