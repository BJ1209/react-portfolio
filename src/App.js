import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import data from "./resumeData";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Navbar data={data?.main} />
      <Home data={data} />
      <About data={data} />
      <Resume data={data?.resume} />
      <Projects data={data?.portfolio} />
      <Contact data={data?.main} />
      <Footer data={data?.main} />
    </div>
  );
}

export default App;
