import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Form from '../../components/form/form';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getPokemons} from '../../redux/actions';




const Home = ()=>{
    //const pokeInfo = await getPokemonById(5);
    //const pokeInfo = axios.get(`localhost:3001/pokemons/5`).then(data=>data.data)
    //console.log(pokeInfo);
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons);

    useEffect(()=>{
        dispatch(getPokemons());
    }, [dispatch]);
    return(
        <div className={style.home}>
            <Nav/>
                <div >
                    <h1>Pokemon Henry</h1>
                    <Cards allPokemons={allPokemons}/>
                </div>
        </div>
    );
}

export default Home;