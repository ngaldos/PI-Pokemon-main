import style from './home.module.css';
import Nav from '../../components/nav/nav';
import Card from '../../components/card/card';
import Cards from '../../components/cards/cards';
import SearchBar from '../../components/searchBar/searchBar';
import Options from '../../components/options/options';
import Pagination from '../../components/pagination/pagination';


import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPokemons, getByName, orderByNameD, orderByNameBackD, orderByAttackD, orderByAttackBackD,  getTypes,
    reset, filterCloudD, filterOwnD, filterBothD, filterByType} from '../../redux/actions';
import { all } from 'axios';
import Loader from '../../components/loader/loader.jsx';





const Home = ()=>{
    const dispatch = useDispatch();

    
    const originals = useSelector((state)=> state.originals);
    const allPokemons = useSelector((state)=>state.pokemons);
    const pokemonsCopy = useSelector((state)=>state.pokemonsCopy);
    const [searchString, setSearchString]= useState('');


    const [currentPage, setCurrentPage] = useState(1); //estado para la pagina actual
    const [forPage, setForPage] = useState(12); //estado para la cantidad de pokemons por pagina

    const max = pokemonsCopy.length / forPage; //cantidad de paginas
    const firstIndex = (currentPage - 1) * forPage; //indice del primer pokemon de la pagina
    const lastIndex = (currentPage - 1) * forPage + forPage; //indice del ultimo pokemon de la pagina


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

    // ******** Handlers 


    function handleType(e) { //funcion para filtrar por tipo
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
    }



    const handleChange = (e)=>{
        e.preventDefault();
        setSearchString(e.target.value);
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (searchString !== ''){
            setSearchString('');
            setCurrentPage(1);
            dispatch(getByName(searchString));
        }else handleReset();
    }

    const handleReset= ()=>{
        setCurrentPage(1);
        dispatch(reset(originals));
    }

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [dispatch]);

    return(
        <div className={allPokemons?.length > 0? style.home: style.loader}>
            {allPokemons.length > 0 ? 
            <div>
                <div >
                    <div className={style.navContainer}>
                        <Nav/>
                        <div className={style.search}>
                            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} 
                            searchString={searchString} setCurrentPage={setCurrentPage}/>
                        </div>
                        <div>
                            <button onClick={handleReset} >Reset</button>
                        </div>
                        <Options filterOwn={filterOwn} 
                                filterCloud={filterCloud} 
                                orderByName={orderByName} 
                                orderByNameBack={orderByNameBack}
                                orderByAttack={orderByAttack} 
                                orderByAttackBack={orderByAttackBack}
                                filterBoth={filterBoth}
                                filterByType={handleType}/>
                    </div>
                    
                    <div className={style.container}>
                    {pokemonsCopy?.slice(firstIndex,lastIndex).map(pokemon => {
                            return(
                                <Card key={pokemon.id} poke={pokemon}/>
                            )} 
                        )}
                    </div>
                    <Pagination page={currentPage} setPage={setCurrentPage} maximus={max}/>
                </div>
            </div> : <div className={style.loader}>
                <Loader/>
            </div>
            }
            
        </div>
    );
}

export default Home;