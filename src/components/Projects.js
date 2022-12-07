import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container'


const data = [
  {
      id: 1,
      name: 'GoodNeighbor',
      description: 'A community-driven service-exchange app written using node, express, and handlebars',
      role: 'Backend Development, UX/UI Design, Project Management',
      techUsed: 'Node, Express, Handlebars, MySQL, Sequelize, Bootstrap',
      deployedLink: 'thegoodneighbor.herokuapp.com',
      view: 'https://github.com/Northwestern-Coding-Bootcamp-Project-2/GoodNeighbor',
      imgSrc: 'https://i.imgur.com/UsOxQq7.jpeg'
  },
  {
      id: 2,
      name: 'Tripsight',
      description: 'A one stop shop for all things travel content, pictures for planning future travel or just getting your fix of far off places! Allows the user to create an account, post blogs and search other users blogs.',
      role: 'Backend Development, API Management, Frontend Development',
      techUsed: 'React, Node.js, MongoDB, Mongoose, GraphQL, Apollo, JavaScript and Sass',
      deployedLink: 'https://tripsight.herokuapp.com/',
      view: 'https://github.com/travel-app-devs/TripSight',
      imgSrc: 'https://github.com/travel-app-devs/TripSight/blob/main/client/public/previewImage1.png?raw=true'
  },
  {
      id: 4,
      name: 'Select Tech Inc',
      description: 'A tech company website designed with Squarespace using custom styling and code injections',
      role: 'Sole Author',
      techUsed: 'Squarespace, Javascript, CSS',
      view: 'https://www.selecttechinc.com',
      imgSrc: 'https://i.imgur.com/5InsjAE.png'
  },
  {
      id: 5,
      name: 'livreSearch',
      description: 'A MERN stack app to search for and save books',
      role: 'Sole Author',
      techUsed: 'MongoDB, React, Node, Express',
      view: 'https://github.com/rudie-g/livreSearch',
      imgSrc: 'https://i.imgur.com/9T72LMW.png?1'
  }
];

const styles ={
  cardStyle: {
    marginTop: '20px',
    height: '30rem',
    width: '27rem',
    textAlign: 'center',
    
  },
  textStyle: {
    marginTop: '30px'
      
    
  },
  linkStyle: {
   
    marginTop: '30px'
  },
  wrapper: {
    padding: '30px',
    marginLeft: '.5%',
    marginRight: '.5%'
  }
}

const Projects = () => {

    return (
      <div className="projectsContainer">
          <Row className="projectsRow">
              {data.map((data, k) => {
                if (data.id !== 4) {
                  return (
                  <Col key={k} xs={12} md={6} lg={4} style={styles.wrapper}>
                      <Card style={styles.cardStyle}>
                          <Card.Img src={data.imgSrc} />

                          <Card.Body >
                              <Card.Title style={styles.textStyle}>{data.name}</Card.Title>
                              <Card.Text style={styles.textStyle}>{data.description}</Card.Text>
                              
                                <a href={data.view}> <Button variant="dark" className='mt-auto' >View Code</Button></a> 
                            
                          </Card.Body>
                      </Card>
                  </Col>
              )}
              else {
                return (<Col key={k} xs={12} md={6} lg={4} style={styles.wrapper}>
                      <Card style={styles.cardStyle}>
                          <Card.Img src={data.imgSrc} />

                          <Card.Body >
                              <Card.Title style={styles.textStyle}>{data.name}</Card.Title>
                              <Card.Text style={styles.textStyle}>{data.description}</Card.Text>
                              
                                <a href={data.view}> <Button variant="dark" className='mt-auto' >View Site</Button></a> 
                            
                          </Card.Body>
                      </Card>
                  </Col>
              )}})}
          </Row>
      </div>
  )
}
    


export default Projects;