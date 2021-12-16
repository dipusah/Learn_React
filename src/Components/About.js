import React,{useState} from "react";

export default function About() {
    const [mystyle,setMyStyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btntext,setBtnText]=useState("Enable Dark mode")

    const toggleStyle =()=>{
        if(mystyle.color==="black"){
            setMyStyle({color:"white",
            backgroundColor:'black',
            border:"1px solid white"
        })
        setBtnText("Enable Light mode")
    }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("Enable Dark mode")
        }

    }



  return (
    <div className="container my-3" style={mystyle}>
        <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              This app is all about play with Text.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                <li>we capitalize latter.</li>
                
                <li>we change text in to lower text.</li>
                <li>we clear text.</li>
                <li>count character and number of words in text.</li>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
