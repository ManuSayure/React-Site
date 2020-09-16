import React from 'react';

export default class Logo extends React.Component{

    render(){
        return(
            <div className = "logo">
                <picture>
                    <source media=" (max-width: 768px)" srcSet= "/img/logo-M.png"/>
                    <source media=" (min-width: 768px)" srcSet= "/img/logo-L.png"/>
                    <img src="/img/logo-L.png" alt="Logomarca  imóveis mobile"/> 
                </picture>
            </div>
         
        );
    }
}