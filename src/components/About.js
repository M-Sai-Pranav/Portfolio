import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Pranav from './pranav_mahendra-07072023-0001.jpg'
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from "./Footer";
<Header/>



export default function About() {
  return (
  
    <Container style={{ marginBottom: "20%" }}>

      {/* Header */}
      <Row>
      <Col sm={4} >
        
      </Col>  
      <Col sm={5}>
            <Image src={Pranav} style={{borderRadius: "20px", width:"100%", maxWidth: "25rem", boxShadow:"0px 2px 8px grey", marginTop: "15px" }}  />
      </Col>
      <Col sm={1} style={{display: 'flex'}}>
        
        
        </Col>
      </Row>

      {/* Chats and Chat Numbers */}
      <Row style={{ marginTop:"50px",}}>
        {/* <Col sm={1}> */}
         
        {/* </Col> */}
        <Col sm={12}>
          <h5>
          As a passionate MERN Full-Stack Developer, I have experience in developing dynamic and scalable web applications using MySQL, Express, ReactJS, and NodeJS. With a strong background in both front-end and back-end development, I can create intuitive and seamless user experiences while ensuring efficient server-side functionality. I possess strong analytical and problem-solving skills, allowing me to identify and resolve issues quickly and effectively. I am a self-motivated individual with excellent communication and interpersonal skills, always eager to learn new technologies and techniques to enhance my skills as a developer.
          </h5>
        </Col>
        {/* <Col sm={1}> */}
          
          
        {/* </Col> */}
      </Row>

      <Container>
        <h2 className="mt-5 mb-4 text-center " style={{color:"#0075f6"}}>LOOK WHAT I CAN DO</h2>       
        <h4 className="font-weight-bold text-center text-info">
          <Image src="https://img.icons8.com/dotty/40/000000/web.png" class="m-3 " />
            Development
        </h4>
      <Row>
        <Col sm={6} >
          <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
              <div>
                <Image src="https://img.icons8.com/color/96/000000/html-5.png" />
                <p class="text-center">HTML5</p>
              </div>
              <div>
                <Image src="https://img.icons8.com/color/96/000000/css3.png" />
                <p class="text-center">CSS3</p>
              </div>
              <div>
                <Image src="https://img.icons8.com/color/96/000000/javascript.png" />
                <p class="text-center">Javascript</p>
              </div>

          </div>
          {/* className="row skills d-flex flex-wrap justify-content-around align-items-center mb-3 */}
        </Col>
        <Col sm={6}>
        <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
              <div>
                <Image src="	https://img.icons8.com/color/96/000000/bootstrap.png" />
                <p class="text-center">Bootstrap</p>
              </div>
              <div>
                <Image src="	https://img.icons8.com/color/96/000000/nodejs.png" />
                <p class="text-center">Node.js</p>
              </div>
              <div>
                <Image src="https://img.icons8.com/plasticine/96/000000/react.png" />
                <p class="text-center">React.js</p>
              </div>

          </div>
        </Col>
        
      </Row>  
      </Container>
      <div style={{marginTop: "50px"}}>

<Footer  />
</div>
    </Container>
    

  )
}

