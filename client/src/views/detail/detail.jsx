import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetail } from '../../redux/actions';

import style from './detail.module.css';
import Nav from '../../components/nav/nav';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetail,  deletePokemon, getPokemons} from '../../redux/actions';

const Detail = ()=>{
    const dispatch= useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();
    //const {name, img, health, attack, defense, speed, height, weight}= data;
    const detail = useSelector((state)=>state.detail);
    useEffect(()=>{
        dispatch(getDetail(id));

        return ()=>{
            dispatch(cleanDetail());
        };
    }, [dispatch]);

    const handleDelete = (e)=>{
        e.preventDefault();
        if (isNaN(id)){
            dispatch(deletePokemon(id)).catch((error)=> {alert(error.message); return error});
            dispatch(cleanDetail());
            dispatch(getPokemons());
            navigate(`/home`);
            alert(`Pokemon deleted successfully.`);
        }else   alert(`Invalid ID for deleting.`);
    }

    return(
        <div>
            <div className={style.nav}>
                <Nav/>
            </div>
            <div className={style.higher}>
                <div className={style.text}>
                    {isNaN(id) && <button className='X--btn' onClick={handleDelete}>X</button>}
                    <img src={detail?.img} alt='IMG' className={style.img}/>
                    <h2 className={style.subtitle}>ID: {detail?.id}</h2>
                    <h2 className={style.subtitle}>Name: {detail?.name}</h2>
                    <h3 className={style.subtitle}>Health: {detail?.health}</h3>
                    <h3 className={style.subtitle}>Attack: {detail?.attack}</h3>
                    <h3 className={style.subtitle}>Defense: {detail?.defense}</h3>
                    {detail.speed == 0 ? <></> : 
                    <h3 className={style.subtitle}>Speed: {detail?.speed}</h3>}
                    {detail.height == 0 ? <></> : 
                    <h3 className={style.subtitle}>Height: {detail?.height}</h3>}
                    {detail.weight == 0 ? <></> : 
                    <h3 className={style.subtitle}>Weight: {detail?.weight}</h3>}
                    <div className={style.types}>
                    <h3 className={style.subtitle}>Types: </h3>
                    {detail?.types?.map((e)=><p className={style.subtitle}>{e}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
//
export default Detail;

