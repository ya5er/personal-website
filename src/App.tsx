import './App.css'
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Sidebar } from './components/Sidebar';
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="bg-gray-100 h-full w-full content-center pt-20 pb-10 px-5">
      <Sidebar />
      <About />
      <Gallery />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
