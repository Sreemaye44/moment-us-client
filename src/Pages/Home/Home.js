import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import ServiceArea from '../ServiceArea/ServiceArea';

const Home = () => {
    useTitle('home');
    return (
        <div>
        
           <Banner></Banner>
           <ServiceArea></ServiceArea>
           <FAQ></FAQ>
           <Articles></Articles>

           
           
        </div>
    );
};

export default Home;