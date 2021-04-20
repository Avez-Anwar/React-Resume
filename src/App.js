import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Link } from "react-scroll";
import MiddleSection from "./components/MiddleSection";

function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <MiddleSection />
    </div>
  );
}

export default App;
