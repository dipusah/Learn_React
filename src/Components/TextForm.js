import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("uppercase was clicked ==>" + text);
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleLoClick =()=>{
        let tolower=text.toLowerCase();
        setText(tolower);
    }
    const handleClearText =()=>{
      let clear="";
      setText(clear);
  }
    const handleOnchange = (event)=>{
        //console.log("Onchanged");
        setText(event.target.value);

    }

  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");
  //text ="new text"; //wrong way to change state
  // setText("new text");//correct way to change the state.

  return (
    <>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1"  onClick={handleUpClick} >
        Convert to Upper case
      </button>

      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to lower case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>
        ClearText
      </button>


      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>your text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 *text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
