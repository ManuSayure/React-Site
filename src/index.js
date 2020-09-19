import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'
import { BrowserRouter, Route, Switch } from "react-router";
import Contact from './components/main/Contact';

ReactDOM.render(
    <BrowserRouter>
    <Switch >
        <Route path="/" exact={true} component={App}/>
        <Route path="/contato" exact={true} component={Contact}/>

    </Switch>

    </BrowserRouter>,
    
    document.getElementById("root")
);