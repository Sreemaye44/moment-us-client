import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import ServiceArea from '../ServiceArea/ServiceArea';

const Home = () => {
    useTitle('home');
    return (
        <div>
        
           <Banner></Banner>
           <ServiceArea></ServiceArea>

           
           
        </div>
    );
};

export default Home;