import ReactDom from 'react-dom';
import App from './App.js'//we can also write './App' bcz react knows this is js file
import './index.css'
import React from "react";


// ReactDom.render(<h2>hi</h2>,document.getElementById('root'));
ReactDom.render(<App />, document.getElementById('root'))