import {Link} from 'react-router-dom';

const ReviewCard = ({review})=>{

    return (
        <>
            <div>
                <h3>Pokemon: {review?.pokemon?.name}.</h3>
                <h3>Score: {review?.score}.</h3>
                <Link to={`../pokemons/${review?.pokemon?.id}`}>
                    <img src={review?.pokemon?.img} alt="Poke Img." />
                </Link>
                <hr />
            </div>
        </>
    );
}

export default ReviewCard;