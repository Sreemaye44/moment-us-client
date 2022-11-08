import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllService = () => {
    const allService=useLoaderData();
   
    return (
        <div>
            {allService.length}
        </div>
        
    );
};

export default AllService;