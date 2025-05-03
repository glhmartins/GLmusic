import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success.bg-gradient navbar-dark" style={{fontSize: "25px", color: "white"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{width: "120px", height: "65px"}} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/guitarras">
                Guitarras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/baixos">
                Baixos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pedais">
                Pedais
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/amplificadores">
                Amplificadores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
