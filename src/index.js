import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index';
import Result from './pages/Result';
import Game from './pages/Game/index';
import GameSetting from './pages/GameSetting';
import Pvp from './pages/Pvp';
import { createGlobalStyle } from 'styled-components';
import { GameProvider } from './utils/context';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
body{
  font-family: Gantari, Verdana, Geneva, Tahoma, sans-serif;
}
`

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Router>
      <GameProvider>
        <Routes>
            <Route path='/' element={<GameSetting/>} />
            <Route path='home-pvp' element={<Pvp/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/game' element={<Game />}/>
            <Route path='/result' element={<Result />}/>
        </Routes>
          <GlobalStyle/>
      </GameProvider>
    </Router>
);
