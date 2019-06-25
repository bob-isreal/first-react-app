import React from 'react';
import RightSide from './RightSide';
import LeftSide from './LeftSide'
import './afterJumbotron.css';


function AfterJumbotron(superProps) {
 
  return (
    <div className="after-jumbotron flex">
      <LeftSide source={superProps.source} />
      <RightSide source={superProps.source} />
    </div>
  );
}

export default AfterJumbotron;
