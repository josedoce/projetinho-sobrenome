import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import Admin from '../views/Admin';
import Home from '../views/Home';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </Router>
    )
}