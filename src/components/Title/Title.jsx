import "./Title.css"


const Title = (props) => {

  return (
    <>
    <div className="main-title">
        <h2>
          {props.children}
        </h2>
    </div>
  </>
  )
}

export default Title