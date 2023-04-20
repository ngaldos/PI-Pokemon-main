import {Link} from 'react-router-dom';
import style from './nav.module.css';

export default function (props){
    return(
        <div className={style.links}>
            <Link to= '/'>
                <p>Landing</p>
            </Link>
            <Link to= '/home'>
                <p>Home</p>
            </Link>
            <Link to= '/about'>
                <p>About</p>
            </Link>
        </div>
    );
}
