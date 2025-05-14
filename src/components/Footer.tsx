import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"


const Footer =() => {
    return (
        <div className="footer" style={{ backgroundColor: 'rgb(60, 75, 60)', paddingTop: '40px'}}>
         <div className="container">
         <div className="row text-white text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pb-5">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo}/>
                </NavLink >    
            </div>
            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 pb-5 text-center">
               <h5 className="fs-3">Redes Sociais</h5>
               <div className="nav flex-column">
               <a className="nav-link text-white" href="#instagram"><i className="fab fa-instagram fs-4"></i> Instagram</a>
               <a className="nav-link text-white" href="#youtube"><i className="fab fa-youtube fs-4"></i> Youtube</a>
               </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3 text-center">
               <h5 className="fs-3">Contato</h5>
               <div className="nav flex-column">
               <a className="nav-link text-white" href="#email"><i className="fas fa-envelope fs-4"></i> GLmusic@gmail.com</a>
               <a className="nav-link text-white" href="#telefone"><i className="fas fa-phone fs-4"></i> (99)99999-9999</a>
               </div>
            </div>
         </div>
         </div>
      </div>
    )
}

export default Footer;