import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Welcome.css';

function Welcome() {
    return (
      <section className='carousel'>
        <Carousel>
        <Carousel.Item>
            <img
              className="image"
              src="https://img.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_144627-24860.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Welcome to Keep Scribbling!</h1>
              <p>A space for your little scribbles!</p>
            </Carousel.Caption>
          </Carousel.Item>

        <Carousel.Item>
            <img
              className="image"
              src="https://img.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_144627-24860.jpg"
              alt="Third slide"
            />
             <Carousel.Caption>
              <h1>Read tiny blogs from awesome creators around the world</h1>
              <p>A space for your little scribbles!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="image"
              src="https://img.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_144627-24860.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Scroll down to read tiny blogs of different categories!</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    )
}

export default Welcome;