import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { navbar } from '../data/navbar';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [links, setLinks] = useState(navbar);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="/">
                    <img className='logo' src={ `./images/` + "logo.png" } alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {links.map((link) => {
                            const { id, title, url } = link;

                            return (
                                <li key={id}>
                                    <Link className="nav-link" to={url}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;