import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/pour.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${main})` }}>
      <div className="headerContainer">
        <h1>Join the feast!!</h1>
        <h2>Bite into happiness</h2>
        <Link to="./menu">
          <button>Dive In!!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
