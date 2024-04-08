import {useSelector, useDispatch} from "react-redux"
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import './selected.css'
import { deleteItem } from '../../redux/mainSlice';

const Selectedproducts = () => {


  const dispatch = useDispatch();
  const cartData = useSelector(state => state.actions.stored);
  
  const removeFromCart = (id) => {
    dispatch(deleteItem(id))
  }





  console.log(cartData)

  return (
    <div>
      <h1 className='added_card_title'>Your bag</h1>
        <h2><i>{cartData.length} items</i></h2>
        <div className='all_cards_wrapper'>
       { 
        cartData.map(product => 
          <div className='selected_product' key={product.id}>
             <div>
             <img className='card_images' src={product.api_featured_image} alt="#" />
             </div>
            <div>
              <h2 className='card_title'>{product.name}</h2>
              <div className="rate_wrapper">
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStarHalf className="star_icon"/>
               </div>
              <strong className='card_price'>${product.price}</strong>   
              <br />
            <button onClick={() => removeFromCart(product.id)} className='added_card_btn'>Remove from bag</button>
            </div>
            <div style={{marginTop: '20px'}}>
            </div>
          </div>  
        )
      }
      </div>
    </div>
  )
}

export default Selectedproducts