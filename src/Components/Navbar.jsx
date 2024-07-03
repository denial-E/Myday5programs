import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='nav'>
            <Link to='/'>All</Link>
            <Link to='/fullstack'>Full STACK DEVELOPMENT</Link>
            <Link to='/datascience'>DATA SCIENCE</Link>
            <Link to='/cybersecurity'>CYBER SECURITY</Link>
            <Link to='/career'>CAREER</Link>
            </nav>
           
        </div>
    );
};

export default Navbar;