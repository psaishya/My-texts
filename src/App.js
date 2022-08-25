import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


document.body.style.backgroundColor='rgb(219, 220, 196)';
document.body.style.color='black';
function App() {
  
  //aru components : light: rgb(183, 186, 140)
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const changemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      
      document.body.style.backgroundColor='rgb(46, 40, 45)';
      document.body.style.color='white';
      
      setalertfunc("Dark mode has been enabled","success");
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='rgb(219, 220, 196)';
      document.body.style.color='black';
      setalertfunc("Dark mode has been disabled","success");
  }
  }

  const setalertfunc=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  return (
    <>  
      <Navbar title="Mytexts" mode={mode} changemode={changemode}/>
      <Alert alert={alert} /> 

      <Router>
        <Routes>
          <Route 
              path="/about" 
              element={ <About mode={mode}/>}>
          </Route>
        
          <Route 
              path="/textform"
              element={<div className="container">
                <Textform heading="Enter your text here" mode={mode}  setalertfunc={setalertfunc}/>
                </div>}>
          </Route>
        </Routes>
      </Router>
  

    
    
    
    </>
  );
}

export default App;
