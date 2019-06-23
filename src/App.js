import React from 'react';
import './App.css';

function Home() {
  return <p className="header-home-button">Home</p>;
}

function CreateYourWebsite() {
  return <p className="create-button">Create Your Own</p>;
}
function Jumbotron() {
  return (
    <div className="jumbotron">
      <CreateYourWebsite />
    </div>
  );
}
function AfterJumbotron(superProps) {
  function LeftSide(props) {
    return <img src={props.source} alt="icon" />;
  }
  function RightSide() {
    return <div />;
  }
  return (
    <div className="after-jumbotron">
      <LeftSide source={superProps.source} />
      <RightSide />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Home />
      <CreateYourWebsite />
    </header>
  );
}
function Body() {
  return (
    <main>
      <Jumbotron />
      <AfterJumbotron source="2.jpg" />
    </main>
  );
}
function Footer() {
  return <footer />;
}
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
