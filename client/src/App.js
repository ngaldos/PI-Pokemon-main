import './App.css';
import {Route, Routes} from 'react-router-dom';
import Card from './components/card/card';
import Landing from './views/landing';
import Home from './views/home';
//import Nav from './components/nav/nav';
import axios from 'axios';

const URL_BASE= 'localhost:3001';

function App() {
  const response = axios.get(`${URL_BASE}/pokemons/5`).then(data=>data.data)
  console.log(response);
  console.log('------*********------');
  //const {name, img, health, attack, defense, type}= response;
  return (
    <div className="App fondo">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
