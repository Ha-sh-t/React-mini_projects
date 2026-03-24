import React from "react";

class MovieCard extends React.Component {



    //jsx for card
    render() {
        const { posterUrl, title, description, price, rating, star, fav, cartStatus } = this.props.movie;
        const { addStar, minusStar, handleCart, handleFav, handleCartCount } = this.props.methods;
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
                                    onClick={() => { minusStar(this.props.movie) }}
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />

                                <img alt="star"
                                    className="star-icon"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img alt="plus"
                                    className="plus-btn"
                                    onClick={() => { addStar(this.props.movie) }}
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" />

                                <span>{star}</span>

                            </div>
                            <div className="btn">
                                <button
                                    className={fav ? "un-fav-btn" : "fav-btn"}
                                    onClick={() => { handleFav(this.props.movie) }}>
                                    {fav ? "Un-Favorite" : "Favorite"}
                                </button>
                                <button
                                    className={cartStatus ? "remove-btn" : "add-to-cart-btn"}
                                    onClick={() => {
                                        handleCart(this.props.movie);
                                        handleCartCount(cartStatus ? "remove" : "add");
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
}

export default MovieCard;