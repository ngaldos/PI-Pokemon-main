import {Link} from 'react-router-dom';
import style from './card.module.css';

export default function Card({poke}){
    //const {img, name, type} = poke;

        return(
            <div className={style.card_container}>
                <Link to={`../pokemons/${poke?.id}`}>
                    <h3>{poke?.name}</h3>
                    <img className={style.img} src={poke?.img} alt={poke?.name}/>
                    <div className={style.type} >
                        {poke?.types.lenght > 0 ? poke?.types.map((type)=> <p className={style.text4}  key={type}>{type}</p>
                        ):(
                            <>
                                {poke.types.map((e)=> <p>{e}</p>)}
                            </>
                            
                        )}
                    </div>
                </Link>
            </div>
            )}