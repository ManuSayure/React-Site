import React from 'react';

export default class Map extends React.Component{

    render(){
        return(
            <div className = 'map' id="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d985.3083681957011!2d-35.8175037!3d-8.9506214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700c9faa995cafd%3A0x711bd3f8b5a517ad!2sCachoeira%20Do%20Tombador!5e0!3m2!1spt-BR!2sbr!4v1600274972495!5m2!1spt-BR!2sbr"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        );
    }
}