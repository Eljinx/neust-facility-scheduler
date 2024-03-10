import React from 'react';
import './content2.css';
import NEUST2 from '../../assets/images/neust2.jpg';

function Content2() {
  return (
    <section id="content2"> {/* Wrap the Content2 component in a section with id */}
      <div className="content2">
          <div className="top_container">
              <div className="blue_container">
                  <div className="follow_us">
                      <div className="follow_container">
                          <h1>Follow Us</h1>
                      </div>
                      <p>#NEUSTFacilities Scheduler</p>
                      <div className="follow_container">
                          <h1>@NEUST Sumacab Campus</h1>
                      </div>
                  </div>
              </div>
              <div className="photo_container">
                  <img src={NEUST2} alt="NEUST Logo" />
                  <div className="learn_more">
                      <h1>LEARN MORE</h1>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Content2;
