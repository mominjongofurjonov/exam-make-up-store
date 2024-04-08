import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem, plusLike } from "../../redux/mainSlice";

const Covergirlview = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`)
      .then((response) => response.data)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const dispatch = useDispatch();
  const handleLikeProduct = (product) => {
    dispatch(plusLike(product));
  };

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return loading ? (
    <div className="loader"></div>
  ) : (
    <div>
      <div className="anabelle-productview">
        {product && (
          <div className="product_view_wrapper">
            <div className="image_wrapper_view">
              <img
                width={500}
                height={500}
                className="view_image"
                src={product.api_featured_image}
                alt=""
              />
            </div>
            <div className="product-text">
              <h1>BY {product.brand}</h1>
              <h2>
                <i>{product.name}</i>
              </h2>
              <strong className="view_price">
                {product.price} {product.currency}
              </strong>
              <div className="rate_wrapper">
                <FaStar className="star_icon" />
                <FaStar className="star_icon" />
                <FaStar className="star_icon" />
                <FaStar className="star_icon" />
                <FaStarHalf className="star_icon" />
              </div>
              <i className="description">{product.description}</i>
              <div className="buttons_like_add">
                <button className="card_btn" onClick={() => addToCart(product)}>
                  Add to bag
                </button>
                <FaRegHeart
                  className="view_like"
                  onClick={() => handleLikeProduct(product)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Covergirlview;
