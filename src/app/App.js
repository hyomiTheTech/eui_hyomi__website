import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ProjectModal from "./ProjectModal";

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
        </main>
      </div>
    </>
  );
}

export default App;
