import {Link} from 'react-router-dom';
import style from './landing.module.css';
const Landing = ()=>{
    return(
        <div className={style.landing}>
            <button className={style.button}>
                <Link to= '/home'><h1>Enter</h1></Link>
            </button>
        </div>
    );
}

export default Landing;