import React from 'react';
import './../styles/About.scss';

function About({ data }) {
  const main = data?.main;
  return (
    <section className="about" id="about">
      <div className="about__image">
        <img src={main.imageURL} alt={main.name} />
      </div>
      <div className="about__info">
        <div className="about__infotop">
          <h1>About Me</h1>
          <p>{main.bio}</p>
        </div>
        <div className="about__infobottom">
          <h2>Contact Details</h2>
          <div>
            <p>{main.name}</p>
            <p>
              {main.address.state}, {main.address.country}
            </p>
            <p>{main.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
