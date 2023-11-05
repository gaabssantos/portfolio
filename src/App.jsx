import "./App.css";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Skills from "./components/Skills";
// ..
AOS.init();

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
