// import logo from './logo.svg';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import { Component } from 'react';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import About from './components/About';
// import { useInsertionEffect, useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
//   // useRouteMatch,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing thing';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'install TextUtils';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      
        {/* <Navbar title ="TextUtils2" aboutUs ="About Text"/> */}
        {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}



export default App;
