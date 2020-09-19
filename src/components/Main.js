import React from 'react';
import Slides from './main/Slides';
import Information from './main/Information';
import Map from './main/Map';
import Contact from './main/Contact';

export default class Main extends React.Component{

    render(){
        return(
            <div className='main'>
                <Slides/>               
                <Information/>
                <Contact/>
                <Map/>   
                            
            </div>
        );
    }
}