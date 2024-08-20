import React from "react";
import "../styles/About.css";
import cake from "../assets/cake.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${cake})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Welcome to RestroHub, where culinary excellence meets warm
          hospitality! At RestroHub, we pride ourselves on delivering an
          unforgettable dining experience with a diverse menu crafted from the
          finest ingredients. From our mouth-watering pizzas and artisanal
          pastas to our fresh salads, hearty soups, and indulgent desserts,
          every dish is a celebration of flavor. Our commitment to quality and
          service is reflected in every aspect of our restaurant, from the
          inviting ambiance to the friendly staff dedicated to making your visit
          special. Whether you're here for a casual meal with friends or a
          special celebration, RestroHub is your destination for great food and
          memorable moments. Join us and discover why we're the go-to spot for
          food lovers!
        </p>
      </div>
    </div>
  );
}

export default About;
