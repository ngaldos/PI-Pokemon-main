import style from './options.module.css';


export default function Options ({filterOwn, filterCloud, orderByName, orderByNameBack, orderByAttack, orderByAttackBack}){

    return (
        <div className={style.higher}>
            <button onClick={orderByName}>Abc..</button>
            <button onClick={orderByNameBack}>Zyx..</button>
            <button onClick={orderByAttack}>Attack upwards</button>
            <button onClick={orderByAttackBack}>Attack downwards</button>
            <button onClick={filterCloud}>Cloud pokemons</button>
            <button onClick={filterOwn}>Own pokemons</button>
        </div>
    );
}