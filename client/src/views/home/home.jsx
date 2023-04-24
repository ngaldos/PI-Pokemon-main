import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Form from '../../components/form/form';
import Cards from '../../components/cards/cards';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPokemons, getByName} from '../../redux/actions';



const Home = ()=>{
    const dispatch = useDispatch();
    
    const allPokemons = useSelector((state)=>state.pokemons);
    const pokemonsCopy = useSelector((state)=>state.pokemonsCopy);
    const [searchString, setSearchString]= useState('');
    
    
    const handleChange = (e)=>{
        e.preventDefault();
        setSearchString(e.target.value.toLowerCase());
    }

    /*const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getByName(searchString));
    }*/
    const [filtered, setFiltered] = useState(pokemonsCopy);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const filtered = allPokemons.filter((pokemon)=>(pokemon.name === searchString.toLowerCase()));
        setFiltered(filtered);
    }

    useEffect(()=>{
        dispatch(getPokemons())
    }, [dispatch]);

    return(
        <div className={style.home}>
            <Nav handleChange={handleChange} handleSubmit={handleSubmit}/>
                <div className={style.container}>
                    <Cards allPokemons={filtered}/>
                </div>
        </div>
    );
}

export default Home;