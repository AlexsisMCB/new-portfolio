import React from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
