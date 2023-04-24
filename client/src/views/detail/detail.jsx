import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetail } from '../../redux/actions';

import style from './detail.module.css';
import Nav from '../../components/nav/nav';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetail } from '../../redux/actions';

const Detail = ()=>{
    const dispatch= useDispatch();

    const {id} = useParams();
    //const {name, img, health, attack, defense, speed, height, weight}= data;
    const detail = useSelector((state)=>state.detail);
    useEffect(()=>{
        dispatch(getDetail(id));

        return ()=>{
            dispatch(cleanDetail());
        };
    }, [dispatch]);



    return(
        <div >
            <Nav/>
            <div className={style.higher}>
                <div className={style.text}>
                    <img src={detail?.img} alt='IMG' className={style.img}/>
                    <h2>ID: {detail?.id}</h2>
                    <h2>Name: {detail?.name}</h2>
                    <h3>Health: {detail?.health}</h3>
                    <h3>Attack: {detail?.attack}</h3>
                    <h3>Defense: {detail?.defense}</h3>
                    <h3>Speed: {detail?.speed}</h3>
                    <h3>Height: {detail?.height}</h3>
                    <h3>weight: {detail?.weight}</h3>
                </div>
            </div>
        </div>
    );
}

export default Detail;

