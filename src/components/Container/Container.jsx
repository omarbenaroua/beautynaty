import "./Container.css"

const Container = (props) => {
  return (
    <div className="main-container container">
    {props.children}
    </div>
  )
}
export default Container