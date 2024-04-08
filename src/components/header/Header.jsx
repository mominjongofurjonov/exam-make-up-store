import { useEffect } from 'react'
import './header.css'
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Header = () => {


  useEffect(() => {
    fetch("")
  }, [])

  return (
    <div>
        <div className='header_wrapper'>
            <div className='main_image'></div>
            <div className='mini_div'>
                <div><h1 className='title'>PREPARE TO BE OBSESSED</h1></div>
                <p>You need these beauty essentials from By BEAUTY BAY</p>
                <Link to='/blush'><button className='shop_btn1'>Shop now</button></Link>
            </div>
        </div>

    <div className='three_card_wrapper'>
    <div className="center">
      <div className="article-card">
     <div className="content">
      <b  className="date">Conceal, Correct, Contour Palette</b>
      <Link style={{textDecoration: 'none', }} to='/foundation'><button className='shop_btn'> Shop now <span><PiCaretDoubleRightDuotone  className='toright_icon'/></span></button></Link>
    </div>
    <img src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/911/original/open-uri20171224-4-lx4vmq?1514082615" alt="article-cover" />
  </div>
</div>

<div className="center">
      <div className="article-card">
     <div className="content">
      <b  className="date">Generation G</b>
      <Link style={{textDecoration: 'none', }} to='/lipstick'><button className='shop_btn'> Shop now <span><PiCaretDoubleRightDuotone  className='toright_icon'/></span></button></Link>
    </div>
    <img  src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/999/original/open-uri20171227-4-2ul0s6?1514341420" alt="article-cover" />
  </div>
</div>

<div className="center">
      <div className="article-card">
     <div className="content">
      <b  className="date">Holiday Diorshow Pump n Volume Set</b>
      <Link style={{textDecoration: 'none', }} to='/eyeshadow'><button className='shop_btn'> Shop now <span><PiCaretDoubleRightDuotone  className='toright_icon'/></span></button></Link>
    </div>
    <img src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/698/original/open-uri20171223-4-t0oodf?1514062732" alt="article-cover" />
  </div>
</div>
    </div>
    </div>
  )
}

export default Header