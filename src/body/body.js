import React from 'react';
import image from '../images/2.jpg';
import Jumbotron from './jumbotron';
import AfterJumbotron from './afterJumbotron';

function Body() {
  return (
    <main>
      <Jumbotron />
      <AfterJumbotron source={image} />
    </main>
  );
}

export default Body;
