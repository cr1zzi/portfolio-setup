import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import BigIcons from "./components/BigIcons";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="full-app">
      {/* main background particles */}
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 1.5,
                color: "#fff",
              },
            },
          },
        }}
      />
      {/* end of main background particles */}
      <Navbar />
      <Header />
      <About />
      <BigIcons />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
