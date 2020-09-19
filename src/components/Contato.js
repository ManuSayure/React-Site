import React from 'react';
import Header from './Header';
import Contato from './main/Contact';

export default class Contato extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <Contato/>
            </div>
         
        );
    }
}