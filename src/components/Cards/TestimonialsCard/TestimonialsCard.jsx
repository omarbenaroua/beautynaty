import "./TestimonialsCard.css";

//Testimonials Card
const TestimonialsCard = (info) => {
  return (
    <>
        <div className="testimonials" id="testimonials">
          <div className="box">
            <img decoding="async" src={info.image} alt="" />
            <h3>{info.name}</h3>
            <span className="title">{info.title}</span>
            <div className="rate">
              <p><i className="filled fas fa-star"></i>{info.vote}</p>
            </div>
            <p>{info.text}</p>
          </div>
          </div>
    </>
  );
};


export default TestimonialsCard
