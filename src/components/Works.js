import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pranav from './pranav_mahendra-07072023-0001.jpg'
import Button from 'react-bootstrap/Button';
import bms from './bms.png';
import whatsapp from './whatsapp.png';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Journal from './to.png';
import Footer from './Footer';
import {Link, useNavigate} from "react-router-dom"


function Works() {
  const navigate = useNavigate();
  function ViewJournal(){
    
  }
  return (
   <div style={{ marginBottom: "20%" }}>  
   <h2 className="mt-lg-5 mt-sm-5 text-center " style={{color:"#0075f6"}}>Projects</h2>
    <p className="text-center">Here are few projects which I worked on recently.</p>
    <CardGroup>

    <Row style={{marginTop: "50px"}}>
        <Col sm={2}></Col>
        <Col sm={3}>
        <Card>
        <Card.Img variant="top" src={whatsapp} />
        <Card.Body>
          <Card.Title>WhatsApp Web</Card.Title>
          <Card.Text>
            <p>
            I created a WhatsApp Web Chat application using the MERN stack (MySQL, React, Node.js, Express.js) and Kafka for real-time messaging and data processing. The application enables users to chat in real-time, create groups, and engage in individual or group conversations through a web interface.
            </p>
            <p> 
          <span style={{fontWeight: "600"}}>
            Tech Stack 
            </span>
            : ReactJS, Bootstrap, Node.js, Express.js, MySQL, Kafka, Socket.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="/">View Live !</a>
        </Card.Footer>
      </Card>
        </Col>
        <Col sm={2}></Col>
        <Col sm={3}>
        <Card>
        <Card.Img variant="top" src={bms} />
        <Card.Body>
          <Card.Title>BookMyShow </Card.Title>
          <Card.Text>
            <p>
            I developed a BookMyShow application using the MERN stack (MySQL, React, Node.js, Express.js) and Kafka. It allows users to book tickets for movies, events, and shows, providing a seamless and user-friendly experience through a web-based interface.
            </p>
          <p> 
          <span style={{fontWeight: "600"}}>
            Tech Stack 
            </span>
            : ReactJS, Bootstrap, Node.js, Express.js, MySQL, Kafka, Socket.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="/">View Live !</a>
        </Card.Footer>
      </Card>
        </Col>
        <Col sm={2}></Col>


    </Row>
      
    </CardGroup>
    <Row style={{marginTop: "50px"}} >
    <Col sm={2}></Col>
    <Col sm={3}>

    <Card>
        <Card.Img variant="top" src={Journal} />
        <Card.Body>
          <Card.Title>My Journal</Card.Title>
          <Card.Text>
            <p>
            I created a Journal website using HTML, CSS, and JavaScript, where users can create and manage personal journals, write entries, and engage in discussions through a web interface.
            </p>
            <p> 
          <span style={{fontWeight: "600"}}>
            Tech Stack 
            </span>
            : HTML, CSS, JavaSCript.
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        
          {/* <Button onClick={ViewJournal}> View Live </Button> */}
          <a href="https://sai-pranav-journal.netlify.app/">View Live !</a>
        </Card.Footer>
      </Card>

    </Col>
    <Col sm={2}></Col>
    <Col sm={3}></Col>
    <Col sm={2}></Col>
    </Row>
    <div style={{marginTop: "50px"}}>

    <Footer  />
    </div>
    </div>
  );
}

export default Works;

