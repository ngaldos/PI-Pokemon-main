import {Link} from 'react-router-dom';
import style from './nav.module.css';
import Options from '../options/options';

export default function (props){
    return(
        <div>
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
                <Options/>
        </div>
    );
}
