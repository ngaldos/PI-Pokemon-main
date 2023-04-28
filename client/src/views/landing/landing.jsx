import {Link} from 'react-router-dom';
import style from './landing.module.css';
const Landing = ()=>{

    return(
        <div className={style.landing}>
                <Link to= '/home' className={style.link}>Enter</Link>
        </div>
    );
}

export default Landing;