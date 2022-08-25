import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const upbutton=()=>
    { 
        let newtext=text.toUpperCase();
        setText(newtext);
        props.setalertfunc("Converted to upper Case","success")
    }
    const updateit=(event)=>
    {  
        setText(event.target.value);
    }
    const lowbutton=()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
        props.setalertfunc("Converted to lower Case","success")
    }
    const clearall=()=>
    {
        let newtext='';
        setText(newtext);
        props.setalertfunc("text cleared","success")
    }
    const wordfunc=()=>
    {
        let x;
        x=text.split(" ").length;
        let j=x;
        for (let i=0;i<j;i++)
        {
            if(text.split(" ")[i]==="")
            {
                x--;
            }
        }
        return x;
    }
    const inverse=()=>
    {
        let newtext=text;
        newtext=newtext.split("").reverse().join("");
        console.log("inversed");
        setText(newtext);
        props.setalertfunc("Text inversed","success")
       
    }
    const copy=()=>
    {
        navigator.clipboard.writeText(text);
        props.setalertfunc("Text copied to clipboard","success")
        
    }
    const removeexspace=()=>
    {
        let newtext=text;
        newtext=newtext.split(/[ ]+/).join(" ");
        setText(newtext);
        props.setalertfunc("Removed extra space","success")
    } 

    
    return (
    <>  
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" placeholder='Enter here...' style={{backgroundColor: props.mode==='light'?'rgb(183, 186, 140)':'rgb(33,33,33)', color:props.mode==='light'?'black':'white'}} id="mybox" rows="8" value={text} onChange={updateit}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={upbutton} >Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={lowbutton} >Convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clearall}>Clear all text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={inverse}>Inverse text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={copy} >Copy text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={removeexspace} >Remove extra space</button>


            
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>
                Words:{wordfunc()}<br/>
                Characters:{text.length}<br/>
                Sentences:{text.split(". ").length-1}<br/>
                Time to read: {0.008*wordfunc()} minutes
            </p>
        </div>
    </>
  )
}
