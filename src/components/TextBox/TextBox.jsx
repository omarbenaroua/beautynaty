import "./TextBox.css";
import { PrimaryButton, Social } from "../index";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const TextBox = () => {
  return (
    <>
      <div className="text-box">
        <motion.div
          className="content"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 1.5 }}
        >
          <h2>
            Want to cuddle and relax?
            <br />
            Welcome to our beauty shop!
          </h2>
          <p>
            We are here to take care of your appearance and well-being, offering
            you a wide range of beauty treatments and products high quality for
            body care.
          </p>
          <PrimaryButton>
            <i className="fa-solid fa-location-dot" />
            <a 
              className="location"
              target="_blank"
              href="https://www.google.ch/maps/place/Gudo"
            >
              {" "}
              Where are we
            </a>
          </PrimaryButton>

          <PrimaryButton>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-300}
              duration={300}
            >
              Contact us
            </Link>
          </PrimaryButton>

          <Social />
        </motion.div>
      </div>
    </>
  );
};

export default TextBox;
