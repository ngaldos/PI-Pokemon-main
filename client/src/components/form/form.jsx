import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, getPokemons, getTypes} from "../../redux/actions";
import { useNavigate } from "react-router-dom";


import axios from "axios";

import './form.modules.css';

const Form = ()=>{

    const types = useSelector((state)=>state.types);
    const newPokeTypes = [];

    const navigate = useNavigate();

    const dispatch= useDispatch();
    const [input, setInput] = useState({
        name: '',
        img: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });
    const [error, setError] = useState({
        name: '',
        img: '',
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    });

    const validate = (input, error)=>{
        const errors= {...error};


        if (!input.name) errors.name= '*This input is mandatory.';
        else if (!/^[a-zA-Z]+$/.test(input.name)){
            errors.name= 'This input must have only letters';
        }else errors.name= '';


        if (!input.img) errors.img = '*This input is mandatory.'
        else if (!/.(gif|jpeg|jpg|png)$/i.test(input.img)){
                errors.img= 'Invalid URL';
        }else errors.img= '';


        if (!input.health) errors.health = '*This input is mandatory.'
        else if (!/^\d+$/.test(input.health)){
            errors.health= 'This input must have positive numbers only';
        }else errors.health= '';


        if (!input.attack) errors.attack = '*This input is mandatory.'
        else if (!/^\d+$/.test(input.attack)){
            errors.attack= 'This input must have positive numbers only';
        }else errors.attack= '';


        if (!input.defense) errors.defense = '*This input is mandatory.'
        else if (!/^\d+$/.test(input.defense)){
            errors.defense= 'This input must have positive numbers only';
        }else errors.defense= '';


        if (!input.speed) errors.speed= '';
        else if (!/^\d+$/.test(input.speed)){
            errors.speed= 'This input must have positive numbers only';
        }else errors.speed= '';


        if (!input.height) errors.height= '';
        else if (!/^\d+$/.test(input.height)){
            errors.height= 'This input must have positive numbers only';
        }else errors.height= '';


        if (!input.weight) errors.weight= '';
        else if (!/^\d+$/.test(input.weight)){
            errors.weight= 'This input must have positive numbers only';
        }else errors.weight= '';
        
        if(!input.types) errors.types= '*This input is mandatory.';
        else errors.types= '';

        return errors;
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        try{
            dispatch(addPokemon(input))
            dispatch(getPokemons());
            setInput({
                name: '',
                img: '',
                health: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                types: [],
            });
            navigate('/home');
        }catch (error) {
            console.log(error.status);
            alert(error.message);
        }
        return;
    }

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(validate({...input, [e.target.name]: e.target.value,}, error));
    }

    const handleChangeTypes = (e)=>{
        /*if (input.types.length > 0){

            input.types.forEach((e)=> aux.push(e));
        }else{
            aux.push(e.target.value);
        }*/
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        });
    }
    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch]);

        



    /* 
    ! RETURN *****
    */
    return (
        <>
            <form className='form--pokemon' onSubmit={submitHandler}>
                <div className="div--form">
                    <label htmlFor="name" className="label">Name: </label>
                    <input className="input" type="text" name='name' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.name}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="img" className="label">Image (URL):</label>
                    <input className="input" type="text" name='img' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.img}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="health" className="label">Health: </label>
                    <input className="input" type="number" name='health' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.health}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="attack" className="label">Attack: </label>
                    <input className="input" type="number" name='attack' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.attack}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="defense" className="label">Defense: </label>
                    <input className="input" type="number" name='defense' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.defense}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="speed" className="label">Speed: </label>
                    <input className="input" type="number" name='speed' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.speed}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="height" className="label">Height: </label>
                    <input className="input" type="number" name='height' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.height}</span>
                </div>
                <div className="div--form">
                    <label htmlFor="weight" className="label">Weight: </label>
                    <input className="input" type="number" name='weight' onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.weight}</span>
                </div>
                <select name='types' id="" onChange={handleChangeTypes} >
                    {types.map((e)=> <option  value={e.id}>{e.name}</option>
                    )}
                </select>
                {input.types.length > 0?  input.types.map((e)=> <p>{e}</p>) : 
                <div>No types selected</div>}
                <button  type="submit" className="btn--form" disabled={error.name || error.img || error.health || error.attack || error.defense || error.speed || error.height || error.weight || error.types ? true: false}>Submit</button>
            </form>
        </>
    );
}

export default Form;