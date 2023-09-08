import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {singIn} from '../../../redux/actions';

const FormSingIn = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [input, setInput] = useState({
        mail: '',
        password: '',
    });

    const [error, setError] = useState({
        mail: '',
        password: '',
    });

    const handleChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(validate({
            ...input, [e.target.name]: e.target.value}, error));
    }

    const validate = (value, error)=>{
        const errors = {...error};
        
        if (!value.mail) errors.mail = `*This input is mandatory.`;
        else errors.mail= '';

        if (!value.password) errors.password = `*This input is mandatory.`;
        else errors.password= '';

        return errors;
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            //dispatch(singIn(input)).catch((error)=> setAuxError(error));
            dispatch(singIn({...input}));
            setInput({
                mail: '',
                password: '',
            });
            //navigate('/home');
            //alert(`Logged in successfully.`);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div>    
                <form className="form--singIn" onSubmit={submitHandler}>
                    <div className="div--form">
                        <label htmlFor='mail' className="label">E-mail: </label>
                        <input type="text" className="input" name="mail" onChange={handleChange} value={input.value} />
                    </div>
                    <div className="div--form">
                        <label htmlFor='password' className="label">Password: </label>
                        <input type="text" className="input" name="password" onChange={handleChange} value={input.value} />
                    </div>
                    <>
                        <button type="submit" className="btn--form">Log in</button>
                    </>
                </form>
            </div>
        </>
    );
}

export default FormSingIn;