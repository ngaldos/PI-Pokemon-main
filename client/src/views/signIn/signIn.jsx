import FormSignIn from '../../components/form/signIn/formSignIn'
import Nav from '../../components/nav/nav';
import { useSelector } from 'react-redux';


const singIn = ()=>{
    //const user = useSelector((state)=>state.user);
    return (
        <div>
            <Nav/>
            <>
                <FormSignIn/>
            </>
        </div>
    );
}

export default singIn;