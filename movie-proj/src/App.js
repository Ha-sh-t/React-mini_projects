
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
    const { movies } = this.state;
    const mov_idx = movies.indexOf(movie);
    movies[mov_idx].cartStatus = !movies[mov_idx].cartStatus
    this.setState({ movies });
  }

  handleCartCount = (status) => {

    if(status === "add"){
      this.setState({cartCount:Number(this.state.cartCount) + 1 ,showCount:true})
    }
    else if(status === "remove"){
      if(this.state.cartCount === 1){
        this.setState({cartCount:Number(this.state.cartCount) - 1 ,showCount:false})
      }else{
        this.setState({cartCount:Number(this.state.cartCount) - 1})
      }
    }


  }
  render() {
    const {addStar , minusStar , handleCart , handleCartCount , handleFav} = this;
    const methods = {addStar , minusStar , handleCart , handleCartCount,handleFav};
    console.log(typeof this.state.showCount)
    console.log(typeof this.state.cartCount)
    return (
      <div className="App">
        <Navbar show={this.state.showCount} count={this.state.cartCount}/>
        <MovieList movies={this.state.movies} methods={methods} />
      </div>
    );
  }

}

export default App;
