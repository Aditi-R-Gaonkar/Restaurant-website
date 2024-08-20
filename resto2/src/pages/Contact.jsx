import React from "react";
import pancake from "../assets/pancake.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pancake})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
          <label htmlFor="remarks"></label>
          <textarea
            rows="6"
            placeholder="write about your experience with us"
            name="remarks"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
