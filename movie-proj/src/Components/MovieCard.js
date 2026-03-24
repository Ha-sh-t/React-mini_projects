

function MovieCard (props) {



    //jsx for card
        const { posterUrl, title, description, price, rating, star, fav, cartStatus } = props.movie;
        const { addStar, minusStar, handleCart, handleFav } = props.methods;
        return (
            <>
                <div className="card">
                    <div className="left-part">
                        <img alt="poster" src={posterUrl} className="poster" />
                    </div>
                    <div className="right-part">
                        <div className="title"><h3>{title}</h3></div>
                        <div className="description">{description}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="ratings">Ratings:{rating} </div>
                            <div className="star">

                                <img alt="minus"
                                    className="minus-btn"
                                    onClick={() => { minusStar(props.movie) }}
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />

                                <img alt="star"
                                    className="star-icon"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img alt="plus"
                                    className="plus-btn"
                                    onClick={() => { addStar(props.movie) }}
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />

                                <span>{star}</span>

                            </div>
                            <div className="btn">
                                <button
                                    className={fav ? "un-fav-btn" : "fav-btn"}
                                    onClick={() => { handleFav(props.movie) }}>
                                    {fav ? "Un-Favorite" : "Favorite"}
                                </button>
                                <button
                                    className={cartStatus ? "remove-btn" : "add-to-cart-btn"}
                                    onClick={() => {
                                        handleCart(props.movie)
                                    }}>
                                    {cartStatus ? "Remove From Cart" : "Add To Cart"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>



            </>
        )
}

export default MovieCard;