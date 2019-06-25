import React from 'react'

function LeftSide(props) {
    const list = ['Home', 'Blog', 'Contact'];

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

  export default LeftSide