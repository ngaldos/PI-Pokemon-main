import FormSingIn from '../../components/form/singIn/formSingIn'
import Nav from '../../components/nav/nav';
import { useSelector } from 'react-redux';


const singIn = ()=>{
    //const user = useSelector((state)=>state.user);
    return (
        <div>
            <Nav/>
            <>
                <FormSingIn/>
            </>
        </div>
    );
}

export default singIn;