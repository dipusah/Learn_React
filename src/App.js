import { useState } from "react/cjs/react.development";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { HashRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or disabled
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      //blink  this title comment section
      document.title = "TexUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title='TexUtils - Amazing Mode'
      // },2000)
      // setInterval(()=>{
      //   document.title="install textutil now"
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TexUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="First app TextUtil"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /user ---->component 1}
                /user/home -->component 2 if not use exact */}
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below!"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
