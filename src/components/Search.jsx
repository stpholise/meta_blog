 import SearchIcon from '../assets/icons/search-outline.svg'
 import ModeToggle from './ModeToggel'

const Search = () => {
  return (
    <div className='headerRight'>
   
      <div className="serchInputContainer">
          <input type="text" className="serchInput" />
          <img src={SearchIcon} className='searchIcon' alt="" />
      </div>
      <ModeToggle />

    </div>
  )
}

export default Search