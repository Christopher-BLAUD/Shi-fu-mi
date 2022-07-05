import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import Result from './pages/Result';
import Game from './pages/Game/index';
import { GameProvider } from './utils/context';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


ReactDOM.render(
    <Router>
      <GameProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game />}/>
          <Route path='/result' element={<Result />}/>
        </Routes>
      </GameProvider>
    </Router>,
  document.querySelector('#root')
);

