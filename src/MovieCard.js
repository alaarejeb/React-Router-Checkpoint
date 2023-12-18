import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard  = ({title, description, posterURL, rating}) => {
  return (
    <div >
    <Link to={`/Movies/${title}`}>
    <Card  style={{width: '18rem', margin:'10px'}}>
    <Card.Img style={{ height: '420px', objectFit: 'cover' }} src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          description: {description} <br />
        </Card.Text>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
        />
      </Card.Body>
    </Card>
    </Link>

    </div>
  )
}

export default MovieCard  