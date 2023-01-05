import React from 'react'
import {
BrowserRouter as Router,
Route,
Routes,
} from 'react-router-dom';

import Admin from '../views/Admin';
import Home from '../views/Home';

export default function AppRoutes(){
    return(
        <Router>
           <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/admin" element={<Admin />}/>
           </Routes>
            
        </Router>
    )
}