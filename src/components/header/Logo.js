import React from 'react';





export default class Logo extends React.Component{

    render(){
        return(
            <div className = "logo">
                <picture>
                    <source media= " (max-width: 768px)" srcSet=  {process.env.PUBLIC_URL +"/img/Logo-M.png"}/>
                    <source media=" (min-width: 768px)" srcSet=  {process.env.PUBLIC_URL +"/img/Logo-L.png"}/>
                    <img src= {process.env.PUBLIC_URL +"/img/Logo-L.png"} alt="Logomarca  imóveis mobile"/> 
                </picture>
            </div>
         
        );
    }
}