import style from './detail.module.css';
import Nav from '../components/nav/nav';

const Detail = (props)=>{
    const {id, name, img, health, attack, defense, speed, height, weight, type}= props;

    return(
        <div>
            <Nav/>
            <div className={style.higher}>
                <img src={img}/>
                <div className={style.text}>
                    <h2>ID: {id}</h2>
                    <h2>Name: {name}</h2>
                    <h3>Health: {health}</h3>
                    <h3>Attack: {attack}</h3>
                    <h3>Defense: {defense}</h3>
                    <h3>Speed: {speed}</h3>
                    <h3>Height: {height}</h3>
                    <h3>weight: {weight}</h3>
                    <h3>Types: {type}</h3>
                </div>
            </div>
        </div>
    );
}

export default Detail;

