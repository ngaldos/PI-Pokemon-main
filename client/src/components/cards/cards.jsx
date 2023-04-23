import Card from '../card/card';


export default function ({allPokemons}){
    const pokemonList = allPokemons;

    const response= pokemons.map((pokemon)=>{
        return (
            <div className='card-list'>
                {pokemonList?.map((poke)=> (
                    <Card pokemon={poke}/>
                    ))}
            </div>

        );
    });
    return (response);
}