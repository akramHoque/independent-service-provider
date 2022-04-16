import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png' ;
import banner2 from '../../../images/banner/banner2.jpg' ;
import banner3 from '../../../images/banner/banner3.jpg' ;


const Banner = () => {
        return (
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={banner3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
        );
};

export default Banner;