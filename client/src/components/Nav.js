import React from 'react';

const Nav = () => {

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar__container'>
                    <ul className='navbar__left'>
                        <div className='navbar__left-logo'>
                            <img src="/images/logo.png" alt="Yogesh Barai" />
                        </div>
                    </ul>
                    <ul className='navbar__right'>
                        <li><a href="#homepage" >Home</a></li>
                        <li><a href="#services" >Services</a></li>
                        <li><a href="#about-me" >About Me</a></li>
                        <li><a href="#skills" >Skills</a></li>
                        <li><a href="#blog" >Blog</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;