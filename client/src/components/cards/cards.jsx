import Card from '../card/card';
import style from './cards.modules.css';

export default function ({allPokemons}){
    //if (allPokemons) console.log(pokemonList);
    return (
        <>
            {allPokemons?.map((poke)=> (
                <Card poke={poke}/>
            ))}
        </>
        );
}