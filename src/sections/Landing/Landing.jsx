import "./Landing.css"
import {TextBox , FaAngleLeft , FaAngleRight} from "../../components/index";
import Data from "../../Data/LandingData";
import { useState } from "react";

const Landing = () => {
  const [index , setIndex] = useState(0);
  const {image} = Data[index];

  const nextImage = () => {
    setIndex ((index) => {
      let newIndex = index >= 2 ? index - 2 : index + 1 ;
      return newIndex
    })
  }
  const prevImage = () => {
    setIndex((index) => {
      let newIndex = index <= 0 ? index + 2 : index - 1 ;
      return newIndex
    })
  }

  return (
    <>
      <div className="landing">
        <div className="overlay"></div>
        <img src={image} alt=" " />
        <TextBox/>
        <FaAngleLeft onClick={nextImage}/>
        <FaAngleRight onClick={prevImage}/>
      </div>
    </>
  );
};

export default Landing