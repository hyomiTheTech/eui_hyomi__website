import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <Navigation />
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
