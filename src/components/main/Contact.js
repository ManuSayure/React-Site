import React from 'react';
import InputMask from 'react-input-mask';

export default class Contact extends React.Component{

    render(){
        return(
          <div className ='formulario'>
              <h1>Fale conosco</h1>
              <form name="form1" id='form1' method='post' action= '/controllers/controllerForm.php'>
                  <input type ='text' name='nome'  id='nome' placeholder="Nome:"/>
                  <InputMask type= 'tel' name='tel' id ='tel' placeholder='Telefone:' mask="(99) 99999-9999" maskChar=" " />
                  <input type='email' name='email' id='email' placeholder='Email:'/>
                  <textarea name='mensagem' id='mensagem' placeholder="Mensagem"/>
                  <input type='submit' value='enviar'/>
                  
              </form>
          </div>
        );
    }
}