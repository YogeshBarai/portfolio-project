import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGit } from 'react-icons/fa';
import { useAPI } from '../api/apiContent';

const Banner = () => {
    const { data } = useAPI();
    return (
        <header className='header' id='homepage'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='header__content'>
                            <div className='header__section'>
                                <ul className='header__ul'>
                                    <li><a href="http://www.facebook.com/yogesh.barai" target="_blank"><FaFacebookF /></a></li>
                                    <li><a href="https://www.linkedin.com/in/yogesh-barai-ba5704114/" target="_blank"><FaLinkedinIn /></a></li>
                                    <li><a href="https://github.com/YogeshBarai" target="_blank"><FaGit /></a></li>
                                </ul>
                                <h1>Hi there! I am {data.name}</h1>
                                <p>{data.introduction}</p>
                                <div className='header__buttons'>
                                    <a href="" className='btn btn-outline'>Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='banner__img'>
                            <img src={`/images/` + data.image }/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Banner;