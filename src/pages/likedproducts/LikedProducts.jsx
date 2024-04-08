import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { addItem, deleteLike } from '../../redux/mainSlice';


const LikedProducts = () => {

  const dispatch = useDispatch();
  const likedata = useSelector(state => state.actions.likes);

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  const handleDislikeProduct = (id) => {
    dispatch(deleteLike(id))
  }

  
  return (
    <div>
      <h1 className='added_card_title'>Your willings</h1>
      <h1 className="page_title"><i>{likedata.length} liked  items</i></h1>
        <div className="all_cards_wrapper">
          {likedata.map((pr) => (
              <div key={pr.id} className="card_product" >
              <img  className="card_images" width={200} src={pr.api_featured_image} alt="" />
              <br />
              <IoHeartDislikeOutline onClick={() => handleDislikeProduct(pr.id)} className="like_icon"/>
              <h2 className="card_brand">{pr.brand}</h2>
              <h3 className="card_title">{pr.name}</h3>
               <div className="rate_wrapper">
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStar className="star_icon"/>
               <FaStarHalf className="star_icon"/>
               </div>
              <strong className="card_price">{pr.price_sign}{pr.price}</strong>
              <br />
              <button className="card_btn" onClick={() => addToCart(pr)}>Add to bag</button>
            </div>
          ))}
        </div>

    </div>
  )
}

export default LikedProducts