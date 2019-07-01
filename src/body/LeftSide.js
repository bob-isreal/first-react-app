import React from 'react';
import { Link } from 'react-router-dom';

function LeftSide(props) {
  const list = ['Home', 'Blog', 'Contact'];

  return (
    <>
      <div className="left-flex-after-jumbotron flex column flex-center-cross">
        <img className="left-image" src={props.source} alt="icon" />
        <nav className="side-nav ">
          {list.map(item => (
            <Link to={item} key={item}>
              <div className="nav-item" key={item}>
                {item}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default LeftSide;
