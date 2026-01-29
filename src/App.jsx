import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Home />
    </>
  );
}

export default App;
