import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css' ;

const Service = ({service}) => {
        const {id, name, img, shortDescription, price} = service ;
       
        return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{shortDescription}</small></p>
          
                
                <div>
                <Link to = '/checkout'>
                  <button className='btn btn-primary w-50'> Go To Checkout</button>
                </Link>
                </div>
       
          
          
        </div>
        );
};

export default Service;