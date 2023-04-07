import React from "react";
import BeerLogo from "../assets/BeerLogo.png";
const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="headers">You've Finally Made It!</h1>
        <h3>We hope to help you find the ideal brew for you</h3>
        <p className="body-content">Use click below to get started</p>
        <p className="body-content">
          Like the beers you are interested in, and dislike the ones you
          wouldn't even try
        </p>
      </div>
    </>
  );
};

export default Home;
