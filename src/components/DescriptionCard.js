import React from 'react';
import {Card }from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function DescriptionCard(props) {
  let {movie}=props.location.state
  console.log(props)
    return (
        <div className="cardStyle">
  <Card style={{ width:'1200px' ,height:'600px', backgroundColor:'#FFBEAC'}} >
  <Card.Img variant="top" src={props.location.state.Poster} />
  <Card.Body>
    <Card.Title><h3>{movie.Title}</h3></Card.Title>
    <Card.Text>{movie.Description}
    </Card.Text>
  <div>
  <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div><Link to='/'>Go Back </Link></div>
  </Card.Body>
</Card>
        </div>
    )
}

export default DescriptionCard
