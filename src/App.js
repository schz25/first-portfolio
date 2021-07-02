import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import { heroData } from './mock/data';

function App() {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
  }, []);
  return (
    <div className="App">
    <Hero hero={hero} />
    </div>
  );
}

export default App;



