import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            posterUrl:"https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
            title:"The Ant man",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus! ",
            price:160,
            rating:7.8,
            star:0
        }
    }

    addStar = ()=>{
        if(this.state.star < 5){
            this.setState((prevState)=> ({star:prevState.star+0.5}));
        }
    }
    minusStar = ()=>{
        if(this.state.star > 0 ){
            this.setState((prevState)=> ({star:prevState.star-0.5}));
        }
    }
    markFavorite = ()=>{

    }
    addToCart = ()=>{

    }


    //jsx for card
    render(){
        const {posterUrl , title , description , price , rating , star} = this.state;
        return(
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
                            <img alt="minus" className="minus-btn" onClick={this.minusStar} src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />
                            <img alt="star" className="star-icon" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                            <img alt="plus" className="plus-btn" onClick={this.addStar} src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"/>
                            <span>{star}</span>
                            
                        </div>
                        <div className="btn">
                        <button className="fav-btn" onClick={this.markFavorite}>Favorite</button>
                        <button className="buy-btn" onClick={this.addToCart}>Buy</button>
                        </div>

                    </div>
                </div>
                </div>

            
            
            </>
        )
    }
}

export default MovieCard;