const HomePage = () => {
    return (
      <>
      <div className="container">
         <div className="p-4 d-block d-md-none text-center bg-light rounded" style={{marginTop: "89px"}}>
         <h5 style={{color: "black"}}>Empresa de venda de instrumentos musicais.</h5>
         <br></br>
         <h5 style={{color: "black"}}>Guitarra, Baixo, Pedal e Amplificador.</h5>
         </div>
      </div>

      <div>
         <h1 className="text-center text-white"
         style={{fontSize: "60px"}}>Lançamentos
         </h1>
         <div className="container my-4">
         <div className="row">
            <div className="col-md-6 mb-4">
               <h5 className="text-white text-center" style={{fontSize: "50px", fontStyle: "italic"}}>Solar</h5>
               <div className="ratio ratio-16x9">
               <iframe src="https://www.youtube.com/embed/px27xhi68GA" allowFullScreen></iframe>
               </div>
            </div>
            <div className="col-md-6 mb-4">
               <h5 className="text-white text-center" style={{fontSize: "50px", fontStyle: "italic"}}>Ibanez</h5>
               <div className="ratio ratio-16x9">
               <iframe src="https://www.youtube.com/embed/qNQLYcl2fQY" allowFullScreen></iframe>
               </div>
            </div>
         </div>
         </div>

         <div className="container my-4" style={{paddingBottom: "40px"}}>
            <div className="row">
               <div className="col-md-6 mb-4">
                  <h5 className="text-white text-center" style={{fontSize: "50px", fontStyle: "italic"}}>Boss</h5>
                  <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/6BSzRzLK5Oc?si=y_oaqJl0M22RfrnQ" allowFullScreen></iframe>
                  </div>
               </div>
               <div className="col-md-6 mb-4">
                  <h5 className="text-white text-center" style={{fontSize: "50px", fontStyle: "italic"}}>Fender</h5>
                  <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/6afsgyQ30lM?si=tpAaMmGAYElttF-M" allowFullScreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
    )
  }
  export default HomePage