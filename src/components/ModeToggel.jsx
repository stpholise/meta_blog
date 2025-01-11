import { useState,useEffect } from 'react'
import Ball from '../assets/icons/Vector.svg' 
import { useDispatch,    } from 'react-redux'
import { toggleDarkMode } from '../store/AppSlice'

const ModeToggel = () => {
    const [darkMode, setDarkMode] = useState(false)
    const dispatch = useDispatch()

    // const darkModeState = useSelector(state => state.app.darkMode)
    
    const handleDarkMode = (darkMode) => {
        setDarkMode(!darkMode)
        dispatch(toggleDarkMode(darkMode))
      
    }

useEffect(()=> {
    if(darkMode) {
        document.body.classList.add('darkMode')
      
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