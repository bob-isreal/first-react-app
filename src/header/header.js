import React from 'react';
import CreateYourWebsite from './createyourwebsite';

function Home() {
  return (
    <>
      <p className="header-home-button">Home</p>
    </>
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

export default Header;
