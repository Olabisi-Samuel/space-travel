import { useState } from "react";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [crew, setCrew] = useState({
    head: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum`,
    image: "assets/crew/image-anousheh-ansari.png",
  });

  function btn1() {
    setCrew({
      head: "FLIGHT ENGINEER",
      name: "VICTOR GLOVER",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum`,
      image: "assets/crew/image-victor-glover.png",
    });
  }
  function btn2() {
    setCrew({
      head: "FLIGHT ENGINEER",
      name: "MARK SHUTTLEWORTH",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum`,
      image: "assets/crew/image-mark-shuttleworth.png",
    });
  }
  function btn3() {
    setCrew({
      head: "FLIGHT ENGINEER",
      name: "DOUGLAS HURLEY",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum`,
      image: "assets/crew/image-douglas-hurley.png",
    });
  }
  function btn4() {
    setCrew({
      head: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum`,
      image: "assets/crew/image-anousheh-ansari.png",
    });
  }

  return (
    <div className="crew">
      <img
        src="assets/crew/background-crew-desktop.jpg"
        alt=""
        className="crew-bg-img"
      />
      <Navbar />

      <div className="crew-box1">
        <p>SPACE LAUNCH 101</p>
      </div>

      <section className="crew-container">
        <div className="crew-text-cont">
          <h6>{crew.head}</h6>
          <h1>{crew.name}</h1>
          <p>{crew.text}</p>
          <div className="crew-btn">
            <button onClick={btn1} type="button" className="crew-btn1">
              .
            </button>
            <button onClick={btn2} type="button" className="crew-btn2">
              .
            </button>
            <button onClick={btn3} type="button" className="crew-btn3">
              .
            </button>
            <button onClick={btn4} type="button" className="crew-btn3">
              .
            </button>
          </div>
        </div>
        <div className="crew-img-cont">
          <img src={crew.image} alt="" width={430} height={450 } />
        </div>
      </section>
    </div>
  );
};

export default Crew;
