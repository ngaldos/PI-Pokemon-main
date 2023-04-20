import {NavLink} from 'react-router-dom';

const Landing = ()=>{
    return(
        <div className='landing'>
            <NavLink to={'/home'}/>
        </div>
    );
}

export default Landing;