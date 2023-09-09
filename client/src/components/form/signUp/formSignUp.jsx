import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {createUser, signIn} from '../../../redux/actions';

import './formSignUp.modules.css';

const FormSignUp = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: '',
        lastName: '',
        mail: '',
        password: ''
    });

    const [error, setError] = useState({
        name: '',
        lastName: '',
        mail: '',
        password: ''
    });

    const handleChange = (event)=>{
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
        setError(validate({
            ...input, [event.target.name]: event.target.value}, error));
    }

    const validate = (input, error)=>{
        const errors = {...error};
        const mailRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if (!input.name) errors.name= '*This input is mandatory.';
        else if (!/^[a-zA-Z]+$/.test(input.name)){
            errors.name= 'This input must contain letters only';
        }else errors.name= '';
    
        if (!input.lastName) errors.lastName= '*This input is mandatory.';
        else if (!/^[a-zA-Z]+$/.test(input.lastName)){
            errors.lastName= 'This input must contain letters only';
        }else errors.lastName= '';
        
        if (!input.mail) errors.mail= '*This input is mandatory.';
        else errors.mail= '';

        if (!input.password) errors.password= '*This input is mandatory.';
        else errors.password= '';

        return errors;
    }
    
    const submitHandler = async (event)=>{
        event.preventDefault();
        try {
            dispatch(createUser(input));
            dispatch(signIn({mail: input.mail, password: input.password}));
            setInput({
                name: '',
                lastName: '',
                mail: '',
                password: ''
            });
            alert(`User registered successfully`);

            navigate('/home');
        } catch (error) {
            alert(error.message);
        }
    }

    

    return (
        <>
            <form className="form--signUp" onSubmit={submitHandler}>
                <div className='div--form'>
                    <label htmlFor="name" className="label">Name: </label>
                    <input className="input" type="text" name="name" onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.name}</span>
                </div>

                <div className='div--form'>
                    <label htmlFor="lastName" className="label">Last name: </label>
                    <input className="input" type="text" name="lastName" onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.lastName}</span>
                </div>

                <div className='div--form'>
                    <label htmlFor="mail" className="label">Mail: </label>
                    <input className="input" type="text" name="mail" onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.mail}</span>
                </div>
                
                <div className='div--form'>
                    <label htmlFor="password" className="label">Password: </label>
                    <input className="input" type="text" name="password" onChange={handleChange} value={input.value}/>
                    <span className="span--form">{error.password}</span>
                </div>

                {!!error.name || !!error.lastName || !!error.mail || !!error.password ? <div>
                    <h3>Errors founded.</h3>
                </div> : 
                <>
                    <button  type="submit" className="btn--form" >Submit</button>
                </>}
            </form>
        </>
    );
}

export default FormSignUp;