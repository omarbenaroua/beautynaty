import { useEffect, useState } from 'react';
import './ScrollUp.css'


const ScrollUp = () =>{
    const [scrollY, setScrollY] = useState(0);
    const [scrolButton, setScrolButton] = useState(false);
    console.log(scrollY)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
  
      if (currentScrollY > 1000) {
        setScrolButton(true);
      } else {
        setScrolButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

    let scroll = () => window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
        color: 'red'
    })
    return scrolButton &&(
        <>
        <div className='scroll'>
        <button className='scroll-up' onClick={scroll}>
            <i className="fa-solid fa-up-long"></i>
        </button>
        </div>
        </>
    );
};
export default ScrollUp