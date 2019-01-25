//import npm package
import React from 'react';
import {Carousel,Grid,Row,Col,Image} from 'react-bootstrap';

//import components and containers

//import assets
import logo from '../../styles/assets/img/logo-concept.png';
import '../../styles/containers/About.scss';

export default class About extends React.Component {
    render(){
        return(
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
                                        Cipo's House Pet Hotel is committed to delivering the highest level of pet pampering, grooming, and training for both dogs and cats.
                                    From socialization to one-on-one interaction Cipo's House Pet Hotel will surpass your expectations.
                                    <br/>
                                    All dogs and cats that enter our facility are treated as if they are our own, allowing you to have peace of mind
                                    while you are away from your pet.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                        <Image src={logo} responsive />
                    </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
