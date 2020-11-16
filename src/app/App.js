import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ProjectModal from "./ProjectModal";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navigation />
      <ProjectModal />
      <div id="page-wrapper">
        <IntroPage />
        <main>
          <AboutMe />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
