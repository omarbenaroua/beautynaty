import "./Header.css"
import {Link} from 'react-router-dom'
import Logo from "../../assets/icons/logo.png"
import {NavItem , NavDropdown ,Search, Cart, ScrollUp} from "../../components/index"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
    <a className="navbar-brand" href=" "><img src={Logo} alt=""></img></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavItem>
          <Link to="/" className="nav-link active" aria-current="page" href=" ">Home</Link>
        </NavItem>
        <NavItem>
        <Link to="/Services" className="nav-link" aria-current="page" href=" ">Services</Link>
        </NavItem>
        <NavItem>
          <Link to="/About" className="nav-link" aria-current="page" href=" ">About</Link>
        </NavItem>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </a>
          <NavDropdown>
            <li><a className="dropdown-item" href=" ">Contact</a></li>
            <li><a className="dropdown-item" href=" ">Prices</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href=" ">Something else here</a></li>
          </NavDropdown>
        </li>
      </ul>
      <Search/>
    </div>
    <Cart/>
  </div>
</nav>
<ScrollUp/>
</>
  )
}

export default Header