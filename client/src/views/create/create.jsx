import './create.modules.css';
import Form from '../../components/form/pokemon/form';
import Nav from '../../components/nav/nav';


function Create (){
    return (
    <>
        <div className='nav'>
                <Nav/>
        </div>
        <div className='supra'>
            <Form/>
        </div>
        
    </>
    );
}

export default Create;