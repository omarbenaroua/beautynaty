import React from './Price.css'
import { Title , PriceCard} from '../../components';
import PriceData from '../../Data/PriceData'

const Price = () => {
  const infoPrice = PriceData.map((info) =>{
    return <PriceCard 
    key={info.id} 
    id={info.id} 
    img={info.image} 
    title={info.title} 
    text={info.text} 
    price={info.price}/>
  })
  return (
    <>
    <Title>Products list </Title>
    <div className="price" id="price">
    <div className="container">
    {infoPrice}
    </div>
    </div>
    </>
  );
};

export default Price