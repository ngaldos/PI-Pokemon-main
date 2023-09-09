import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

import { getUserReviews } from "../../redux/actions";

import Nav from '../../components/nav/nav';

const Reviews = ()=>{

    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user?.mail)  dispatch(getUserReviews(user?.mail));
        return;
    }, [dispatch]);



    return (
        <>
            <Nav/>
            {user?.mail ? <>
                {user?.reviews ? <>
                    {user.reviews.map((e)=>{
                        return (
                            <>
                                <h4>{e.id}</h4>
                                <p>{e.score}</p>
                            </>
                        );
                    })}
                </> : <>
                    <h2>You don't have any review yet.</h2>
                </>}
            </> : <>
                <h1>Please sign in or sign up.</h1>
            </>}
        </>
    );
}

export default Reviews;