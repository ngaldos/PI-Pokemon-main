import style from '../create/create.modules.css';
import Form from '../../components/form/form';
import Nav from '../../components/nav/nav';


function Create (){
    
    
    return (
        <div className={style.supra}>
            <Nav/>
            <div>
                <Form/>
            </div>
        </div>
    );
}

export default Create;