import Card from '../card/card';


export default function (pokemons){
    const response= pokemons.map((pokemon)=>{
        return (<Card {...pokemon} />)
    });
    return (response);
}