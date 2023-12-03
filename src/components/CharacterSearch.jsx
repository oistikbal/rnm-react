import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function CharacterSearch()
{
    return (      
        <FloatingLabel
            controlId="floatingInput"
            label="Search Character"
            className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      );
}