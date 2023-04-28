import style from './about.module.css';
import Nav from '../../components/nav/nav';

const About = ()=>{
    return (
        <div className={style.higher}>
            <div className={style.nav}>
                <Nav/>
            </div>
            <div className={style.text}>
                <h3>Website made by Nicolas Galdos</h3>
                <p>This website was made by putting into practice everything I've learned from Soy Henry.</p>
                <h5>That includes tecnologies like React, Redux, Axios, HTML, CSS, ES6, Express and Insomnia. Preparing myself to become a FullStack developer.</h5>
            </div>
        </div>
    );
}

export default About;