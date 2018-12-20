//import npm package
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Input,Icon,Button} from 'react-materialize';

//import components and containers
import ContactMap from './ContactMap.jsx';
import ContactForm from './ContactForm.jsx';
import '../../styles/containers/Contact.scss';
//import assets
import map from '../../styles/assets/img/maps.png';
import facebook from '../../styles/assets/img/social icons/facebook.png';
import gmail from '../../styles/assets/img/social icons/gmail.png';
import mailin from '../../styles/assets/img/social icons/in.png';
import insta from '../../styles/assets/img/social icons/insta.png';
import twitter from '../../styles/assets/img/social icons/twitter.png';

export default class Contact extends React.Component {
    render(){
        return(
            <div id="contact">
                <Grid>
                    <Row className="show-grid">
                        <h2>GET IN TOUCH</h2>                    
                    </Row>
                    <Row className="show-grid">
                        <Col sm ={12} md={5}>
                            {/* <ContactMap/> */}
                            <div className="hotelInfo" data-wow-delay="0.2s">
                                <h4>Information</h4>
                                <p>Contact for additional information:</p>
                                <p><i className="fa fa-envelope"></i><Icon>mail</Icon><a href="mailto:youremailaddress">petshop@site.com</a> or call us</p>
                                <p><i className="fa fa-phone"></i><Icon>phone</Icon>+1 (123) 456 7890</p>
                                <h4>Location & Time</h4>
                                <p><i className="fa fa-map-marker"><Icon>home</Icon></i>We are located at Pet City, 304.</p>
                                <p className="openHours"><i ></i><Icon>access_time</Icon>Open from 9 a.m to 10 p.m on weekdays and from 9 a.m to 2 p.m in weekends.</p>
                            </div>
                        </Col>
                        <Col sm ={12} md={7}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row className="show-grid map">
                        <Col md={12}>
                            {/* <img src={map}/> */}
                            <iframe scr={"https://www.npmjs.com/package/google-map-react"}><a></a></iframe>
                        </Col>                    
                    </Row>
                    {/* <Row className="show-grid">
                        <Col md={12}>
                            <ul className="socialI">
                                <li><img src={facebook}/></li>
                                <li><img src={gmail}/></li>
                                <li><img src={mailin}/></li>
                                <li><img src={insta}/></li>
                                <li><img src={twitter}/></li>
                            </ul>
                        </Col>                    
                    </Row> */}
                </Grid>
                <Grid >
                <Row className="show-grid">
                        <Col md={7}>
                            <ul className="socialI">
                                <li><img src={facebook}/></li>
                                <li><img src={gmail}/></li>
                                <li><img src={mailin}/></li>
                                <li><img src={insta}/></li>
                                <li><img src={twitter}/></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                        <p id="copyright"> COPYRIGHT © 2018 Aleksandar Stojanovikj</p>
                        </Col>                    
                    </Row>
                </Grid>
                {/* <ContactMap/> */}
            </div>
        );
    }
}
