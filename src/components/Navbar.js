import React from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="work-exp">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-me">Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blogs">Blogs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;