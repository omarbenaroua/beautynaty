import React from "./Testimonials.css";
import { Title, TestimonialsCard } from "../../components/index";
import TestimonialsData from "../../Data/TestimonialsData";

const Testimonials = () => {
  const testimonialsInfo = TestimonialsData.map((info) => {
    return (
      <TestimonialsCard
        key={info.id}
        name={info.name}
        title={info.title}
        image={info.image}
        text={info.text}
        vote={info.vote}
      />
    );
  });
  return (
    <>
      <div className="container">
        <Title>Testimonials</Title>
        <div className="row row-cols-1 row-cols-md-3 g-4 z-2">
          {testimonialsInfo}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
