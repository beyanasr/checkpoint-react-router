import React from 'react'
import MovieCard from './MovieCard'


function MovieList({movies}) {
	return (
		<div className='listOfMovies'>
		{movies.map(m=> <MovieCard movie={m}/>)  }        
		</div>
	)
}

export default MovieList
