import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/Providers/theme-provider";
import About from "./components/Home/Intro/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Portfolio, Timeline } from "./components/Home/export";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className={classes.app}>
      <div className="w-full ">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Portfolio />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
