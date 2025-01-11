 import { Link } from 'react-router-dom'
 import NewsLetter from './NewsLetter'
import  '../styles/footer.css'  
import MetaBlog from '../assets/icons/MetaBlog.svg'
import LightMetaBlog from '../assets/icons/Light_MetaBlog.svg'
import Logo_ from '../assets/icons/Logo_.svg'
import LogoLight from '../assets/icons/Logo_Light.svg'
import { useSelector } from 'react-redux'


 const quickLink = [
  { value:'/',  label: 'Home'},
  {   label: 'About'},
  { value:'/blogs', label: 'Blogs'}, 
  { value: '/contact', label:'Contact'},
 ]
 const categories = [
   {value: 'lifestyle', label: 'Lifestyle'},
   {value: 'technology', label: 'Technology'},
   {value: 'travel', label: 'Travel'},
   {value: 'businesss', label:'Business'},
   {value: 'economy', label:'Economy'},
   {value: 'sports', label:'Sports'}
 ]

 const policies = [
  {value:'/temsofuse', label:'Terms of Use'},
  {value:'/privacypolicy', label:'Privacy Policy'},
  {value:'/cookiepolicy', label:'Cookie Policy'}
 ]
 
 const Footer = () => {

  const darkModeState = useSelector(state => state.app.darkMode)

   return (
      <footer>
        <div className="footerContent">
          <div className="footerConetentTop">
            <div className="footerAbout">
              <div className="footerAboutTop">
                <h3   className='footerTitle'>
                  About
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p> 
              </div>
              <div className="footerAboutbottom">
                <div className="footerContact">
                    <div>   <h4 className='footerTitle inlineHead'>Email : </h4>
                        info@jstemplate.net
                        </div>
                </div>
                <div className="footerContact">
                    <div> <h4   className='footerTitle inlineHead'>Phone : </h4>
                        880 123 456 789
                    </div>
                </div>
              </div>
            </div>

            <div className="footerLinks">
              <div className="footerQuickLink">
                  <h3 className="footerLinkTitle footerTitle">Quick Links</h3>
                  <div className="linkItemsColumn">
                    {
                      quickLink.map((item, index) => (
                        <Link to={item.value} className='footerLinkItem' key={index} >
                          {item.label}
                        </Link>
                      ))
                    }
                  </div>
              </div>
              <div className="footerCaegory">
                <h3 className="footerLinkTitle footerTitle">Categories</h3>
                <div className="linkItemsColumn">
                  {
                        categories.map((item, index) => (
                          <Link to={item.value} className='footerLinkItem' key={index} >
                            {item.label}
                          </Link>
                        ))
                  }
                  </div>
              </div>
            </div> 
            <NewsLetter /> 
          </div>
          <div className="footerBottom">
            <div className="bottomLeft">
                  {
                    darkModeState ? 
                      <img src={Logo_} alt="" className="footerLogo" />
                      :  
                      <img src={LogoLight} alt="" className="footerLogo" />
                  }

                  <div className="flexCenter">
                    {
                      darkModeState ? 
                      <img src={MetaBlog} alt="" className="metaBlog" /> 
                      :
                      <img src={LightMetaBlog} alt="" className="metaBlog" /> 
                    }
                    <p className="smallP">© JS Template 2023. All Rights Reserved.</p>
                  </div>
            </div>
            <div className="bottomRight">
                    {
                      policies.map((item, index) => (
                        <Link to={item.value} className='footerLinkItem' key={index} >
                          {item.label}
                        </Link>
                      ))
                    }
            </div>
          </div>
        </div>
     </footer>
   )
 }
 
 export default Footer