import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Bartosz Hejke</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat odio sit amet tempor iaculis. Aenean iaculis aliquam quam.
              Morbi malesuada ipsum lacinia arcu fringilla, ac porta enim
              volutpat. Mauris ipsum dui, efficitur porta turpis nec, tempus
              sodales eros. Mauris vel felis quis purus ullamcorper imperdiet
              sed a magna. Proin faucibus, tellus et consequat bibendum, nisi
              massa porttitor nulla, lacinia vulputate arcu dolor in nisi.
              Quisque sodales mi vel vulputate aliquam. Cras id tortor et turpis
              porta viverra. Curabitur non pulvinar velit, eget vestibulum
              turpis.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>123 456 789</p>
            <h5>Email</h5>
            <p>someone@mail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat odio sit amet tempor iaculis. Aenean iaculis aliquam quam. Morbi malesuada ipsum lacinia arcu fringilla, ac porta enim volutpat."
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat odio sit amet tempor iaculis. Aenean iaculis aliquam quam. Morbi malesuada ipsum lacinia arcu fringilla, ac porta enim volutpat."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat odio sit amet tempor iaculis. Aenean iaculis aliquam quam. Morbi malesuada ipsum lacinia arcu fringilla, ac porta enim volutpat."
            />
            <Experience
              startYear={2012}
              endYear={2017}
              jobName="Second Job"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat odio sit amet tempor iaculis. Aenean iaculis aliquam quam. Morbi malesuada ipsum lacinia arcu fringilla, ac porta enim volutpat."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={30} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
