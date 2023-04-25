import { useState } from "react";
import style from './create.modules.css';
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";

import axios from 'axios';

function Create (){
    const dispatch= useDispatch();
    const [input, setInput] = useState({
        name: '',
        img: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
    });
    const [error, setError] = useState({
        name: '',
        img: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: ''
    });

    const validate = (input, error)=>{
        const errors= {...error};


        if (!input.name) errors.name= '';
        else if (!/^[a-zA-Z]+$/.test(input.name)){
            errors.name= 'This input must have only letters';
        }else errors.name= '';


        if (!input.img) errors.img = '*This input must is mandatory.'
        else if (!/.(gif|jpeg|jpg|png)$/i.test(input.img)){
                errors.img= 'Invalid URL';
        }else errors.img= '';


        if (!input.health) errors.health = '*This input must is mandatory.'
        else if (!/^\d+$/.test(input.health)){
            errors.health= 'This input must have only numbers';
        }else errors.health= '';


        if (!input.attack) errors.attack = '*This input must is mandatory.'
        else if (!/^\d+$/.test(input.attack)){
            errors.attack= 'This input must have only numbers';
        }else errors.attack= '';


        if (!input.defense) errors.defense = '*This input must is mandatory.'
        else if (!/^\d+$/.test(input.defense)){
            errors.defense= 'This input must have only numbers';
        }else errors.defense= '';


        //Agregar validaciones de numeros a
        if (!input.speed) errors.speed= '';
        else if (!/^\d+$/.test(input.speed)){
            errors.speed= 'This input must have only numbers';
        }else errors.speed= '';


        if (!input.height) errors.height= '';
        else if (!/^\d+$/.test(input.height)){
            errors.height= 'This input must have only numbers';
        }else errors.height= '';


        if (!input.weight) errors.weight= '';
        else if (!/^\d+$/.test(input.weight)){
            errors.weight= 'This input must have only numbers';
        }else errors.weight= '';
        

        return errors;
    }

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(validate({...input, [e.target.name]: e.target.value,}, error));
        ;
    }
    
    const submitHandler = async (event)=>{
        event.preventDefault();
        dispatch(addPokemon(input))
        alert("Pokemon created sucessfully");
        setInput({
            name: '',
            img: '',
            health: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: ''
        });
        return;
    }

    return (
        <div className={style.higher}>
            <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" name='name' onChange={handleChange} value={input.value}/>
                    <span>{error.name}</span>
                </div>
                <div>
                    <label>Image (URL):</label>
                    <input type="text" name='img' onChange={handleChange} value={input.value}/>
                    <span>{error.img}</span>
                </div>
                <div>
                    <label>Health: </label>
                    <input type="number" name='health' onChange={handleChange} value={input.value}/>
                    <span>{error.health}</span>
                </div>
                <div>
                    <label>Attack: </label>
                    <input type="number" name='attack' onChange={handleChange} value={input.value}/>
                    <span>{error.attack}</span>
                </div>
                <div>
                    <label>Defense: </label>
                    <input type="number" name='defense' onChange={handleChange} value={input.value}/>
                    <span>{error.defense}</span>
                </div>
                <div>
                    <label>Speed: </label>
                    <input type="number" name='speed' onChange={handleChange} value={input.value}/>
                    <span>{error.speed}</span>
                </div>
                <div>
                    <label>Height: </label>
                    <input type="number" name='height' onChange={handleChange} value={input.value}/>
                    <span>{error.height}</span>
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="number" name='weight' onChange={handleChange} value={input.value}/>
                    <span>{error.weight}</span>
                </div>
                <button  type="submit" disabled={error.name || error.img || error.health || error.attack || error.defense || error.speed || error.height || error.weight? true: false}>Submit</button>
            </form>
            </>
        </div>
    );
}

export default Create;