import style from './create.modules.css';
import Form from '../../components/form/form';
import Nav from '../../components/nav/nav';


function Create (){
    return (
        <div className={style.supra}>

            <div className={style.nav}>
                <Nav/>
            </div>
            <div>
                <Form/>
            </div>
        </div>
        
    );
}

export default Create;