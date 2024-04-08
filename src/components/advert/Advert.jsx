import { Link } from 'react-router-dom'
import './advert.css'


const Advert = () => {
  return (
    <>
    <div className='line'></div>
    <div className='advert_main_wrapper'>
        <div className='advert_image_wrapper'>
        <img className='advert_icon' src="https://images.ctfassets.net/eoaaqxyywn6o/23v7jAi5uOXt4RqDG0vEQd/56f169f83be2ee479797a6baa08e5bef/MicrosoftTeams-image__67_.png" alt="" />
        </div>
        <div className='advert_text_wrapper'>
          <h3 className='advert_mini_title'>Calling all Beauty Obsessives!</h3>
          <p className='mini_text'>Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven 
            haircare, By BEAUTY BAY has everything you need to discover your next best obsession.</p>
            <Link to='lipstick' className='shop_btn1'>Shop now</Link>
        </div>
    </div>
    </>
  )
}

export default Advert