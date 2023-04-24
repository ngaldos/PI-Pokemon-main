import Card from '../card/card';
import style from './cards.modules.css';

export default function ({allPokemons}){
    //if (allPokemons) console.log(pokemonList);
        return (
            <div className={style.card_list}>
                {allPokemons?.map((poke)=> (
                    <Card poke={poke}/>
                    ))}
            </div>

        );
}