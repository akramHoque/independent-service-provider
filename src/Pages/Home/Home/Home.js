import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services'

const Home = () => {
        return (
                <div>
                        <h1 className='text-center my-5'>Make Body Strong With <span className='text-danger'>Mr.Adams</span></h1>
                        <Banner></Banner>
                        <Services></Services>
                </div>
        );
};

export default Home;