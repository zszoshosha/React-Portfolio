import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    // Main container — each child section handles its own responsive layout
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
