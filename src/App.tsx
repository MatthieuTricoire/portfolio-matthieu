import "./App.css";

import { BrowserRouter } from "react-router-dom";

// Components import
import Header from "./Components/Header/Header";
import Home from "./Components/HomeContents/Home";
import About from "./Components/About/About";
import Education from "./Components/EducationContent/Education";
import Skills from "./Components/SkillsContent/Skills";
import Contact from "./Components/ContactContent/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
