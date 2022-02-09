import React, {useState} from 'react';

function Form(props) {

    const [text, setText] = useState("");

    const textOnChangeHandler = (event) => {
        setText(event.target.value);
    }

    const uppercaseHandler = () => {
        setText(text.toUpperCase());
    }

    const lowercaseHandler =() => {
        setText(text.toLowerCase());
    }

    const clearHandler = () => {
        setText('');
    }

  return (
    <div>
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} style={{backgroundColor: props.mode==='light'?'white':'black'}} placeholder="Enter text..." onChange={textOnChangeHandler}></textarea>
            </div>
            <div>
                <button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={uppercaseHandler}>UPPERCASE</button>
                <button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={lowercaseHandler}>lowercase</button>
                <button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={clearHandler}>Clear</button>
            </div>
        </div>
        <div className="container mt-4">
            <h2>Details</h2>
            <p><b>{text.split(/\s+/).filter((item)=>{return item.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <h2>Preview</h2>
            <p>{text===''?'Type Something for preview':text}</p>
        </div>
    </div>
  );
}

Form.defaultProps = {
    heading: "HEADING"
}

export default Form;
