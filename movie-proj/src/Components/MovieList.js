import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "The Ant Man",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 160,
                    rating: 7.8,
                    star: 0,
                    fav: false,
                    cartStatus: false
                },
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "Iron Man",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 200,
                    rating: 8.2,
                    star: 0,
                    fav: false,
                    cartStatus: false
                },
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "Thor",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 180,
                    rating: 7.5,
                    star: 0,
                    fav: false,
                    cartStatus: false
                },
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "Captain America",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 170,
                    rating: 8.0,
                    star: 0,
                    fav: false,
                    cartStatus: false
                },
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "Doctor Strange",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 190,
                    rating: 8.1,
                    star: 0,
                    fav: false,
                    cartStatus: false
                },
                {
                    posterUrl: "https://imgs.search.brave.com/Pc8p6D_8O0kzxUM49QzZwnHQyNSuETwlohTVsVi7wNI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE4MTA1/MTIuanBn",
                    title: "Black Panther",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus pariatur delectus!",
                    price: 210,
                    rating: 8.3,
                    star: 0,
                    fav: false,
                    cartStatus: false
                }
            ]
        }
    }


    addStar = (movie) => {
        const {movies} = this.state;
        const mov_idx = movies.indexOf(movie);
        if (movies[mov_idx].star < 5) {
            movies[mov_idx].star += 0.5
            this.setState({ movies});
        }
    }
    minusStar = (movie) => {
        const {movies} = this.state;
        const mov_idx = movies.indexOf(movie);
        if (movies[mov_idx].star > 0) {
            movies[mov_idx].star -= 0.5
            this.setState({ movies });
        }
    }
    handleFav = (movie) => {
        const {movies} = this.state;
        const mov_idx = movies.indexOf(movie);
        movies[mov_idx].fav = !movies[mov_idx].fav
        this.setState({ movies });

    }
    handleCart = (movie) => {
        const {movies} = this.state;
        const mov_idx = movies.indexOf(movie);
        movies[mov_idx].cartStatus = !movies[mov_idx].cartStatus
        this.setState({ movies});
    }

    render() {
        const {movies} = this.state;
        const {addStar , minusStar , handleCart , handleFav} = this;
        return (
            <>
                {movies.map(
                    (movie)=>{
                    return (<MovieCard 
                        movie={movie} 
                        methods={{addStar , minusStar , handleCart , handleFav}} />)}
                    )
                }
            </>
        )
    }

}

export default MovieList;