import React ,{useState}from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "Success");
  }
  const handleLoClick =()=>{
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "Success");
  }
  const handleOnChange =(event)=>{
    // console.log("on click Changed ")
    setText(event.target.value);
  }
  const handleClearClick =()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Cleared text", "success");
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black' }} value={text} id="myBox" rows="9"></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}} >
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
