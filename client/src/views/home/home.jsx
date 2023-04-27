import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Cards from '../../components/cards/cards';
import SearchBar from '../../components/searchBar/searchBar';
import Options from '../../components/options/options';


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPokemons, getByName, orderByNameD, orderByNameBackD, orderByAttackD, orderByAttackBackD, reset, filterCloudD, filterOwnD, filterBothD} from '../../redux/actions';
import { all } from 'axios';
import Loader from '../../components/loader/loader.jsx';





const Home = ()=>{
    const dispatch = useDispatch();

    //const [isLoaded, setIsLoaded] = useState(false) 
    const originals = useSelector((state)=> state.originals);
    const allPokemons = useSelector((state)=>state.pokemons);
    const pokemonsCopy = useSelector((state)=>state.pokemonsCopy);
    const [searchString, setSearchString]= useState('');

    //! Ordenamientos y filtros
    const orderByName = (e)=>{
        e.preventDefault();
        dispatch(orderByNameD(originals));
    }
    const orderByNameBack = (e)=>{
        e.preventDefault();
        dispatch(orderByNameBackD(originals))
    }
    const orderByAttackBack = (e)=>{
        e.preventDefault();
        dispatch(orderByAttackBackD(originals));
    }
    const orderByAttack = (e)=>{
        e.preventDefault();
        dispatch(orderByAttackD(originals));
    }
    const filterOwn = (e)=>{
        e.preventDefault();
        dispatch(filterOwnD(allPokemons));
    }
    const filterCloud = (e)=>{
        e.preventDefault();
        dispatch(filterCloudD(allPokemons));
    }
    const filterBoth = (e)=>{
        e.preventDefault();
        dispatch(filterBothD(allPokemons));
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
            dispatch(getByName(searchString));
        }else handleReset();
    }

    const handleReset= ()=>{
        dispatch(reset(originals));
    }

    useEffect(()=>{
        dispatch(getPokemons())
    }, [dispatch]);

    return(
        <div className={allPokemons?.length > 0? style.home: style.loader}>
            {allPokemons.length > 0 ? 
            <div>
                <div >
                    <div className={style.navContainer}>
                        <Nav/>
                        <div className={style.search}>
                            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString}/>
                        </div>
                        <div>
                            <button onClick={handleReset}>Reset</button>
                        </div>
                        <Options filterOwn={filterOwn} 
                                filterCloud={filterCloud} 
                                orderByName={orderByName} 
                                orderByNameBack={orderByNameBack}
                                orderByAttack={orderByAttack} 
                                orderByAttackBack={orderByAttackBack}
                                filterBoth={filterBoth}/>
                    </div>
                    
                    <div className={style.container}>
                        <Cards allPokemons={pokemonsCopy}/>
                    </div>
                </div>
                </div> : <div className={style.loader}>
                    <Loader/>
                </div>
            }
            
        </div>
    );
}

export default Home;