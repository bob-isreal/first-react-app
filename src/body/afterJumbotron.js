import React from 'react';
import './afterJumbotron.css';

const list = ['Home', 'Blog', 'Contact'];
function AfterJumbotron(superProps) {
  function LeftSide(props) {
    return (
      <>
        <div className="left-flex-after-jumbotron flex column flex-center-cross">
          <img className="left-image" src={props.source} alt="icon" />
          <nav className="side-nav ">
            {list.map(item => (
              <div className="nav-item" key={item}>
                {item}
              </div>
            ))}
          </nav>
        </div>
      </>
    );
  }
  function RightSide({ source }) {
    return (
      <div className="right-flex-after-jumbotron">
        <img className="right-image" src={source} alt="sample" />
      </div>
    );
  }
  return (
    <div className="after-jumbotron flex">
      <LeftSide source={superProps.source} />
      <RightSide source={superProps.source} />
    </div>
  );
}

export default AfterJumbotron;
