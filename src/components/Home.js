import React from 'react';
import './../styles/Home.scss';
import Fade from 'react-reveal/Fade';
import { ArrowDropDownCircle } from '@material-ui/icons';
function header({ data }) {
  const main = data?.main;
  return (
    <div className="home" id="home">
      <Fade top>
        <div className="home__banner">
          <h1>I'm {main.name}</h1>
          <h3>
            I'm an {main.address.country} based <span>{main.occupation}</span>.
          </h3>
          <h3>{main.description}</h3>
        </div>
      </Fade>
      <p className="home__arrow">
        <a href="#about" className="home__arrowcenter">
          <ArrowDropDownCircle />
        </a>
      </p>
    </div>
  );
}

export default header;
