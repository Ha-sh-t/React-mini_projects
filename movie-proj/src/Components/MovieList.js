import React from "react";
import MovieCard from "./MovieCard";
class MovieList extends React.Component {
    

    render() {
        const {movies , methods} = this.props;

        return (
            <>
                {movies.map(
                    (movie)=>{
                    return (<MovieCard 
                        movie={movie} 
                        methods={methods} />)}
                    )
                }
            </>
        )
    }

}

export default MovieList;