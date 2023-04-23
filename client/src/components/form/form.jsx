import { useState } from "react";


export default function (){
    const [data, setData] = useState({
        name:'',
        img: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight:''
    });
    const funcionLok = ()=>{

    }
    return (
        <form onSubmit={funcionLok}>
            
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' value={data.name}/>

            <label htmlFor="img">Image: </label>
            <input type="text" id='img'value={data.img}/>

            <label htmlFor="health">Health: </label>
            <input type="number" id='health' value={data.health}/>

            <label htmlFor="attack">Attack: </label>
            <input type="number" id='attack' value={data.attack}/>
            
            <label htmlFor="defense">Defense: </label>
            <input type="number" id='defense' value={data.defense}/>

            <label htmlFor="speed">Speed: </label>
            <input type="number" id='speed' value={data.speed}/>

            <label htmlFor="height">Height: </label>
            <input type="number" id='height' value={data.height}/>

            <label htmlFor="weight">Weight: </label>
            <input type="number" id='weight' value={data.weight}/>

            <button type='submit'>Create Pokemon</button>
        </form>
    );
}