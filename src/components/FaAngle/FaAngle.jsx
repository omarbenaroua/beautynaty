import "./FaAngle.css";

const FaAngleLeft = (props) => {
  return (
    <>
      <i
        onClick={props.onClick}
        className="fas fa-angle-left change-background fa-2x"
      ></i>
    </>
  );
};

const FaAngleRight = (props) => {
  return (
    <>
      <i
        onClick={props.onClick}
        className="fas fa-angle-right change-background fa-2x"
      ></i>
    </>
  );
};

export default FaAngleLeft;
export { FaAngleRight };
