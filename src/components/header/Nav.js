import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Link} from 'react-router';

export default class Nav extends React.Component{

    render(){
        return(
            <div className='nav'>
                <Link to ='/'>Home</Link>
                <Link to  "/contato"> Contato</Link>
               
            </div>
            
        );
    }
}