import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addReview, getDetail } from '../../redux/actions';

import style from './detail.module.css';
import Nav from '../../components/nav/nav';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetail,  deletePokemon, getPokemons} from '../../redux/actions';

const Detail = ()=>{
    const dispatch= useDispatch();
    const navigate = useNavigate();

    const [score, setScore] = useState(1);
    const [error, setError] = useState('');

    const {id} = useParams();
    //const {name, img, health, attack, defense, speed, height, weight}= data;
    const detail = useSelector((state)=>state.detail);
    const user = useSelector((state)=>state.user);

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
    
    const handleReview = (e)=>{
        e.preventDefault();
        if (isNaN(id)){
            //navigate(`/`);
            // Aca hacer el form de la Review del Pokemon
        }
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            dispatch(addReview({
                mail: user?.mail,
                poke: detail?.id,
                score: score,
            }))
            .catch((error)=>{
                alert(error.message);
                return error;   
            });
            setScore(1);
            setError('');
            dispatch(getDetail(id));
            alert(`Review created successfully.`);
            dispatch(getDetail(id));
        } catch (error) {
            console.log(error);
            alert(error.message);
        }

    }

    const validate = (input)=>{
        let error = '';
        if (!input) 
            error= `This input is mandatory.`;
        else if (!(/^\d+$/).test(input)) 
            error = `This input must have positive and integer numbers only (from 1 to 10).`;
        
        return error;
    }
    const handleChange = (e)=>{
        e.preventDefault();
        setScore(e.target.value);
        setError(validate(e.target.value));
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
                    <h3 className={style.subtitle}>Score: {detail.prom}</h3>
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
                    <>  
                        {user?.mail && (isNaN(id)) ? 
                        <div>
                            <form className='form--review' onSubmit={submitHandler}>
                                <label htmlFor='score' className='label'>Score: </label>
                                <input className='input' type='number' name='score' onChange={handleChange}></input>
                                <span className='span==form'>{error}</span>
                                {error ? <>
                                    <h3>Errors founded.</h3>
                                </> : <>
                                    <button className='review--btn' type='submit'>Review Pokemon</button>
                                </>}
                            </form>
                        </div> : <>
                                    <h3 className={style.subtitle}>Review this community pokemon by logging.</h3>
                        </>}
                    </>
                </div>
            </div>
        </div>
    );
}
//
export default Detail;

