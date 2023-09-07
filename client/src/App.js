import './App.css';
import {Route, Routes} from 'react-router-dom';

import Landing from './views/landing/landing';
import About from './views/about/about';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Create from './views/create/create';
import SingUp from './views/singUp/singUp'



function App() {
  
  
  return (
    <div className="App fondo">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/pokemons/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path= '/singUp' element={<SingUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
