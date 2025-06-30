const FaqPage = () => {
    return (
      <div className="container my-5">
        <div className="text-center text-white mb-4">
          <h1 className="fs-1">Perguntas Frequentes</h1>
          <p className="fs-4">Encontre respostas para as dúvidas mais comuns</p>
        </div>
        <div className="accordion mx-auto" id="faqAccordion" style={{ maxWidth: 800 }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
              Quais são as formas de pagamento disponíveis?
            </button>
          </h2>
          <div id="faqCollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Aceitamos cartões de crédito, débito, boleto bancário e Pix.
            </div>
          </div>
        </div>
      
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
              Qual é o prazo de entrega?
            </button>
          </h2>
          <div id="faqCollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              O prazo de entrega varia de acordo com a localização, mas geralmente é de 5 a 10 dias úteis.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
              Como posso entrar em contato com o suporte?
            </button>
          </h2>
          <div id="faqCollapseThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Você pode entrar em contato conosco pelo e-mail GLmusic@gmail.com ou pelo telefone (99) 99999-9999.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="false" aria-controls="#faqCollapseFour">
              Posso devolver um produto se não estiver satisfeito?
            </button>
          </h2>
          <div id="faqCollapseFour" className="accordion-collapse collapse" aria-labelledby="faqHeadingFour" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Sim, você pode devolver o produto em até 7 dias após o recebimento, desde que esteja em perfeito estado e na embalagem original.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive">
              Vocês oferecem garantia nos produtos?
            </button>
          </h2>
          <div id="faqCollapseFive" className="accordion-collapse collapse" aria-labelledby="faqHeadingFive" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Sim, todos os nossos produtos possuem garantia de 12 meses contra defeitos de fabricação.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix">
              Vocês realizam entregas internacionais?
            </button>
          </h2>
          <div id="faqCollapseSix" className="accordion-collapse collapse" aria-labelledby="faqHeadingSix" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No momento, realizamos entregas apenas dentro do Brasil.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven">
              Como posso acompanhar meu pedido?
            </button>
          </h2>
          <div id="faqCollapseSeven" className="accordion-collapse collapse" aria-labelledby="faqHeadingSeven" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Após a confirmação do pagamento, você receberá um código de rastreamento por e-mail para acompanhar o status da entrega.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseEight" aria-expanded="false" aria-controls="faqCollapseEight">
              Quais são os horários de atendimento do suporte?
            </button>
          </h2>
          <div id="faqCollapseEight" className="accordion-collapse collapse" aria-labelledby="faqHeadingEight" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Nosso suporte está disponível de segunda a sexta-feira, das 9h às 18h, exceto feriados.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingNine">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseNine" aria-expanded="false" aria-controls="faqCollapseNine">
              Como posso alterar ou cancelar meu pedido?
            </button>
          </h2>
          <div id="faqCollapseNine" className="accordion-collapse collapse" aria-labelledby="faqHeadingNine" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Para alterar ou cancelar seu pedido, entre em contato com nosso suporte pelo e-mail GLmusic@gmail.com ou pelo telefone (99) 99999-9999. Alterações só podem ser feitas antes do envio do pedido.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeadingTen">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTen" aria-expanded="false" aria-controls="faqCollapseTen">
              Vocês oferecem descontos para compras em grande quantidade?
            </button>
          </h2>
          <div id="faqCollapseTen" className="accordion-collapse collapse" aria-labelledby="faqHeadingTen" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Sim, oferecemos descontos especiais para compras em grande quantidade. Entre em contato com nosso suporte para mais informações.
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  export default FaqPage