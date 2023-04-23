import style from './home.module.css';
import Nav from '../components/nav/nav';
import Form from '../components/form/form';

import axios from 'axios';




const Home = ()=>{
    //const pokeInfo = await getPokemonById(5);
    //const pokeInfo = axios.get(`localhost:3001/pokemons/5`).then(data=>data.data)
    //console.log(pokeInfo);
    return(
        <div className={style.home}>
            <Nav/>
                <div >
                    <h1>Pokemon Henry</h1>
                    <Form/>
                </div>
        </div>
    );
}

export default Home;