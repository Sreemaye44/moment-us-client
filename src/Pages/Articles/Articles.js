import React from 'react';
import art1 from '../../../src/assets/photo-1625492922105-5914617fd869.avif'
import art2 from '../../../src/assets/photo-1593106584374-89259e7efb8b.avif'
import art3 from '../../../src/assets/photo-1516357231954-91487b459602.avif'

const Articles = () => {
    return (
        <>
        <h1 className='text-center text-5xl mt-20'>NEWS & ARTICLES</h1>
        <p className='text-center text-xl mb-10 mt-5'>Moment us photography related news and articles are available. We are now <br></br> top for pre wedding & wedding photography</p>
        <div className='flex justify-between my-10'>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={art1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">This is a best photography Blog for Wedding!</h2>
    <p className='my-5'>July 6, 2022</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">SEE MORE</button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={art2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">The best photography blog for inspiration</h2>
    <p className='my-5'>January 12, 2022</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">SEE MORE</button>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={art3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">The sky is the limit with this blog in the world</h2>
    <p className='my-5'>December 28, 2021</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">SEE MORE</button>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Articles;