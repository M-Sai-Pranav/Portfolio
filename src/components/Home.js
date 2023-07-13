import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

<Header/>



export default function Home() {
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
                <h5>
                    <span style={{ color: "#0075f6", fontWeight:"700" }}>HELLO</span>
                </h5>
                <h1>
                    <span style={{color:"#0075f6"}}>
                        <span style={{ color:"black" }} > I'm </span>
                        <span style={{ color:"#0075f6" }} > Sai Pranav Moluguri </span>
                    </span>
                </h1>
                <h5>
                Skilled MERN Full Stack Developer proficient in React, Node.js, Express, and MySQL. 
                Committed to creating efficient and user-friendly web applications.
                </h5>
            </div>
          
        </Col>
        <Col sm={5}>
          
          <Row style={{ marginTop:"50px", }}>
          {/* <Image src=" https://webdakaar.com/img/design-&-development.png"  /> */}
          <Image src=" https://www.igexsolutions.com/wp-content/uploads/2018/12/portfolio.svg"  />
          
          </Row>
        </Col>
      </Row>

    </Container>
  )
}
























