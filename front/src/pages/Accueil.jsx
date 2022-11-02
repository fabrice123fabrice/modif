import React from 'react';
import Navigation from '../Components/Navigation';
import Jumbotron  from '../Components/Jumbotron';
import '../CSS/accueil.css';
import carte from '../image/Capture.PNG';
import { Container,Row,Col } from 'react-bootstrap';
const Accueil = () => {
    return (
        <>       
         <Navigation/>
         <Jumbotron/>
        <Container>
        <Row>
            <Col xs={6}>
                <h3 className='mono'>Monographies</h3>
                <div className='ligne'></div>
                <p>La Commune Urbaine de Fianarantsoa (CUF) est située dans l’ex-province de Fianarantsoa. La délimitation de la commune urbaine est la même que celle du district de Fianarantsoa. Elle fait partie de la Région de Haute Matsiatra dont elle est le chef-lieu de région. Elle est subdivisée en 7 arrondissements, composés de 50 fokontany (FKT). Ses limites sont :</p>
                <p>➢ Au Nord : Commune Rurale Ivoamba<br/>
                ➢ Au Sud : Commune Rurale Soaindrana / Commune Rurale Talata Ampano<br/>
                ➢ A l’Est : Commune Rurale Andrainjato Centre / Commune Rurale
                Taindambo / Commune Rurale Ialananindro<br/>
                ➢ A l’Ouest : Commune Rurale Andoharanomaintso / Commune Ankarinarivo
                Manirisoa</p>
             </Col>
             <Col xs={6}>
                <img src={carte} width="600px" height="400px" alt="Capture"/>
             </Col>
        </Row>
        </Container>
        
        </>

    );
};

export default Accueil;