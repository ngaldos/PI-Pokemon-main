import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Form from '../../components/form/form';
import Cards from '../../components/cards/cards';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getPokemons} from '../../redux/actions';




const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokemons())
    }, [dispatch]);
    const allPokemons = useSelector((state)=>state.pokemons);
    
    return(
        <div className={style.home}>
            <Nav/>
                <h1>Pokemon Henry</h1>
                <div className={style.container}>
                    <Cards allPokemons={allPokemons}/>
                </div>
        </div>
    );
}

export default Home;