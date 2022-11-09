import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const {user}=useContext(AuthContext);

    const handleAddService=(event)=>{
         event.preventDefault();
        const form=event.target;
        const serviceName =form.serviceName.value;
        const image =form.image.value;
        const rating =form.rating.value;
        const price=form.price.value;
        const description =form.description.value;
        console.log(price, rating)

        const addService={
            serviceName,
            image,
            rating,
            price,
            description
        }
        fetch('http://localhost:5000/services', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(addService)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.acknowledged){
      alert('service posted successfully')
      form.reset();
    }
    console.log(data)})
  .catch(er=>console.error(er))

    }

    return (
        <form onSubmit={handleAddService}>
            <input type="text" name="serviceName" placeholder="serviceName" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="text" name="image" placeholder="image" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="text" name="rating" placeholder="rating" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="text" name="price" placeholder="price" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="text" name="description" placeholder="description" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-warning w-full 
            max-w-xs" readOnly />
            <input type="submit" className='btn' value="ADD" />
            
        </form>
    );
};

export default AddService;