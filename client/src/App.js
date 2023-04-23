import './App.css';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';

import Card from './components/card/card';

import Landing from './views/landing/landing';
import About from './views/about/about';
import Detail from './views/detail/detail';
import Home from './views/home/home';


const URL_BASE= 'localhost:3001';

function App() {
  
  //const {name, img, health, attack, defense, type}= response;
  return (
    <div className="App fondo">
      <Routes>
        
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pokemons/:id' element={<Detail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
