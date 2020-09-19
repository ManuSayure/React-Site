import React from 'react';

export default class Address extends React.Component{

    render(){
        return(
           <div className='address'>
               <img src= {process.env.PUBLIC_URL +'/img/whatsapp.png'} alt='Contato Whatsapp'/> <strong>(xx) xxxxx - xxxx </strong><br/>
               Endereço <br/>
               <strong>R$ 700,00</strong>
           </div>
        );
    }
}