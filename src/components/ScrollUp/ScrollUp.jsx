import './ScrollUp.css'

const ScrollUp = () =>{

    let scroll = () => window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
        color: 'red'
    })
    return(
        <>
        <div className='scroll'>
        <button className='scroll-up' onClick={scroll}>UP</button>
        </div>
        </>
    );
};
export default ScrollUp