import  { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import "./eyeshadow.css";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { addItem, plusLike } from "../../redux/mainSlice";

const Eyeshadow = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

   
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow")
        .then((response) => response.json())
        .then((newresponse) => {
          setProduct(newresponse);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 1200); 

    return () => clearTimeout(timeout);
  }, []);

  
  const addToCart = (product) => {
    product.count = 1
    dispatch(addItem(product))
  }

  const handleLikeProduct = (product) => {
    dispatch(plusLike(product))
  }

  return (
    <div>
      <h1 className="page_title"><i>{product.length} items</i></h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="all_cards_wrapper">
          {product.map((pr) => (
              <div key={pr.id} className="card_product" >
              <Link to={`/eyeshadow/${pr.id}`}><img  className="card_images" width={200} src={pr.api_featured_image} alt="" /></Link>
              <br />
              <FaRegHeart onClick={() => handleLikeProduct(pr)} className="like_icon"/>
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
      )}
    </div>
  );
};

export default Eyeshadow;
