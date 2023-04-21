import style from './home.module.css';
import Card from '../components/card/card';
import Nav from '../components/nav/nav';

import axios from 'axios';




const Home =  ()=>{
    return(
        <div className={style.home}>
        <Nav/>
                <div >
                <h1>Pokemon Henry</h1>
            
            </div>
        </div>
    );
}

export default Home;