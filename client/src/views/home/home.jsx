import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Cards from '../../components/cards/cards';
import SearchBar from '../../components/searchBar/searchBar';
import Options from '../../components/options/options';

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
        e.target.value= '';
        const filtered = allPokemons.filter((pokemon)=>(pokemon.name === searchString.toLowerCase()));
        setFiltered(filtered);
    }
    const handleReset= ()=>{
        console.log('ACA RESETEOO');
        setFiltered(pokemonsCopy);
    }
    useEffect(()=>{
        dispatch(getPokemons())
    }, [dispatch]);

    return(
        <div className={style.home}>
            <div className={style.search}>
                <button onClick={handleReset}>Reset</button>
                <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <Nav handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Options />
                <div className={style.container}>
                    <Cards allPokemons={filtered}/>
                </div>
        </div>
    );
}

export default Home;