import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ProjectModal from "./ProjectModal";
import Contact from "./Contact";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  return (
    <>
      <Navigation />
      <ProjectModal />
      <ContactForm />
      <div id="page-wrapper">
        <IntroPage />
        <main>
          <AboutMe />
          <Portfolio />
        </main>
        <Contact />
      </div>
    </>
  );
}

export default App;
