import React from 'react';
import Banner from '../Banner/Banner';
import TrusStates from '../Trust States/TrusStates';
import TrendingApps from './TrendingApps';

const HomePage = () => {
    return (
        <>
        <Banner/>
        <TrusStates/>
        <TrendingApps></TrendingApps>
        </>
    );
};

export default HomePage;