import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from '../../../images/banner/banner2.jpg' ;
import banner3 from '../../../images/banner/banner3.jpg' ;

const Banner = () => {
        return (
              <div className='container'>
                  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>I am Trying To Provide My best. </h3>
      <p>Fat body to pack body. Physical Exercise with Dumble, push up,Walking,Cool and freshness. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Make Muscles Tone. Try Your Best </h3>
      <p>I am Always Services fitness guidline.Dumble Provide you an exellent result.Proper guidline is the main reason to fitting. </p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
              </div>
        );
};

export default Banner;