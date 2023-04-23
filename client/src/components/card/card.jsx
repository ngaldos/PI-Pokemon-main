//import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card({poke}){
    const {img, name, type} = poke;
    if (!name || !img){
        return(<h1>FALTAN DATO PA</h1>)
    }else{
        return(
            <div>
                <h3>Pokemon: {name}</h3>
                <img src={img} alt={style.img}/>
            </div>
            )}
        }