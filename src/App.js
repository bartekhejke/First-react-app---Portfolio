import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
                to="/"
              >
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                style={{ fontSize: "18px", fontWeight: "bold" }}
                to="/resume"
              >
                Resume
              </Link>
              <Link
                style={{ fontSize: "18px", fontWeight: "bold" }}
                to="/about"
              >
                About Me
              </Link>
              <Link
                style={{ fontSize: "18px", fontWeight: "bold" }}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                style={{ fontSize: "18px", fontWeight: "bold" }}
                to="/contact"
              >
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
