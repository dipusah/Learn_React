import { useState } from "react/cjs/react.development";
import "./App.css";
import Alert from "./Components/Alert";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or disabled
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)


  }
  const toggleMode =()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="First app TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below!" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
