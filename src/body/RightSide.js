import React from 'react';
import { Route } from 'react-router-dom';
import Contact from '../Contact/Contact';
import { Chart } from 'react-google-charts';

function HomeImage({ source }) {
  return <img className="right-image" src={source} alt="sample" />;
}

function RightSide(props) {
  return (
    <div className="right-flex-after-jumbotron">
   
      <Route path="/home" render={routeProps => <HomeImage {...routeProps} {...props} />} />
      <Route exact path="/Contact" component={Contact} />
      <Route path="/blog" render = {()=><Chart
          chartType="ScatterChart"
          data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />}/>
    </div>
  );
}

export default RightSide;
