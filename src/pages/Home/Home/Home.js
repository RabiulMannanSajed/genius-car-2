import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Bannar from '../Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;