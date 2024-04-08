import { Link } from 'react-router-dom'
import './brands.css'

const Brands = () => {
  return (
    <div>
      <h1 className='brand_main_title'><i>Shop by brand</i></h1>

      <div className="brands_main_wrapper">
        
      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/9/1/9156JbBzV4L._AC_SL1500_.jpg" alt="" />
      <br />
      <b className='brand_name_s'>By essie</b>
      <br />
      <Link to='essie' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://i.insider.com/5f3309b67924a1486f159e98?width=700" alt="" />
      <br />
      <b className='brand_name_s'>By fenty</b>
      <br />
      <Link to='fenty' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://images.ctfassets.net/pi28xy1s107o/15oNhuMFsnR7mF8nCpFVi2/96d382b49a66e9d81d7d6878a9707a79/BIQ_SQUARE_SPLIT_IMAGES_-_2023-10-12T165956.716.jpg?w=330&h=270" alt="" />
      <br />
      <b className='brand_name_s'>By nyx</b>
      <br />
      <Link to='nyx' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://www.milanimakeup.co.uk/images/detailed/38/Satin.jpg" alt="" />
      <br />
      <b className='brand_name_s'>By milani</b>
      <br />
      <Link to='milani' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3kuOjVXJAy0ICCSEQOhpOWmeqbszDcNwCTu4W-KvuA&s" alt="" />
      <br />
      <b className='brand_name_s'>By revlon</b>
      <br />
      <Link to='revlon' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbH7ETp4WNxQNfUWaXIQFJ7pCs0DultyWPl8FEBfN_wg&s" alt="" />
      <br />
      <b className='brand_name_s'>By zorah</b>
      <br />
      <Link to='zorah' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHPiNmodU5pa8jiTl-pgBlVCaQMNgW3WW1-ezAOgAi0QLra2DUJ1BfJ6ZL9aUWb64OdtmoqVY8jnAIfNbmidQE87YeFojRYJnpvCFeD1GnWrjUZ5rO14HB6NefR89ArKUa_StnVnqrKTw/s1600/Marcelle.jpg" alt="" />
      <br />
      <b className='brand_name_s'>By maybelline</b>
      <br />
      <Link to='maybelline' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZW8qH3IUGa4MityQLrANDgkKEldXp65dKaYIpWxtLQ&s" alt="" />
      <br />
      <b className='brand_name_s'>By w3llpeople</b>
      <br />
      <Link to='w3llpeople' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>
 
  
      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://hips.hearstapps.com/hmg-prod/images/glossier-you-review-1673887116.png?crop=0.668xw:1.00xh;0.250xw,0&resize=1200:*" alt="" />
      <br />
      <b className='brand_name_s'>By glossier</b>
      <br />
      <Link to='glossier' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>


      <div className='brands_wrapper'>
      <img width={200}  className='brand_image' src="https://cdn.crueltyfreekitty.com/wp-content/uploads/2019/10/pure-anada.jpg" alt="" />
      <br />
      <b className='brand_name_s'>By  covergirl</b>
      <br />
      <Link to='covergirl' className='brands_link'>
      <button className='brand_btn'>Shop now</button>
      </Link>
      </div>

      </div>
    </div>
  )
}

export default Brands