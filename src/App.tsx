import React from "react";
import './App.css'
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Education } from './components/Education';
import { Experience } from './components/Experience';


function App() {
  return (
    <main className="bg-gray-100 h-full w-full content-center py-20 px-5">
      <About />
      <Gallery />
      <Education />
      <Experience />
    </main>
  )
}

export default App
