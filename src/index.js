import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Projects from './components/Projects.js'
import Landing from './components/Landing.js';
import {
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
      
    </Routes>
    </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

