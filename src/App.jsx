import { useEffect, useState } from "react";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/Providers/theme-provider";
import About from "./components/Home/Intro/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Portfolio, Timeline } from "./components/Home/export";
import Experience from "./components/Experience/Experience";
import CustomDialog from "./components/customDialog/custom-dialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <div className={classes.app}>
      {showDialog && (
        <CustomDialog
          message=" Hello! sir/maam, Thanks for reviewing my profile! If you’re interested in discussing job opportunities or have any questions, please reach out. I’m eager to connect."
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
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
