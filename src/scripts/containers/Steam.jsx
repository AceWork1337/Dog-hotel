//import npm package
import React from 'react';
import {  Grid, Row, Col } from 'react-bootstrap';
// import { Parallax } from 'react-scroll-parallax';

//import components and containers

//import assets
// import logo from '../../styles/assets/img/logo-concept.png';
import '../../styles/containers/About.scss';
// import DogImg from '../../styles/assets/img/Dog2.png';

export default class Steam extends React.Component {

    render() {
        return (
            <div id="steam">
                <Grid>
                    {/* <Row>
                    <Col md={3}></Col>
                        <Col md={7}>
                        <Image src={logo} responsive />
                            <h4>Our Philosophy</h4>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md={1}></Col>
                        <Col md={11}>

                            <div>
                                <h4>About Safety</h4>
                                <p>
                                    With 24/7 webcam access, and 24/7 drop-off & pick-up, you’ll always be close to your pet—even when you’re far away.<br />
                                    We are unique because your pets live with us all the time.
                                    From our spacious dog daycare play areas to our beautiful boarding accommodations and grooming services,cross walking and exercises
                                </p>
                            </div>
                        </Col>
                        {/* <Col md={6}>
                            <Image src={logo} responsive />
                            
                            
                        </Col> */}

                    </Row>
                </Grid>
            </div>
        );
    }
}
