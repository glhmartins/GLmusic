import AB24Car from '../assets/images/Baixos/AB2.4 Car.png';
import E24CBop from '../assets/images/Baixos/E2.4C Bop.png';
import IbanezBTB5 from '../assets/images/Baixos/Ibanez BTB 5.png';
import IbanezSR from '../assets/images/Baixos/Ibanez SR.png';

const BaixosPage = () => {
    return (
      <div className="row" style={{ paddingBottom: '69px' }}>
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={AB24Car} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Solar AB2.4 Car" />
                    <div className="text-center">
                        <h5 className="card-title f">Solar AB2.4 Car</h5>
                        <p className="p">R$6500,00</p>
                        <p>10x R$650,00 sem juros</p>
                        <button style={{ fontSize: '20px', color: 'white' }} type="button" className="btn btn-primary" data-bs-toggle="popover" title="Em manutenção">Comprar</button>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={E24CBop} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Solar E2.4C Bop" />
                    <div className="text-center">
                        <h5 className="card-title f">Solar E2.4C Bop</h5>
                        <p className="p">R$4990,90</p>
                        <p>10x R$499,09 sem juros</p>
                        <button style={{ fontSize: '20px', color: 'white' }} type="button" className="btn btn-primary" data-bs-toggle="popover" title="Em manutenção">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={IbanezBTB5} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Ibanez BTB 5" />
                    <div className="text-center">
                        <h5 className="card-title f">Ibanez BTB 5</h5>
                        <p className="p">R$13.999,00</p>
                        <p>10x R$1399,90 sem juros</p>
                        <button style={{ fontSize: '20px', color: 'white' }} type="button" className="btn btn-primary" data-bs-toggle="popover" title="Em manutenção">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6">
                <div className="card mb-4" style={{ marginTop: '80px' }}>
                    <img src={IbanezSR} style={{ maxHeight: '250px' }} className="mx-auto d-block img-fluid img-custom" alt="Ibanez SR" />
                    <div className="text-center">
                        <h5 className="card-title f">Ibanez SR</h5>
                        <p className="p">R$4000,00</p>
                        <p>10x R$400,00 sem juros</p>
                        <button style={{ fontSize: '20px', color: 'white' }} type="button" className="btn btn-primary" data-bs-toggle="popover" title="Em manutenção">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BaixosPage