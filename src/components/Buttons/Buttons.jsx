import "./Buttons.css"

const PrimaryButton = (props) => {
  return (
    <>
    <button type="button" className="btn primary-btn" onClick={props.action}>{props.children}</button>
    </>
  )
}

const SecondaryButton = (props) => {
    return (
      <>
      <button type="button" className="btn secondary-btn" onClick={props.onClick}>{props.children}</button>
      </>
    )
  }

  const DeleteButton = (props) => {
    return (
      <>
      <button type="button" className="btn delete-btn" onClick={props.onClick}>{props.children}</button>
      </>
    )
  }

















  

















export default PrimaryButton
export {SecondaryButton , DeleteButton}