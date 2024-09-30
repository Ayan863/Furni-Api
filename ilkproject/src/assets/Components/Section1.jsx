// import React from 'react'

import "../../../../assets/css/main.css";
const Section1 = () => {
  return (
    <section className="homePage">
      <div className="container">
        <div className="modernInterior">
          <h1> Modern Interior Design Studio</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="buttons">
            <button className="shop">Shop Now</button>
            <button className="explore">Explore</button>
          </div>
        </div>
        <div className="photos">
          <img
            id="sofa"
            src="https://themewagon.github.io/furni/images/couch.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
