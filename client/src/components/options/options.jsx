import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../redux/actions';
import style from './options.module.css';


export default function Options ({filterOwn, filterCloud, orderByName, orderByNameBack, orderByAttack, orderByAttackBack, filterBoth, filterByType}){
    
    const dispatch = useDispatch();
    

    const pokeTypes = useSelector((state)=> state.types);
    return (
        <div className={style.higher}>
            <div className={style.order}>
                <button onClick={orderByName}>Abc..</button>
                <button onClick={orderByNameBack}>Zyx..</button>
                <button onClick={orderByAttack}>Attack upwards</button>
                <button onClick={orderByAttackBack}>Attack downwards</button>
            </div>
            <div className={style.filter}>
                <button onClick={filterBoth}>All</button>
                <select onChange={filterByType}>
                    <option selected disabled>Select Types</option>
                    <option value="all">All</option>
                    {pokeTypes?.map((type) => {
                    return (
                    <option key={type.name} value={type.name}>
                    {type.name}
                     </option>
              );
            })}
        </select>
                <button onClick={filterCloud}>Cloud pokemons</button>
                <button onClick={filterOwn}>Own pokemons</button>
            </div>
        </div>
    );
}