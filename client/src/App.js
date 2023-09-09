import './App.css';
import {Route, Routes} from 'react-router-dom';

import Landing from './views/landing/landing';
import About from './views/about/about';
import Detail from './views/detail/detail';
import Home from './views/home/home';
import Create from './views/create/create';
import SingUp from './views/singUp/singUp';
import SingIn from './views/singIn/singIn';
import MyProfile from './views/myProfile/myProfile';
import Reviews from './views/reviews/reviews';



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
        <Route path= '/singIn' element={<SingIn/>}/>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/reviews' element={<Reviews/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
