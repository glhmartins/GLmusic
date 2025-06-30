const ToastButton = () => {
    return (
        <>
        <button type="button" className="btn btn-success border-0">Não Clique</button>
        <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: "1060"}}>
           <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
           <div className="toast-header">
              <strong className="me-auto">Cupom de desconto</strong>
           </div>
           <div className="toast-body">
              SLIPKNOT
           </div>
           </div>
        </div>
        </>
    )
}
export default ToastButton
