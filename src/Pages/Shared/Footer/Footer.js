import React from 'react';

const Footer = () => {
        const today = new Date() ;
        const year = today.getFullYear()
        return (
                <footer >
                        <p className='text-center text-seconday mt-3 '> @Copyright.All the reserved gym with Adams {year} </p>
                </footer>
        );
};

export default Footer;