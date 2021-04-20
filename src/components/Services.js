import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import ImageAvatar from "../img_avatar.png";
import "./Services.css";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import { red } from "@material-ui/core/colors";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

function About() {
  return (
    <div className="services">
      <div className="services__main">
        <h3>My Services</h3>
        <div className="card__main">
          <div className="card">
            <div className="container">
              <h4>
                <DesktopWindowsIcon
                  className="IconStyle"
                  style={{
                    fontSize: "45px",
                    backgroundColor: "#f9ab00",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#fff",
                  }}
                />
                <br />
                <p>Web Design</p>
              </h4>
              <p>
                I Approch each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <DeveloperModeIcon
                  style={{
                    fontSize: "45px",
                    backgroundColor: "#f9ab00",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#fff",
                  }}
                />
                <br />
                <p>Web Development</p>
              </h4>
              <p>
                I Approch each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <DeveloperModeIcon
                  style={{
                    fontSize: "45px",
                    backgroundColor: "#f9ab00",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#fff",
                  }}
                />
                <br />
                <p>React JS</p>
              </h4>
              <p>
                I Approch each project individually and always focus on the
                result
              </p>
            </div>
          </div>
          <div className="card">
            <div className="container">
              <h4>
                <DesktopMacIcon
                  style={{
                    fontSize: "45px",
                    backgroundColor: "#f9ab00",
                    borderRadius: "50%",
                    padding: "10px",
                    color: "#fff",
                    hover: "red",
                  }}
                />
                <br />
                <p>JavaScript</p>
              </h4>
              <p>
                I Approch each project individually and always focus on the
                result
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
