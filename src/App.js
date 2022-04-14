import React from 'react'
import Meme from './components/Meme';
import Width from './components/Width'
import Box from './components/Box'
import { Routes,Route} from 'react-router-dom';



function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Meme/>}/>
        <Route path='/formpage' element={<Box />}/>
        <Route path='/windowsize' element={<Width />}/>
        <Route path='*' element={ <h1>There's nothing here!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
