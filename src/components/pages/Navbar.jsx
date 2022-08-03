import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../Footer';
import Home from '../Home';
import Contentpage from './Contentpage';

const NavBar = () => { 
   
    return (
        <div>      
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/content' element={<Contentpage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default NavBar