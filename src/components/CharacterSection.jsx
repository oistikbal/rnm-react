import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterGrid from "./CharacterGrid";
import CharacterPagination from './CharacterPagination';
import CharacterSearch from './CharacterSearch';


export default function CharacterSection(){
    return (
        <Container>
            <Col>
                <Row>
                    <CharacterSearch></CharacterSearch>
                </Row>
                <Row>
                    <CharacterGrid></CharacterGrid>
                </Row>
                <Row>
                    <CharacterPagination></CharacterPagination>
                </Row>
            </Col>
        </Container>
    );
}