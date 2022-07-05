import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import Result from './pages/Result';
import Game from './pages/Game/index';
import Rules from './components/Rules';
import { GameProvider } from './utils/context';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import music from './assets/golden_dragon.mp3'


ReactDOM.render(
    <Router>
      <GameProvider>
        <audio src={music} autoPlay></audio>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game />}/>
          <Route path='/result' element={<Result />}/>
        </Routes>
      </GameProvider>
    </Router>,
  document.querySelector('#root')
);

