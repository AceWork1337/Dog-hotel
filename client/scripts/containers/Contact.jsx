//import npm package
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
//import components and containers
import ContactMap from './ContactMap.jsx';
import ContactForm from './ContactForm.jsx';

//import assets


export default class Contact extends React.Component {
    render(){
        return(
            <div id="contact">
                <Grid fluid>
                    <Row className="show-grid">
                        <h2>contact</h2>                    
                    </Row>
                    <Row className="show-grid">
                        <Col lg={6}>
                            {/* <ContactMap/> */}
                        </Col>
                        <Col lg={6}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
