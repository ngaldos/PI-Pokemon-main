//import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card({poke}){
    //const {img, name, type} = poke;
        return(
            <div className={style.card_container}>
                <h3>{poke?.name}</h3>
                <img className={style.img} src={poke?.img} alt={poke?.name}/>
            </div>
            )}