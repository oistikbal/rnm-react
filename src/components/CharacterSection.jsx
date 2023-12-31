import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterGrid from "./CharacterGrid";
import CharacterPagination from './CharacterPagination';
import CharacterSearch from './CharacterSearch';
import { useSelector, useDispatch } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';


export default function CharacterSection(){

    const completed = useSelector(state => state.rnm.completed)
    
    if(!completed){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

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