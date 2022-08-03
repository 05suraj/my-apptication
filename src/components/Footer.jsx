import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import PositionContext from './context/createPositionContext'
const Footer = () => { 
    const data = useContext(PositionContext)
    return (
        <div>
            <footer className='footer p-3 bg-dark'>
                <Link className='footer-link' to='content' onClick={()=> data.setBoder(false)} >Go to Page 2 <i class="fa fa-arrow-right" aria-hidden="true"></i> </Link>
            </footer>
        </div>
    )
}

export default Footer