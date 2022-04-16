import React from 'react';
import './Service.css' ;

const Service = ({service}) => {
        const {id, name, img, shortDescription, price} = service ;
      
        return (
                <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{shortDescription}</small></p>
            <button className='btn btn-primary w-50'> Check me</button>
        </div>
        );
};

export default Service;