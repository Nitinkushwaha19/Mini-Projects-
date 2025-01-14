import React,{useState}from 'react'

export default function Textform(props) {
    
  
  
    let upperCaseClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Change to UpperCase !","primary")
    }
    let lowerCaseClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Change to LowerCase !","primary")
    }

    let handleOnClick=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    let clear=()=>{
        setText("");
        props.showalert("Text Cleared !","primary")
    }
    
    let copy=()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied !","primary")
    }

    const [text,setText] = useState("textArea field!");

    

  


  return (
   <div style={props.mystyle}>
   <div className="container" style={props.mystyle} width="100%">
    <h3>{props.headings}</h3>
     <div className="mb-3" style={props.mystyle}>
      <textarea className="form-control" value={text}  style={props.mystyle} onChange={handleOnClick}id="exampleFormControlTextarea1" rows="8"></textarea>
     </div>
     <button disabled={text.length===0} type="button" onClick={upperCaseClick} className="btn btn-outline-info mx-1 my-2"> Uppercase</button>
     <button disabled={text.length===0} type="button" onClick={lowerCaseClick} className="btn btn-outline-info mx-1 my-2"> Lowercase</button>
     <button disabled={text.length===0} type="button" onClick={clear} className="btn btn-outline-info mx-1 my-2"> clear</button>
     <button disabled={text.length===0} type="button" onClick={copy} className="btn btn-outline-info mx-1 my-2"> copy Text</button>
    
     </div>
     
     <div className='container my-2'style={props.mystyle}>
        <h2>Your text summary ✌️</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
        <p>{ 0.008 * text.split("").filter((element)=>{return element.length!==0}).length} minutes  to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
     </div>
     </div>

     
    
  )
}

