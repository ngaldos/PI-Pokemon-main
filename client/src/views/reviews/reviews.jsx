import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getUserReviews, deleteReview } from "../../redux/actions";

import ReviewCard from "../../components/reviewCard/reviewCard";
import Nav from '../../components/nav/nav';

const Reviews = ()=>{

    const navigate = useNavigate();

    const user = useSelector((state)=> state.user);

    
    const dispatch = useDispatch();

    useEffect(()=>{
        if(user?.mail)  dispatch(getUserReviews(user?.mail));
        return;
    }, [dispatch]);

    const handleDelete = (e)=>{
        e.preventDefault();
        dispatch(deleteReview(e.target.name));
        alert(`Review with ID : ${e.target.name} deleted successfully.`);
        dispatch(getUserReviews(user?.mail));
        navigate(`/reviews`);
    }

    let i= 0;

    return (
        <>
            <Nav/>
            {user?.mail ? <>
                {user?.reviews ? <>
                    {user.reviews.map((e)=>{
                        return (
                            <>
                                <h3>{++i}</h3>
                                <button type="submit" name={e?.id} onClick={handleDelete} >Delete review</button>
                                <ReviewCard review={e}/>
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