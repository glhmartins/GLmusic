import BossOverDrive from '../assets/images/Pedais/Boss_Over-Drive.jpg';
import BossDigitalDelay from '../assets/images/Pedais/Boss_Digital-Delay.jpg';
import BossDS2 from '../assets/images/Pedais/Boss_DS2.png';
import BossMetalZone from '../assets/images/Pedais/Boss_Metal-Zone2.jpg';

const PedaisPage = () => {
    return (
      <div className="row">
         <div className="col-lg-3 col-md-6">
            <div className="card mb-4" style={{ marginTop: '80px' }}>
               <img src={BossOverDrive} className="mx-auto d-block img-fluid img-custom" alt="Boss Super OverDrive SD-1" style={{ maxHeight: '250px', minHeight: '250px' }} />
               <div className="card-body text-center">
                  <h5 className="card-title">Boss Super OverDrive SD-1</h5>
                  <p className="text-muted text-decoration-line-through">R$649,90</p>
                  <p className="text-success fw-bold">R$549,90</p>
                  <p>10x R$54,99 sem juros</p>
                  <div className="mb-2">
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star-half-alt text-warning"></i>
                     <i className="far fa-star text-warning"></i>
                  </div>
                  <span className="badge bg-success mb-2">Desconto</span>
                  <span className="d-inline-block" tabIndex={0} data-bs-toggle="tooltip" title="Botão desativado">
                     <button className="btn btn-primary" type="button" disabled>Comprar</button>
                  </span>
               </div>
            </div>
         </div>
         <div className="col-lg-3 col-md-6">
            <div className="card mb-4" style={{ marginTop: '80px' }}>
               <img src={BossDigitalDelay} className="mx-auto d-block img-fluid img-custom" alt="Boss Digital Delay DD-3T" style={{ maxHeight: '250px', minHeight: '250px' }} />
               <div className="card-body text-center">
                  <h5 className="card-title">Boss Digital Delay DD-3T</h5>
                  <p className="text-muted text-decoration-line-through">R$549,90</p>
                  <p className="text-success fw-bold">R$449,90</p>
                  <p>10x R$44,99 sem juros</p>
                  <div className="mb-2">
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star-half-alt text-warning"></i>
                     <i className="far fa-star text-warning"></i>
                  </div>
                  <span className="badge bg-success mb-2">Desconto</span>
                  <span className="d-inline-block" tabIndex={0} data-bs-toggle="tooltip" title="Botão desativado">
                     <button className="btn btn-primary" type="button" disabled>Comprar</button>
                  </span>
               </div>
            </div>
         </div>
         <div className="col-lg-3 col-md-6">
            <div className="card mb-4" style={{ marginTop: '80px' }}>
               <img src={BossDS2} className="mx-auto d-block img-fluid img-custom" alt="Boss Turbo Distortion DS-2" style={{ maxHeight: '250px', minHeight: '250px' }} />
               <div className="card-body text-center">
                  <h5 className="card-title">Boss Turbo Distortion DS-2</h5>
                  <p className="text-muted text-decoration-line-through">R$849,90</p>
                  <p className="text-success fw-bold">R$749,90</p>
                  <p>10x R$74,99 sem juros</p>
                  <div className="mb-2">
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star-half-alt text-warning"></i>
                  </div>
                  <span className="badge bg-success mb-2">Desconto</span>
                  <span className="d-inline-block" tabIndex={0} data-bs-toggle="tooltip" title="Botão desativado">
                     <button className="btn btn-primary" type="button" disabled>Comprar</button>
                  </span>
               </div>
            </div>
         </div>
         <div className="col-lg-3 col-md-6">
            <div className="card mb-4" style={{ marginTop: '80px' }}>
               <img src={BossMetalZone} className="mx-auto d-block img-fluid img-custom" alt="Boss Metal Zone MT-2" style={{ maxHeight: '250px', minHeight: '250px' }} />
               <div className="card-body text-center">
                  <h5 className="card-title">Boss Metal Zone MT-2</h5>
                  <p className="text-muted text-decoration-line-through">R$949,90</p>
                  <p className="text-success fw-bold">R$849,90</p>
                  <p>10x R$84,99 sem juros</p>
                  <div className="mb-2">
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="fas fa-star text-warning"></i>
                     <i className="far fa-star text-warning"></i>
                  </div>
                  <span className="badge bg-success mb-2">Desconto</span>
                  <span className="d-inline-block" tabIndex={0} data-bs-toggle="tooltip" title="Botão desativado">
                     <button className="btn btn-primary" type="button" disabled>Comprar</button>
                  </span>
               </div>
            </div>
         </div>
      </div>
    )
}
export default PedaisPage