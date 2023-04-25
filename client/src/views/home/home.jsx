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
    const [filtered, setFiltered] = useState(pokemonsCopy);

    //! Ordenamientos y filtros
    const orderByName = (e)=>{
        e.preventDefault();
        const aux= filtered?.slice().sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
            })
        setFiltered(aux);
    }
    const orderByNameBack = (e)=>{
        e.preventDefault();
        const aux= filtered?.slice().sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
            })
        setFiltered(aux);
    }
    const orderByAttackBack = (e)=>{
        e.preventDefault();
        const aux= filtered?.slice().sort((a, b) => {
            if (a.attack < b.attack) return 1;
            if (a.attack > b.attack) return -1;
            return 0;
            })
        setFiltered(aux);
    }
    const orderByAttack = (e)=>{
        e.preventDefault();
        const aux= filtered?.slice().sort((a, b) => {
            if (a.attack > b.attack) return 1;
            if (a.attack < b.attack) return -1;
            return 0;
            })
        setFiltered(aux);
    }
    const filterOwn = (e)=>{
        e.preventDefault();
        const aux = [];
        pokemonsCopy?.forEach((pok)=>{
            if (isNaN(pok.id)) aux.push(pok);
        });
        setFiltered(aux);
    }
    const filterCloud = (e)=>{
        e.preventDefault();
        const aux = [];
        pokemonsCopy?.forEach((pok)=>{
            if (!isNaN(pok.id)) aux.push(pok);
        });
        setFiltered(aux);
    }


    const handleChange = (e)=>{
        e.preventDefault();
        setSearchString(e.target.value.toLowerCase());
    }

    /*const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getByName(searchString));
    }*/

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (searchString !== ''){
            e.target.value= '';
            const filtered = allPokemons.filter((pokemon)=>(pokemon.name === searchString.toLowerCase()));
            setFiltered(filtered);
        }else setFiltered(allPokemons);
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
            <Nav />
            <Options filterOwn={filterOwn} filterCloud={filterCloud} orderByName={orderByName} orderByNameBack={orderByNameBack}
                orderByAttack={orderByAttack} orderByAttackBack={orderByAttackBack}/>
                <div className={style.container}>
                    <Cards allPokemons={filtered}/>
                </div>
        </div>
    );
}

export default Home;