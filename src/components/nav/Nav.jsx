import './nav.css'
import beautybayicon from './beautybayicon.png'
import { IoSearch } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import {  Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const Nav = () => {

  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [searchingItem, setSearchingItem] = useState("")

   const  handleSubmit = (e) => {
   e.preventDefault()  
     navigate(`/${searchingItem}`)
     setSearchingItem("")
   }
  
 

  return (
    <div>
      <div className='navbar_wrapper'>
          <img src={beautybayicon} alt=""  width={85} height={40}/>
            <form onSubmit={handleSubmit}>
              <input onChange={e => setSearchingItem(e.target.value)} value={searchingItem}  className='main_input-search' type="search" placeholder='Search product, brands' />
             <button><IoSearch className='search-btn'/></button>
            </form>
            <ul>
            <li><p>EDITED</p></li>
            <li> <p>TRIBE</p></li>
            <li><TbTruckDelivery/></li>
            <li><CgProfile/></li>
            <li><Link to='likedproducts'><FaRegHeart/></Link></li>
            <li> <Link to='checkout'><SlBag/></Link></li>
        </ul>
      </div>
      <div className='links'>
        <ul className='ul_links'>
          <li><NavLink to='/'>By beauty bay</NavLink></li>
          <li><NavLink style={{color: pathname === "/blush" ? "blueviolet" : "black"}} to='blush'>Blush</NavLink></li>
          <li><NavLink style={{color: pathname === "/bronzer" ? "blueviolet" : "black"}} to='bronzer'>Bronzer</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyebrow" ? "blueviolet" : "black"}} to='eyebrow'>Eyebrow</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyeliner" ? "blueviolet" : "black"}} to='eyeliner'>Eyeliner</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyeshadow" ? "blueviolet" : "black"}} to='eyeshadow'>Eye shadow</NavLink></li>
          <li><NavLink style={{color: pathname === "/foundation" ? "blueviolet" : "black"}} to='foundation'>Foundation</NavLink></li>
          <li><NavLink style={{color: pathname === "/lipliner" ? "blueviolet" : "black"}} to='lipliner'>Lip liner</NavLink></li>
          <li><NavLink style={{color: pathname === "/lipstick" ? "blueviolet" : "black"}} to='lipstick'>Lipstick</NavLink></li>
          <li><NavLink style={{color: pathname === "/mascara" ? "blueviolet" : "black"}} to='mascara'>Mascara</NavLink></li>
          <li><NavLink style={{color: pathname === "/nailpolish" ? "blueviolet" : "black"}} to='nailpolish'>Nail polish</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav