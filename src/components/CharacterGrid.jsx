import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from "./CharacterCard"


export default function CharacterGrid(){
    return (
        <Container>
            <Row>
                <Col><CharacterCard></CharacterCard></Col>
                <Col><CharacterCard></CharacterCard></Col>
                <Col><CharacterCard></CharacterCard></Col>
            </Row>
            <Row>
                <Col><CharacterCard></CharacterCard></Col>
                <Col><CharacterCard></CharacterCard></Col>
                <Col><CharacterCard></CharacterCard></Col>
            </Row>
        </Container>
    );
}