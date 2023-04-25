import {Link} from 'react-router-dom';
import style from './nav.module.css';
import Options from '../options/options';
import searchBar from '../searchBar/searchBar';
import SearchBar from '../searchBar/searchBar';

export default function (){
    return(
        <div>
            
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
            </div>
        </div>
    );
}
