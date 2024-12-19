import { Link } from 'react-router-dom'

const navigation = () => {
    const pages = [
        {value: '/', label:'Home'},
        {value: '/blog', label:'Blog'},
        {value: '/contact', label:'Contact'}
    ]
  return (
    <div className='pageTopNav'>
        {
            pages.map((page, index) => (
                <div className="navLink" key={index}>
                    <Link to={page.value}> {page.label}</Link>
                </div>
            ))
        }
        
    </div>
  )
}

export default navigation