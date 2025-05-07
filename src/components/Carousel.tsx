import "../assets/css/Carousel.css"
import amplificador from "../assets/images/Carrosel/C1.jpg"
import baixo from "../assets/images/Carrosel/C2.jpg"
import guitarra from "../assets/images/Carrosel/C3.jpg"
import pedal from "../assets/images/Carrosel/C4.jpg"
import { NavLink } from "react-router-dom"

const Carousel = () => {
    return (
        <div className="carousel slide d-none d-md-block mb-4" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <NavLink to="/amplificadores">
            <img src={amplificador} className="d-block bgimage carousel-image"/>
            <div className="carousel-caption">
              <div className="text-center">
                <span className="ti">Amplificadores</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="carousel-item">
            <NavLink to="/baixos">
               <img src={baixo}className="d-block bgimage carousel-image"/>
               <div className="carousel-caption">
                  <div className="text-center">
                  <span className="ti">Baixos</span>
                  </div>
               </div>
            </NavLink>
        </div>
        <div className="carousel-item">
            <NavLink to="/guitarras">
               <img src={guitarra} className="d-block bgimage carousel-image"/>
               <div className="carousel-caption">
                  <div className="text-center">
                     <span className="ti">Guitarras</span>
                  </div>
               </div>
            </NavLink>
         </div>
        <div className="carousel-item">
            <NavLink to="/pedais">
               <img src={pedal} className="d-block bgimage carousel-image"/>
               <div className="carousel-caption">
                  <div className="text-center">
                     <span className="ti">Pedais</span>
                  </div>
               </div>
            </NavLink>
         </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próxima</span>
      </button>
    </div>
    )
}

export default Carousel;
