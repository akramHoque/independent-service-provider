import React from 'react';
import './Footer.css' ;

const Footer = () => {
        const today = new Date() ;
        const year = today.getFullYear()
        return (
                <div className="footer">
                <p>@ Copyright All the Reserved to Trainer orinius akram {year}</p>
                 </div>
        );
};

export default Footer;