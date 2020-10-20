import React from "react";
import IntroPage from "./IntroPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <IntroPage />
      <main>
        <AboutMe />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
