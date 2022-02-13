export const PortfolioImage = ( { index, className, picUrls, alt }) => {

    return (
    
        <img key={index} className={ className } src={ `./images/` + picUrls } alt={ alt }/>
    );
};
