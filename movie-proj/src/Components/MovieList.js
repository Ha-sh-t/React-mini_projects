
import MovieCard from "./MovieCard";
function MovieList(props){
    
        const {movies , methods} = props;

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

export default MovieList;