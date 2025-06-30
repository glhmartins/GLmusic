import YY10 from '../assets/images/Guitarras/YY10.png';
import ICHI10 from '../assets/images/Guitarras/ICHI10.png';
import JEM77P from '../assets/images/Guitarras/JEM77P.png';
import TOD10 from '../assets/images/Guitarras/TOD10.png';
import { Link } from 'react-router-dom';

const Guitarras2Page = () => {
    return (
      <>
        <div className="row" style={{ paddingBottom: '69px' }}>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={YY10} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="YY10 - Yvette Young Signature" />
                    <div className="text-center">
                        <h5 className="card-title f">YY10 - Yvette Young Signature</h5>
                        <p className="p">R$15.999,00</p>
                        <p>10x R$1599,90 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={ICHI10} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="ICHI10 - Ichika Nito Signature" />
                    <div className="text-center">
                        <h5 className="card-title f">ICHI10 - Ichika Nito Signature</h5>
                        <p className="p">R$18.490,00</p>
                        <p>10x R$1849,00 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={JEM77P} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="JEM77P - Steve Vai Signature" />
                    <div className="text-center">
                        <h5 className="card-title f">JEM77P - Steve Vai Signature</h5>
                        <p className="p">R$10.990,00</p>
                        <p>10x R$1099,00 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={TOD10} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="TOD10 - Tim Henson Signature" />
                    <div className="text-center">
                        <h5 className="card-title f">TOD10 - Tim Henson Signature</h5>
                        <p className="p">R$12.599,90</p>
                        <p>10x R$1259,99 sem juros</p>
                        <button type="button" className="btn btn-primary" style={{ fontSize: 20 }}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="..." style={{ backgroundColor: 'rgb(30, 40, 30)'}}>
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" tabIndex={-1} aria-disabled="false" to="/guitarras">Previous</Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/guitarras">1</Link>
            </li>
            <li className="page-item active" aria-current="page">
              <Link className="page-link" to="/guitarras2">2</Link>
            </li>
            <li className="page-item disabled">
              <Link className="page-link" aria-disabled="true" to="/guitarras2">Next</Link>
            </li>
          </ul>
        </nav>
      </>
    )
}
export default Guitarras2Page