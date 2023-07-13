import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

<Header/>



export default function Contact() {
  return (
    <Container>

      {/* Header */}
      <Row style={{background: "lightgray" }}>
      <Col sm={4} >
        
      </Col>  
      <Col sm={5}>
      
      </Col>
      <Col sm={1} style={{display: 'flex'}}>
        
        
        </Col>
      </Row>

      {/* Chats and Chat Numbers */}
      <Row style={{ marginTop:"50px",}}>
        <Col sm={7}>
            <div style={{ marginTop: "150px"}}>
                <h3>
                    <span style={{ color: "#0075f6", fontWeight:"700" }}>Let's Connect!</span>
                </h3>
                
                <h5>
                I would love to hear from you. Feel free to reach out through the contact information provided below. Whether you have a project in mind, a collaboration opportunity, or just want to say hello, I'm just a message away!
                </h5>

                <h4>
                    <span style={{color:"#0075f6", marginTop:"10px"}}>
                        
                        <span style={{ color:"#0075f6" }} > Looking forward to connecting with you and discussing exciting possibilities! </span>
                    </span>
                </h4>
            </div>
          
        </Col>
        <Col sm={5}>
          
          <Row style={{ marginTop:"50px", }}>
          <Image src="https://getrafiki.ai/wp-content/uploads/2021/06/Cold-Calling.png"  />
          </Row>
        </Col>
      </Row>

    </Container>
  )
}
























