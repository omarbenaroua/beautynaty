import "./PriceCard.css";
import {PrimaryButton} from "../../index";
import { addToCart } from "../../../redux/cardReducer";
import { useDispatch } from "react-redux";


const PriceCard = (info) => {
const dispatch = useDispatch();
  return (
    <>
      <div className="price-box" key={info.id}>
        <img className="img-price" src={info.img} alt="" />
        <div className="content">
          <h3>{info.title}</h3>
          <p>{info.text}</p>
        </div>
        <div className="info">
          <a href=" ">{info.price}€</a>
          <PrimaryButton action={() => dispatch(addToCart({
            id: info.id,
            img: info.img,
            title: info.title,
            text: info.text,
            price: info.price
          }
          ))}>
            Add
            <i className="fa-solid fa-cart-shopping"></i>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
