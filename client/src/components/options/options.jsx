import style from './options.module.css';

export default function Options ({filterOwn, filterCloud, orderByName, orderByNameBack, orderByAttack, orderByAttackBack, filterBoth}){

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
                <button onClick={filterCloud}>Cloud pokemons</button>
                <button onClick={filterOwn}>Own pokemons</button>
            </div>
        </div>
    );
}