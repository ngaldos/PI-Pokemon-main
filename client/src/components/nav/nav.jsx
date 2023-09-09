import {Link} from 'react-router-dom';
import style from './nav.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { singOut } from '../../redux/actions';
import { useState } from 'react';

export default function (){

    const [open, setOpen] = useState(false);
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const handleSingOut = (e)=>{
        e.preventDefault();
        dispatch(singOut());
    }
    const handleClick = (e)=>{
        e.preventDefault();
        if (open)   
            setOpen(false);
        else 
            setOpen(true);
    }

    return(
        <>
            <div className={style.links}>
                <Link to= '/'>
                    <p>Landing</p>
                </Link>
                <Link to= '/home'>
                    <p>Home</p>
                </Link>
                <Link to= '/create'>
                    <p>Create</p>
                </Link>
                <Link to= '/about'>
                    <p>About</p>
                </Link>
                {!!user?.mail ? <> </> : <>
                    <Link to= '/singUp'>
                        <p>Sing Up</p>
                    </Link>
                    <Link to= '/singIn'>
                        <p>Sing In</p>
                    </Link>
                </>}
                <div>
                    {!!user?.mail ? <>
                        <div>
                            <button onClick={handleClick}>{user?.name[0].toUpperCase()}. {user?.lastName}</button>
                        </div>
                    </> : <> </>}
                </div>
            </div>
            {(user?.mail && open) && <> 
                <h3>{user?.mail}</h3>
                    <Link to='/myProfile'><p>My profile</p></Link>
                    <Link to='/reviews'><p>Reviews</p></Link>
                <div className='div--btn'>
                    <button onClick={handleSingOut}>Sing out</button>
                </div>
            </>}
        </>
    );
}
