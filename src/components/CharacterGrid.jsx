import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from "./CharacterCard"
import { useSelector, useDispatch } from 'react-redux'


export default function CharacterGrid(){

    const pageValue = useSelector(state => state.page.value)
    const characterData = useSelector(state => state.rnm.characters)

    const firstRow = characterData.results.slice(1 * pageValue -1 , 1 * pageValue + 2);
    const secondRow = characterData.results.slice(1 * pageValue + 2, 1 * pageValue + 5);

    return (
        <Container>
            <Row>
                {firstRow.map(character => {
                    return <Col><CharacterCard name={character.name} image={character.image} location={character.location.name} status={character.status} species={character.species} id={character.id}></CharacterCard></Col>
                })}
            </Row>
            <Row>
                {secondRow.map(character => {
                    return <Col><CharacterCard name={character.name} image={character.image} location={character.location.name} status={character.status} species={character.species} id={character.id}></CharacterCard></Col>
                })}
            </Row>
        </Container>
    );
}