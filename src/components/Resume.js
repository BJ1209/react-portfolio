import React from 'react';
import './../styles/Resume.scss';

function Resume({ data }) {
  return (
    <section id="resume" className="resume">
      <div className="resume__education">
        <h3>Education</h3>
        <div>
          {data?.education.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.school}</h3>
                <p>
                  <span>{item.degree}</span> • {item.graduated}
                </p>
                <p>{item.percentage}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="resume__skills">
        <h3>Skills</h3>
        <div>
          {data?.skills.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
