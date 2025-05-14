import SolarA16Canibalismo from '../assets/images/Guitarras/A1.6 Canibalismo.png';
import SolarE16Vinter from '../assets/images/Guitarras/E1.6 Vinter.png';
import IbanezQ from '../assets/images/Guitarras/Ibanez Q.jpg';
import IbanezRG from '../assets/images/Guitarras/Ibanez RG.png';
import { Link } from 'react-router-dom';

const GuitarrasPage = () => {
    return (
      <>
        <div className="row" style={{ paddingBottom: '69px' }}>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={SolarA16Canibalismo} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Solar A1.6 Canibalismo" />
                    <div className="text-center">
                        <h5 className="card-title f">Solar A1.6 Canibalismo</h5>
                        <p className="p">R$13.999,00</p>
                        <p>10x R$1399,90 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={SolarE16Vinter} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Solar E1.6 Vinter" />
                    <div className="text-center">
                        <h5 className="card-title f">Solar E1.6 Vinter</h5>
                        <p className="p">R$8490,00</p>
                        <p>10x R$849,00 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={IbanezQ} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Ibanez Q" />
                    <div className="text-center">
                        <h5 className="card-title f">Ibanez Q</h5>
                        <p className="p">R$10.990,00</p>
                        <p>10x R$1099,00 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={IbanezRG} style={{ maxHeight: '250px', minHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Ibanez RG Gio" />
                    <div className="text-center">
                        <h5 className="card-title f">Ibanez RG Gio</h5>
                        <p className="p">R$2599,90</p>
                        <p>10x R$259,99 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="..." style={{ backgroundColor: 'rgb(30, 40, 30)' }}>
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link" tabIndex={-1} aria-disabled="true">Previous</span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/guitarras2">2</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/guitarras2">Next</Link>
            </li>
          </ul>
        </nav>
      </>
    )
}
export default GuitarrasPage