import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css' ;

const Service = ({service}) => {
        const {id, name, img, shortDescription, price} = service ;
       
        return (
        <div className='service '>
            <img className='w-100' src={img} alt="" />
            <h4 className='text-secondary'>{name}</h4>
            <p>Price: <span>${price}</span></p>
            <p><small>{shortDescription}</small></p> 
                <div >
                <Link to = '/checkout'>
                  <button className='btn btn-secondary w-50 service-btn'> Go To Checkout</button>
                </Link>
                </div> 
        </div>
        );
};

export default Service;