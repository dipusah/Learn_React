import React from "react";
// alert use
export default function Alert(props) {
    const capatalized=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    
      }
    
  return (
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalized(props.alert.type)}</strong>: {props.alert.msg}
   
      </div>
  );
}
