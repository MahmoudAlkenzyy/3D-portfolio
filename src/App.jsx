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
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-primary bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
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
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "80px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 6000,
          },
          style: {
            background: "#151030",
            color: "white",
            fontSize: "18px",
            padding: "20px 26px",
            maxWidth: "500px",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
