import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer </h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn  */}
                <a
                  href="http://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Facebook  */}
                <a
                  href="http://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* Instagram  */}
                <a
                  href="http://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                </a>
                {/* GitHub  */}
                <a
                  href="http://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
