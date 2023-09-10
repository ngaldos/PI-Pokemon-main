const ReviewCard = ({review})=>{

    return (
        <>
            <div>
                <h3>Pokemon: {review?.pokemon?.name}.</h3>
                <h3>Score: {review?.score}.</h3>
                <img src={review?.pokemon?.img} alt="Poke Img." />
                <hr />
            </div>
        </>
    );
}

export default ReviewCard;