//import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card({id, name, img, health, attack, defense}){
    if (!id || !name || !img || !health || !attack || !defense){
        return(<h1>FALTAN DATO PA</h1>)
    }else{
        return(
            <div>
            <img src={img} alt={style.img}/>
            <h3>Pokemon: {name}</h3>
            
            
            </div>
            )}
        }