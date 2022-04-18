import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import image from '../../../images/me/man.png' ;
import './Home.css' ;

const Home = () => {
        return (
                <div>
                        <h1 className='text-center my-5'>Make Body Strong With <span className='text-danger'>Mr.Orinius Akram</span></h1>
                        <Banner></Banner>

                        <div className='container my-5'>
                                <div className="row d-flex">
                                        <div className="col-sm-12 col-lg-6 col-md-12 align-items-center justify-content-center ">
                                        <img className='w-100 gym-image' src={image} alt="" />
                                        </div>
                                        <div className="gym-content col-sm-12 col-lg-6 col-md-12 align-items-center justify-content-center px-3">
                                                <h1>Become strongest up to <span>15 days</span> </h1>
                                                <h6>Excercise Daily, Feel Fresh, Long Live</h6>
                                                <p>Hello, My name is Orinius Akram I am gym trainer. My training programs is ready to you who lose those unwanted weight, gain muscles tone with pack and improve overall body. You will be a healty and strog man to do my programs.</p>
                                        </div>
                                </div>
                        </div>
                        <Services></Services>
                </div>
        );
};

export default Home;