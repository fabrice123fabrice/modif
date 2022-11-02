import React from 'react';
import {Container} from 'react-bootstrap';
import '../CSS/Jumbotron.css';

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron" >
                <div className='overlay'></div>
                <div className='contain'>
                <Container>
                    <h1>Bienvenue</h1>
                    <p>Géstion des informations communaux</p>
                </Container>
                </div>
            </div>
            <br/>
        </>
    );
};

export default Jumbotron;