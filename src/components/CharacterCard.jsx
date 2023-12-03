import Card from 'react-bootstrap/Card';

export default function CharacterCard({Name = "Name"}) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/690.jpeg" />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
        <div>
            <p>Location</p>
        </div>
        <div>
            <p>First</p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}