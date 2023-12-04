import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import {setFavorite} from '../store/FavoriteSlice'


export default function CharacterCard({name = "Name", status = "Dead", location = "Unknown", image ="https://rickandmortyapi.com/api/character/avatar/1.jpeg", species = "Unkown"
, id = 0}) {

  const dispatch = useDispatch()
  let favoriteStatus = useSelector(state => state.favorites[id])

  if(favoriteStatus == undefined)
    favoriteStatus = false

  // No idea why the value of favoriteStatus doesnt updated, it gets inserted in Map but doesnt update the value properly
  return (
    <Card className={favoriteStatus ? ("bg-danger bg-gradient text-white") : ("bg-dark bg-gradient text-white")} style={{ width: '12rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>{status} - {species}</div>
          <div>
              <p>{location}</p>
          </div>
        <Button variant="primary" onClick={() => dispatch(setFavorite({[id]: (!favoriteStatus)}))}>Favorite</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}