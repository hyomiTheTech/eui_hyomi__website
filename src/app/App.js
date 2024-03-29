import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ProjectModal from "./ProjectModal";
import Contact from "./Contact";
import ContactForm from "./ContactForm/ContactForm";
import Experiences from "./Experiences/Experiences";

function App() {
  return (
    <>
      <Navigation />
      <div id="modal-overlay">
        <ProjectModal />
        <ContactForm />
      </div>
      <div id="page-wrapper">
        <IntroPage />
        <main>
          <AboutMe />
          <Experiences />
          <Portfolio />
        </main>
        <Contact />
      </div>
    </>
  );
}

export default App;
