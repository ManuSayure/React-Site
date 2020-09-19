import React from 'react';

export default class Footer extends React.Component{

    render(){
        return(
         <div className = 'footer'>
             <div>
                 <img src= {process.env.PUBLIC_URL + "/img/Footer.png"} alt="Logomarca site"></img>
             </div>
             <div>
                 Endereço: <br/>
                 Telefone: <br/>
                 Email: <br/>
                 Desenvolvedor(a): Manu Sayure
             </div>

         </div>
        );
    }
}