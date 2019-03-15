//import npm package
import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

//import components and containers

//import assets
import logo from '../../styles/assets/img/logo-concept.png';
import '../../styles/containers/About.scss';
import DogImg from '../../styles/assets/img/Dog2.png';

export default class About extends React.Component {
  
    render() {
        return (
            <div id="about">
                <Grid>
                    {/* <Row>
                    <Col md={3}></Col>
                        <Col md={7}>
                        <Image src={logo} responsive />
                            <h4>Our Philosophy</h4>
                        </Col>
                    </Row> */}
                    <Row>

                        <Col md={6}>
                        
                            <div>
                                <h4>Our Philosophy</h4>
                                <p>
                                    We love dogs.<br />
                                    We love them like you love them.<br />
                                    While they’re boarding or hanging out in our daycare, they’ll get just as much attention and affection as they do at home.
                                    And don’t worry, their health and safety is always our #1 priority.We’re here for you and your dog 24 hours a day, every day.

                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Image src={logo} responsive />
                            
                            <Parallax className="Dog2Div" x={[200, 0]} tagOuter="div">
                                <Image src={DogImg} className="2Dog" />
                            </Parallax>
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}
