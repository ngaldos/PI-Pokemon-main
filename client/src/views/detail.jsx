import axios from 'axios';

import style from './detail.module.css';
import Nav from '../components/nav/nav';
import { useParams } from 'react-router-dom';

const Detail = (props)=>{
    const {id} = useParams();
    const data = axios.get(`localhost:3001/pokemons/${id}`).then(data=>data.data)
    const {name, img, health, attack, defense, speed, height, weight}= data;
    console.log(data);
    
    return(
        <div>
            <Nav/>
            <div className={style.higher}>
                <img src={img} alt='IMG'/>
                <div className={style.text}>
                    <h2>ID: {id}</h2>
                    <h2>Name: {name}</h2>
                    <h3>Health: {health}</h3>
                    <h3>Attack: {attack}</h3>
                    <h3>Defense: {defense}</h3>
                    <h3>Speed: {speed}</h3>
                    <h3>Height: {height}</h3>
                    <h3>weight: {weight}</h3>
                </div>
            </div>
        </div>
    );
}

export default Detail;

