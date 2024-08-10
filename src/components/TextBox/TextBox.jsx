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
          Vuoi coccolarti e rilassarti?
            <br />
          Benvenuti nel nostro negozio di estetica!
          </h2>
          <p>
          Siamo qui per prenderci cura del tuo aspetto e del tuo benessere, offrendoti
          una vasta gamma di trattamenti di bellezza e prodotti di alta qualità per la
          cura del corpo.
          </p>
          <PrimaryButton>
            <i className="fa-solid fa-location-dot" />
            <a 
              className="location"
              target="_blank"
              href="https://www.google.ch/maps/place/Milano"
              rel="noopener noreferrer"
            >
              {" "}
              Dove ci troviamo
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
              Contattaci
            </Link>
          </PrimaryButton>

          <Social />
        </motion.div>
      </div>
    </>
  );
};

export default TextBox;
