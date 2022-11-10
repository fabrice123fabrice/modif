import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation';
import '../CSS/Partenaires.css';
import Padeve from '../image/Padeve.jpg';
import FFF from '../image/3F.jpg';
import GrandLyon from '../image/grandLyon.png';

const Partenaires = () => {
    //create
  const navigate = useNavigate();
  const [userInfopartenaire, setuserInfopartenaire] = useState({
    nom: '',
    objectif: '',
    adresse: '',
    contact: '',
    logo: '',
  });
  const onChangeValue = (e) => {
    setuserInfopartenaire({
      ...userInfopartenaire,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit = async(event) => {
    try {
    event.preventDefault();
    event.persist();
    axios.post('http://apiphp/back/ajoutpartenaire.php', {
      nom: userInfopartenaire.nom,
      objectif: userInfopartenaire.objectif,
      adresse: userInfopartenaire.adresse,
      contact: userInfopartenaire.contact,
      logo: userInfopartenaire.logo,
    })
    .then(res =>{
      console.log(res.data);
      navigate('/')
      return;
    })
  } catch(error){throw error}
    
  };
  //Liste
  useEffect(() => {
     axios
    .get("http://apiphp/back/listePartenaire.php")
    .then((resultat)=> resultat.data.phpresult)
    .then((phpresult)=>setUser(phpresult));
    console.log(user);
}, []);
  const [user, setUser] = useState([]);


    return (
        <div>
            <>
    <Navigation/>
    <h2>Nos partenaires</h2>
    <div className='information'>
    <Form action="" onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nom Partenaire</Form.Label>
        <Form.Control type="text" name='nom' onChange={onChangeValue} placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label>Objectif Partenaire</Form.Label>
        <Form.Control as="textarea" rows="3" name='objectif' onChange={onChangeValue}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Adress Partenaire</Form.Label>
        <Form.Control type="text" name='adresse' onChange={onChangeValue} placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Contact Partenaire</Form.Label>
        <Form.Control type="text" name='contact' onChange={onChangeValue} placeholder="" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Logo Partenaire</Form.Label>
        <Form.Control type="file" name='logo' onChange={onChangeValue} />
      </Form.Group>
      <Button variant="primary" type="submit"> 
        AJOUTER
        </Button>
    </Form>
    <table className='table table-bordered table-striped'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>

      {user.map((res, id)=>(
        <tr key={id}>
          <td>{res.id}</td>
          <td>{res.nom}</td>
          <td>{res.objectif}</td>
          <td>{res.adresse}</td>
          <td>{res.contact}</td>
          <td>{res.logo}</td>
      </tr>
      ))}
      <td>numero</td>
      </tbody>
    </table>
    
    </div>
    <div>
    
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
        </div>
    );
};

export default Partenaires;