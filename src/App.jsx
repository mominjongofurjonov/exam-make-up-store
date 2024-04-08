
import './App.css'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import {Routes, Route} from 'react-router-dom'
import Blush from './pages/blush/Blush'
import Bronzer from './pages/bronzer/Bronzer'
import Eyebrow from './pages/eyebrow/Eyebrow'
import Eyeshadow from './pages/eyeshadow/Eyeshadow'
import Eyeliner from './pages/eyeliner/Eyeliner'
import Foundation from './pages/foundation/Foundation'
import Lipliner from './pages/lipliner/Lipliner'
import Lipstick from './pages/Lipstick/Lipstick'
import Mascara from './pages/mascara/Mascara'
import Nailpolish from './pages/nailpolish/Nailpolish'
import {useLocation} from 'react-router-dom'
import LikedProducts from './pages/likedproducts/LikedProducts'
import Selectedproducts from './pages/selectedproducts/Selectedproducts'
import Brands from './components/brands/Brands'
import Essie from './pages/essie/Essie'
import Fenty from './pages/fenty/Fenty'
import Nyx from './pages/nyx/Nyx'
import Milani from './pages/milani/Milani'
import Revlon from './pages/revlon/Revlon'
import Zorah from './pages/zorah/Zorah'
import Glossier from './pages/glossier/Glossier'
import Covergirl from './pages/covergirl/Covergirl'
import Advert from './components/advert/Advert'
import Products from './components/products/Products'
import Blushview from './pages/blushview/Blushview'
import Bronzerview from './pages/bronzerview/Bronzerview'
import Eyebrowview from './pages/eyebrowview/Eyebrowview'
import Eyelinerview from './pages/eyelinerview/Eyelinerview'
import Eyeshadowview from './pages/eyeshadowview/Eyeshadow'
import Foundationview from './pages/foundationview/Foundationview'
import Liplinerview from './pages/liplinerview/Liplinerview'
import Lipstickview from './pages/lipstickview/Lipstickview'
import Mascaraview from './pages/mascaraview/Mascaraview'
import Nailpolishview from './pages/nailpolishview/Nailpolishview'
import Essieview from './pages/essieview/Essieview'
import Fentyview from './pages/fentyview/Fentyview'
import Glossierview from './pages/glossierview/Glossierview'
import Milaniview from './pages/milaniview/Milaniview'
import Nyxview from './pages/nyxview/Nyxview'
import Covergirlview from './pages/covergirlview/Covergirlview'
import Maybellineview from './pages/maybellineview/Maybellineview'
import Maybelline from './pages/maybelline/Maybelline'
import Revlonview from './pages/revlonview/Revlonview'
import W3llpeopleview from './pages/w3peopleview/W3llpeopleview'
import W3llpeople from './pages/w3llpeople/W3llpeople'
import Zorahview from './pages/zorahview/Zorahview'
import Productsview from './pages/productsview/Productsview'

function App() {

   

   const { pathname } = useLocation()

   

  return (
    <div className='app'>
    <Nav/>
    {
      pathname === "/" ? <Header/> : <></>
    }

    {
      pathname === '/' ? <Brands/> : <></>
    }

    {
      pathname === '/' ? <Advert/> : <></>
    }

    {
      pathname === '/' ? <Products/> : <></>
    }
    <Routes>
    <Route path='/blush' element={<Blush/>}/>
    <Route path='/bronzer' element={<Bronzer/>}/>
    <Route path='/eyebrow' element={<Eyebrow/>}/>
    <Route path='/eyeliner' element={<Eyeliner/>}/>
    <Route path='/eyeshadow' element={<Eyeshadow/>}/>
    <Route path='/foundation' element={<Foundation/>}/>
    <Route path='/lipliner' element={<Lipliner/>}/>
    <Route path='/lipstick' element={<Lipstick/>}/>
    <Route path='/mascara' element={<Mascara/>}/>
    <Route path='/nailpolish' element={<Nailpolish/>}/>
    <Route path='/likedproducts' element={<LikedProducts/>}/>
    <Route path='/checkout' element={<Selectedproducts/>}/>
    <Route path='/essie' element={<Essie/>}/>
    <Route path='/fenty' element={<Fenty/>}/>
    <Route path='/nyx' element={<Nyx/>}/>
    <Route path='/milani' element={<Milani/>}/>
    <Route path='/revlon' element={<Revlon/>}/>
    <Route path='/zorah' element={<Zorah/>}/>
    <Route path='/maybelline' element={<Maybelline/>}/>
    <Route path='/w3llpeople' element={<W3llpeople/>}/>
    <Route path='/glossier' element={<Glossier/>}/>
    <Route path='/covergirl' element={<Covergirl/>}/>
    <Route path='/blush/:productId' element={<Blushview/>}/>
    <Route path='/bronzer/:productId' element={<Bronzerview/>}/>
    <Route path='/eyebrow/:productId' element={<Eyebrowview/>}/>
    <Route path='/eyeliner/:productId' element={<Eyelinerview/>}/>
    <Route path='/eyeshadow/:productId' element={<Eyeshadowview/>}/>
    <Route path='/foundation/:productId' element={<Foundationview/>}/>
    <Route path='/lipliner/:productId' element={<Liplinerview/>}/>
    <Route path='/lipstick/:productId' element={<Lipstickview/>}/>
    <Route path='/mascara/:productId' element={<Mascaraview/>}/>
    <Route path='/nailpolish/:productId' element={<Nailpolishview/>}/>
    <Route path='/essie/:productId' element={<Essieview/>}/>
    <Route path='/fenty/:productId' element={<Fentyview/>}/>
    <Route path='/glossier/:productId' element={<Glossierview/>}/>
    <Route path='/maybelline/:productId' element={<Maybellineview/>}/>
    <Route path='/milani/:productId' element={<Milaniview/>}/>
    <Route path='/nyx/:productId' element={<Nyxview/>}/>
    <Route path='/covergirl/:productId' element={<Covergirlview/>}/>
    <Route path='/revlon/:productId' element={<Revlonview/>}/>
    <Route path='/w3llpeople/:productId' element={<W3llpeopleview/>}/>
    <Route path='/zorah/:productId' element={<Zorahview/>}/>
    <Route path='/products/:productId' element={<Productsview/>}/>
    </Routes>
    </div>
  )
}

export default App
