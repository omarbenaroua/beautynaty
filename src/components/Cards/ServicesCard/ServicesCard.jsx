import "./ServicesCard.css";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import {motion} from "framer-motion"

const Services = (info) => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["0 1", "1 1"]
  })
  return (
    <>
      <motion.div className="about" ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}}
      >
        <div className="srv-box">
          <img src={info.image} alt="" />
          <div className="text">
            <h3>{info.title}</h3>
            <p>{info.text}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
