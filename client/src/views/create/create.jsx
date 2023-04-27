import style from '../create/create.modules.css';
import Form from '../../components/form/form';
import Nav from '../../components/nav/nav';


function Create (){
    
    
    return (
        <div >
            <div className={style.supra}>
                <div className={style.nav}>
                    <Nav/>
                </div>
                <div>
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default Create;