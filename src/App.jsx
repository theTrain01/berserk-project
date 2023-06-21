/** @format */
import React from 'react'
import axios from 'axios'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import {Home, MasterpieceCreator, WatchAnime, AllAbout} from './components';
function App() {
  const [state, setState] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/episodeAnim/episodeAnim.json')
      .then((res) => setState(res.data))
  }, [])

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='wrapper'>
        <Routes>
          <Route path = '/' element = { <Navigate to="/Home" />} />  
          <Route path = '/Home' element = {<Home /> } />  
          <Route path = '/WatchAnime' element = {<WatchAnime state = {state}/>} />  
          <Route path = '/AllAbout' element = {<AllAbout />} />  
          <Route path = '/MasterpieceCreator' element = {<MasterpieceCreator />} />  
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
