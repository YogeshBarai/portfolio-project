import React from 'react';


const PortfolioImage = ( { className, picUrls, alt }) => {

    return (
        <img className={ className } src={ picUrls } alt={ alt }/>
    );
}

export default PortfolioImage;