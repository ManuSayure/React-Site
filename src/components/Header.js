import React from 'react';
import Nav from './header/Nav';
import Address from './header/Address';
import Logo from './header/Logo';
import ButtonMode from './header/ButtonMod';

export default class Header extends React.Component{
    
    render(){
        return(
            <div>
                <Nav/>
                <ButtonMode/>
                <Logo/>
                <Address/>
            </div>
        );
    }
}