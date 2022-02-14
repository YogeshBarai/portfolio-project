import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { MdAnalytics } from 'react-icons/md';
import { SiAdobeindesign } from 'react-icons/si';
import Typed from 'react-typed';
import { useAPI } from '../api/apiContent';


const Services = () => {
    const { data } = useAPI();

    return (
        <div className='services' id='services'>
            <div className='container'>
                <div className='services__header'>
                    <div className='common'>
                        <h3 className='heading'>Sevices</h3>
                        <p className='services__content'>
                            {/* <Typed
                                strings={Object.keys(data.interests[0])}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            /> */}
                        </p>
                        <div className='services__border' />
                    </div>

                    <div className='row'>
                        {/* {Object.keys(data.interests[0]).map((eachKey, index) => {
                            console.log(eachKey)
                                return (
                                    <div className='col-4' id={index}>
                                        <div className='services__box'>
                                            <FaReact className='commonIcons' />
                                            <div className='services__box-header'>{eachKey}</div>
                                            <div className='services__p'>
                                                {data.interests[0][eachKey]["pitch"] ? data.interests[0][eachKey]["pitch"] : ""}
                                            </div>
                                        </div>
                                    </div>)
                            })} */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;
