import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import BigIcons from "./components/BigIcons";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
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
      <Navbar />
      <Header />
      <About />
      <BigIcons />
      <Projects />
    </div>
  );
}

export default App;
