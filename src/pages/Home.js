import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <img
        src="/assets/home/background-home-desktop.jpg"
        alt=""
        className="home-bg-img"
      />
      <Navbar />

      <section className="home-section">
        <div className="home-section-text">
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
        <div className="explore-circle">
          <p className="explore-text">EXPLORE</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
