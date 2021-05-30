import React from 'react';
import {Card,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function MovieCard({movie}) {
  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>{movie.Year}
    </Card.Text>
    <ReactStars
    value={movie.Rate}
    count={10}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
  <Link to={{ pathname: `/DescriptionCard/${movie.Title}`, state: {movie} }}>  <Button variant="primary">View Trailer</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard

