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
        fetch('https://moment-us-server.vercel.app/services', {
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
        <div className='p-10 bg-slate-200'>
          <form onSubmit={handleAddService} className='w-3/4 mx-auto'>
            <input type="text" name="serviceName" placeholder="serviceName" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
            <input type="text" name="image" placeholder="imageURL" className="input input-bordered input-warning w-full max-w-xs my-3" /><br/>
            <input type="text" name="rating" placeholder="rating" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
            <input type="text" name="price" placeholder="price" className="input input-bordered input-warning w-full max-w-xs my-3" /><br/>
            <textarea type="text" name="description" placeholder="description" className="textarea textarea-bordered h-24 w-3/4 my-3" /><br/>
            <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-warning w-full 
            max-w-xs my-3" readOnly /><br/>
            <input type="submit" className='btn bg-teal-600 text-white' value="ADD" />
            
        </form>
        </div>
    );
};

export default AddService;