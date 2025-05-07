import fenderChampion from "../assets/images/Amplificadores/fender-champion.png";
import bossKatana from "../assets/images/Amplificadores/katana.png";
import marshallMG15 from "../assets/images/Amplificadores/Marshall-MG15.png";
import orangeCrush from "../assets/images/Amplificadores/Orange.jpg";


const AmplificadoresPage = () => {
    return (
      <div className="row" style={{paddingBottom: "69px"}}>
         <div className = "col-lg-3 col-md-6">
             <div className = "card mb-4" style={{marginTop: "80px"}}>
                <span className="badge position-relative bg-danger border border-light rounded-circle">Novo Produto</span>
                 <img src={fenderChampion} style={{maxHeight: "380px"}} className = "mx-auto d-block img-fluid img-custom"/>
                 <div className = "text-center">
                     <h5 className = "card-title f">Fender Champion</h5>
                     <p className="p">R$4199,00</p>
                     <p>10x R$419,90 sem juros</p>
                     <button type="button" className="btn btn-primary" style={{fontSize: "20px"}}>Comprar</button>
                 </div>
             </div>
         </div>
         
         <div className = "col-lg-3 col-md-6">
             <div className = "card mb-4" style={{marginTop: "80px"}}>
                 <img src={bossKatana} style={{maxHeight: "400px"}} className = "mx-auto d-block img-fluid img-custom"/>
                 <div className = "text-center">
                     <h5 className = "card-title f">Boss Katana</h5>
                     <p className="p">R$3099,90</p>
                     <p>10x R$309,99 sem juros</p>
                     <button type="button" className="btn btn-primary" style={{fontSize: "20px"}}>Comprar</button>
                 </div>
             </div>
         </div>

         <div className = "col-lg-3 col-md-6">
             <div className = "card mb-4" style={{marginTop: "80px"}}>
                 <img src={marshallMG15} style={{maxHeight: "400px"}} className = "mx-auto d-block img-fluid img-custom"/>
                 <div className = "text-center">
                     <h5 className = "card-title f">Marshall MG15</h5>
                     <p className="p">R$1390,90</p>
                     <p>10x R$139,09 sem juros</p>
                     <button type="button" className="btn btn-primary" style={{fontSize: "20px"}}>Comprar</button>
                 </div>
             </div>
         </div>

         <div className = "col-lg-3 col-md-6">
             <div className = "card mb-4" style={{marginTop: "80px"}}>
                 <img src={orangeCrush} style={{maxHeight: "400px"}} className = "mx-auto d-block img-fluid img-custom"/>
                 <div className = "text-center">
                     <h5 className = "card-title f">Orange Crush 20  </h5>
                     <p className="p">R$2150,00</p>
                     <p>10x R$215,00 sem juros</p>
                     <button type="button" className="btn btn-primary" style={{fontSize: "20px"}}>Comprar</button>
                 </div>
             </div>
         </div>
     </div>

    )
  }
  export default AmplificadoresPage