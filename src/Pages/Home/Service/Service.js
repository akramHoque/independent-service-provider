import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css' ;

const Service = ({service}) => {
        const {id, name, img, shortDescription, price} = service ;
        const navigate = useNavigate() ;
        const handleCheckout = id => {
                navigate(`/service/${id}`) ;
        }
      
        return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{shortDescription}</small></p>
            <button onClick={() => handleCheckout(id)} className='btn btn-primary w-50'> Check me</button>
        </div>
        );
};

export default Service;