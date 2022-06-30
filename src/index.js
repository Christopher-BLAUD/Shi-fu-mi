import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
);

