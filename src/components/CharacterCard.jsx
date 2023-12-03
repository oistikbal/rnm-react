import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CharacterCard({name = "Name", status = "Dead", location = "Unknown", image ="https://rickandmortyapi.com/api/character/avatar/1.jpeg", species = "Unkown"
}) {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <div>{status} - {species}</div>
        <div>
            <p>{location}</p>
        </div>
        <Button variant="primary">Favorite</Button>{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}