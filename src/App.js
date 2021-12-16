import { useState } from "react/cjs/react.development";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or disabled
  const toggleMode =()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="First app TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyze below!" mode={mode}/>
      </div>
    </>
  );
}

export default App;
