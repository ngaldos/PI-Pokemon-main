import {Link} from 'react-router-dom';
import style from './nav.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { singOut } from '../../redux/actions';

export default function (){

    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const handleSingOut = (e)=>{
        e.preventDefault();
        dispatch(singOut());
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
                {!!user?.mail ? <></> : <>
                    <Link to= '/singUp'>
                        <p>Sing Up</p>
                    </Link>
                    <Link to= '/singIn'>
                        <p>Sing In</p>
                    </Link>
                </>}
            <div>
                {!!user?.mail ? <>
                    <h5>{user?.name[0].toUpperCase()}. {user?.lastName}</h5>
                    <h5>{user?.mail}</h5>
                    <div className='div--btn'>
                        <button onClick={handleSingOut}>Sing out</button>
                    </div>
                </> : <> </>}
            </div>
            </div>
        </>
    );
}
