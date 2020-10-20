import React from "react";
import Navigation from "./Navigation";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <Navigation />
      <IntroPage />
      <main>
        <AboutMe />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
