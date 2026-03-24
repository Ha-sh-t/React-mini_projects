
import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import { movies } from "./data/moviesData.js";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
      showCount: false
    }
  }


  addStar = (movie) => {
    const { movies } = this.state;
    const mov_idx = movies.indexOf(movie);
    if (movies[mov_idx].star < 5) {
      movies[mov_idx].star += 0.5
      this.setState({ movies });
    }
  }
  minusStar = (movie) => {
    const { movies } = this.state;
    const mov_idx = movies.indexOf(movie);
    if (movies[mov_idx].star > 0) {
      movies[mov_idx].star -= 0.5
      this.setState({ movies });
    }
  }
  handleFav = (movie) => {
    const { movies } = this.state;
    const mov_idx = movies.indexOf(movie);
    movies[mov_idx].fav = !movies[mov_idx].fav
    this.setState({ movies });

  }
  handleCart = (movie) => {
    let { movies ,cartCount , showCount} = this.state;
    const mov_idx = movies.indexOf(movie);
    movies[mov_idx].cartStatus = !movies[mov_idx].cartStatus
    if(movies[mov_idx].cartStatus){
      cartCount +=1;
    }else{
      cartCount -=1;
    }
    if(cartCount === 0){
      showCount = false;
    }else if(cartCount > 0 && !showCount) {
      showCount = true;
    }
    this.setState({ movies , cartCount , showCount });
  }


  
  render() {
    const {addStar , minusStar , handleCart , handleFav} = this;
    const methods = {addStar , minusStar , handleCart ,handleFav};
    return (
      <div className="App">
        <Navbar show={this.state.showCount} count={this.state.cartCount}/>
        <MovieList movies={this.state.movies} methods={methods} />
      </div>
    );
  }

}

export default App;
