import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterGrid from "./CharacterGrid";
import CharacterPagination from './CharacterPagination';
import CharacterSearch from './CharacterSearch';


function GetJsons(){
    const episodesUrl = "https://rickandmortyapi.com/api/episode";
    const locationsUrl = "https://rickandmortyapi.com/api/location";
    const charactersUrl = "https://rickandmortyapi.com/api/character";


}

export default function CharacterSection(){
    return (
        <Container>
                <Row>
                    <Col>
                        <CharacterSearch></CharacterSearch>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CharacterGrid></CharacterGrid>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <   CharacterPagination></CharacterPagination>
                    </Col>
                </Row>
        </Container>
    );
}