import React from "./Cart.css";
import { useState , useEffect } from "react";
import {DeleteButton, SecondaryButton} from "../index";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { remouvAll, remouvCart } from "../../redux/cardReducer";

const CardShop = () => {
  // Cart List opening 
  const [cartList, setCartList] = useState(false);
  const showCardList = () => {cartList ? setCartList(false) : setCartList(true);};
  
  // Product with REDUX
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // Total price
  const total = products.map(datum => datum.price).reduce((a, b) => a + b , 0)
  console.log(total)

  // Total Price whith discount
  const [result, setDiscount] = useState(0);
  useEffect(() =>{
  setDiscount(total - (total * 10) / 100)
},[total])

// Total Price whith -30% discount
  const [newResult , setNewDiscount] = useState(0)
  const newDiscount = () =>{
    setNewDiscount(result - (result * 10) / 100);
  }

// Delete All with REDUX
  const deleteAll = () => {
    setNewDiscount(0);
    dispatch (remouvAll())
  }

  return (
    <>
      <button type="button" onClick={showCardList} className="btn btn-primary position-relative">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {products.length}
        </span>
      </button>
      <div className="card-shop" style={{ width: "25rem" }}>
        {cartList ? (
          <ol className="list-group list-group-numbered">
            {products.map((product) => (
              <div className="row g-0" key={product.id}>
                <div className="col-md-4">
                  <img src={product.img} className="img-fluid rounded-start" alt=" "/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">{product.price}€</p>
                    <span className="fa-solid fa-square-minus"
                      onClick={() =>dispatch( remouvCart({
                            id: product.id,
                            price: product.price,
                          }))
                          }>
                    </span>
                  </div>
                </div>
              </div>
            ))}
              <div className="info-cart">
                <p>Prezzo: {total}€</p>
                <p>Prezzo scontato: <em style={{color : "red"}}>{result}€</em></p>
                <p>Prezzo con l'scontato di benvenuto: <em style={{color : "red"}}>{newResult}€</em></p>
              <SecondaryButton onClick={newDiscount}>
                Calcola il tuo sconto di benvenuto del -30%.
              </SecondaryButton>
              <DeleteButton onClick={deleteAll}>
                Cancella tutto<span className="fa-solid fa-trash-arrow-up"/>
              </DeleteButton>
              </div>
          </ol>
        ):(" ")}
      </div>
    </>
  );
};

export default CardShop;