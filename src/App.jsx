import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  BallCanvas,
  ComputersCanvas,
  Contact,
  EarthCanvas,
  Experience,
  Feedbacks,
  Hero,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-primary bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
