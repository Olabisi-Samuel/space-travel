import { useState } from "react";
import Navbar from "../components/Navbar";

const Destination = () => {
  const [dest, setDest] = useState({
    image: "assets/destination/image-mars.png",
    header: "MARS",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  });

  function moon() {
    setDest({
      image: "assets/destination/image-moon.png",
      header: "MOON",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    });
  }

  function mars() {
    setDest({
      image: "assets/destination/image-mars.png",
      header: "MARS",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    });
  }

  function european() {
    setDest({
      image: "assets/destination/image-europa.png",
      header: "EUROPEAN",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    });
  }

  function titan() {
    setDest({
      image: "assets/destination/image-titan.png",
      header: "TITAN",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    });
  }

  return (
    <div className="dest">
      <img
        src="/assets/destination/background-destination-desktop.jpg"
        alt=""
        className="dest-bg-img"
      />
      <Navbar />

      <div className="dest-box1">
        <p>PICK YOUR DESTINATION</p>
      </div>

      <section className="dest-section">
        <div className="dest-cont">
          <div className="dest-img">
            <img src={dest.image} alt="" width={300} />
          </div>

          <div className="dest-btn-cont">
            <ul>
              <li>
                <button className="active" onClick={moon}>
                  MOON
                </button>
              </li>
              <li>
                <button onClick={mars}>MARS</button>
              </li>
              <li>
                <button onClick={european}>EUROPEAN</button>
              </li>
              <li>
                <button onClick={titan}>TITAN</button>
              </li>
            </ul>

            <div className="dest-text">
              <h1>{dest.header}</h1>
              <p>{dest.text}</p>
            </div>

            <div className="dest-footer">
              <div>
                <p>Avg. distance</p>
                <h4>77484939</h4>
              </div>
              <div>
                <p>Est. travel time</p>
                <h4>3478599</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
