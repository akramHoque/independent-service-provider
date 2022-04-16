import React from 'react';

const Footer = () => {
        const today = new Date() ;
        const year = today.getFullYear()
        return (
                <div>
                        <p className='text-center text-seconday mt-3'> @copyright.All the reserved gym with jhon {year} </p>
                </div>
        );
};

export default Footer;