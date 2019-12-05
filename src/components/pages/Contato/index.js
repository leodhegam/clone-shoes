import React from 'react';

// import { Container } from './styles';

export default function Contato() {
   
  return (
   <>
<section className="m-4 ">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contato</h2>
    <p className="text-center w-responsive mx-auto mb-5">A cloneshoes está querendo sua opinião! Conte-nos um pouco sobre a experiência no nosso site.
            <br/>Dúvidas/sugestões e/ou críticas.</p>
    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">Seu nome</label>
                        </div>
                    </div>
                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label for="email" className="">Seu email</label>
                        </div>
                    </div>
                </div>
                
             
               
                <div className="row">

               
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Sua messagem</label>
                        </div>

                    </div>
                </div>
        

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-dark text-light" onclick="validateForm()">Enviar</a>
            </div>
            <div className="status"></div>
        </div>
      
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Macaiba , RN/BR</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+55 (84) 912021832</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@cloneshoes.com.br</p>
                </li>
            </ul>
        </div>
   

    </div>
</section>

</>
  );
}
