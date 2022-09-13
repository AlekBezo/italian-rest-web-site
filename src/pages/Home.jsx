import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza-pasta.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Trattoria Di Gino</h1>
        <p>"Discover Delicious"</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
