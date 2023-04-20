//import {Link} from 'react-router-dom';

export default function Card({name, img, health, attack, defense, type}){
    if (!name || !img || !health || !attack || !defense || !type){
        return(<h1>FALTAN DATO PA</h1>)
    }else{
        return(
            <div>
            <img src={img} alt='Pokemon Img'/>
            <h3>Pokemon: {name}</h3>
            <h2>Type: {type}</h2>
            <h2>Health: {health}</h2>
            <h2>Attack: {attack}</h2>
            <h2>Defense: {defense}</h2>
            </div>
            )}
        }