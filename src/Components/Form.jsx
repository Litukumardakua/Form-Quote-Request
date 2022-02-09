import React from "react";
import "../Components/Form.css";
import Contact from "./Contact";

function Form() {
  return (
    <div className="main">
      <div className="head_section">
        <h1>Request For Quotes</h1>
        <h6>
          Please fill out below Request for quote form and we will get back to
          you as soon as posible. in case if you need <br />
          any urgent assistance, plese do not hesitate to Contact Us.
        </h6>
      </div>
      <div className="main">
        <h4>1. Contact Details</h4>
      </div>

      <Contact />
    </div>
  );
}

export default Form;
