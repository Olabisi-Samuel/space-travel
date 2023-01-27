import { useState } from "react";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [tech, setTech] = useState({
    head: "THE TERMINOLOGY...",
    subHead: "LAUNCH VEHICLE",
    details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
    image: "assets/technology/image-launch-vehicle-portrait.jpg",
  });

  return (
    <div className="tech">
      <img
        src="assets/technology/background-technology-desktop.jpg"
        alt=""
        className="tech-bg-img"
      />
      <Navbar />

      <div className="tech-box1">
        <p>SPACE LAUNCH 101</p>
      </div>

      <section className="tech-container">
        <div className="tech-btn">
          <button
            onClick={() =>
              setTech({
                head: "THE TERMINOLOGY...",
                subHead: "LAUNCH VEHICLE",
                details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
                image: "assets/technology/image-launch-vehicle-portrait.jpg",
              })
            }
            type="button"
            className="tech-btn1"
          >
            1
          </button>
          <button
            onClick={() =>
              setTech({
                head: "THE TERMINOLOGY...",
                subHead: "SPACE CAPSULE",
                details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
                image: "assets/technology/image-space-capsule-portrait.jpg",
              })
            }
            type="button"
            className="tech-btn2"
          >
            2
          </button>
          <button
            onClick={() =>
              setTech({
                head: "THE TERMINOLOGY...",
                subHead: "SPACEPORT",
                details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
                image: "assets/technology/image-spaceport-portrait.jpg",
              })
            }
            type="button"
            className="tech-btn3"
          >
            3
          </button>
        </div>
        <div className="tech-text-cont">
          <h6>{tech.head}</h6>
          <h1>{tech.subHead}</h1>
          <p>{tech.details}</p>
        </div>
        <div className="tech-img-cont">
          <img src={tech.image} alt="" width={400} height={400} />
        </div>
      </section>
    </div>
  );
};

export default Technology;
