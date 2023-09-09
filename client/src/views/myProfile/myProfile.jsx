import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Nav from '../../components/nav/nav';

const MyProfile = ()=>{
    const user = useSelector((state)=> state.user);

    return (
        <>
            <Nav/>
            <div className="div--info">
                {!!user?.mail ? <>
                    <h2>Name: {user?.name}</h2>
                    <h2>Last name: {user?.lastName}</h2>
                    <h2>E-Mail: {user?.mail}</h2>
                </> : <>
                    <h1>Please, sign in with a user or sign up </h1>
                </>}
            </div>
        </>
    );
}

export default MyProfile;