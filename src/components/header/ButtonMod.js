import React from 'react';

export default class ButtonMod extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayNav: 'flex'
        };
        
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(event){
        if(this.state.displayNav === 'flex'){
            this.setState({
                displayNav :'none'
            });
        }
        else{
            this.setState({
                displayNav : 'flex'
            }); 
        }
          
        document.querySelector(".nav").style.display = this.state.displayNav;     
    };
    

    render(){
        return(
            <div className = "buttonMob" onClick = {this.handleClick}>

                <img src= {process.env.PUBLIC_URL + "/img/Menu.png"} alt = 'Botão Mobile'/> 

            </div>
        );
    }
}