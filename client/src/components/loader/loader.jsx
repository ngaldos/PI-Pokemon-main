import img from '../../images/landing.jpg';
import style from './loader.modules.css';

const Loader = ()=>{
    return (
        <div className={style.img}>
            <img src='https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif' alt='Loader ....'/>
        </div>
    );
}

export default Loader;