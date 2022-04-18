import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css' ;


const Services = () => {
        const [services, setServices] = useState([]) ;

        useEffect(() => {
                fetch('services.json')
                .then(res => res.json())
                .then(data => setServices(data))
        } , [])
        return (
        <div id="services"  className='container '>
            <div className="row">
            <h1 className=' text-center mb-3'> <span className='text-danger p-2 '>Services</span></h1>
            <div className="services-container mb-5 ">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
        );
};

export default Services;