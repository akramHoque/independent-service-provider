import React from 'react';
import './Footer.css' ;

const Footer = () => {
        const today = new Date() ;
        const year = today.getFullYear()
        return (
                <footer >
                      <div>
                     <span className='footer'> <p className='text-center'> @Copyright.All the Reserved Gym with Orinius Akram {year} </p></span>
                      </div>
                </footer>
        );
};

export default Footer;