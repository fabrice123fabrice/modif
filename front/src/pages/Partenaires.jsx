import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation';
import '../CSS/Partenaires.css';
import Padeve from '../image/Padeve.jpg';
import FFF from '../image/3F.jpg';
import GrandLyon from '../image/grandLyon.png';
function GroupExample() {
  return (
    <>
    <Navigation/>
    <h2>Nos partenaires</h2>
    <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nom Partenaire</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Objectif Partenaire</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Adress Partenaire</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Contact Partenaire</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Logo Partenaire</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        AJOUTER
      </Button>
    </Form>
    </div>

    <CardGroup className='partenaires g-3'>
      <Card className='card'>
        <Card.Img variant="top" src={Padeve}/>
        <Card.Body>
          <Card.Title>PADEV</Card.Title>
          <Card.Text>
            Améliorer les conditions de vie des populations de centre urbains. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Voir plus d'informations</Button>
        </Card.Footer>
      </Card> 
      <Card className='card'>
        <Card.Img variant="top" src={FFF}/>
        <Card.Body>
          <Card.Title>3F</Card.Title>
          <Card.Text>
            Mis en place d'une filière d'assainissement intégrée par la ville de Fianarantsoa.
            Améliorer les conditions sanitaires de la population de la ville de Fianarantsoa
            (Création de bloc sanitaire et d'une filières de géstion de bloc de vidange).  
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Voir plus d'information</Button>
        </Card.Footer>
      </Card>
      <Card className='card'>
        <Card.Img variant="top" src={GrandLyon}/>
        <Card.Body>
          <Card.Title>GrandLyon</Card.Title>
          <Card.Text>
            Dépuis 2022, engagé des actions de coopération pour facilité l'accès à l'eau potable
            et à l'assainissement aux population.   
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Voir plus d'information</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  
  );
}

export default GroupExample;