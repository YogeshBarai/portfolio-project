import React, { useEffect } from 'react';
import { useAPI } from '../api/apiContent';

const Homepage = () => {

    const FetchData = () => {
        const { data, isLoading } = useAPI();
        
        const names = data.map(eachPortfolio => {
            return eachPortfolio.name;
            
        });
        
        return names;
    }

    return (
        <>
            {FetchData().map(eachName => {
                return <li>{eachName}</li>
            })}
        </>
    )
}

export default Homepage;