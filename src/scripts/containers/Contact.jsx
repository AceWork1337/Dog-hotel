//import npm package
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Icon} from 'react-materialize';

//import components and containers
// import ContactMap from './ContactMap.jsx';
import ContactForm from './ContactForm.jsx';
import '../../styles/containers/Contact.scss';
//import assets
// import map from '../../styles/assets/img/maps.png';
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
                    <Row className="show-Grid">
                        <h4>GET IN TOUCH</h4>                    
                    </Row>
                    <Row className="show-Grid">
                        <Col sm ={12} md={5}>
                            {/* <ContactMap/> */}
                            <div className="hotelInfo" data-wow-delay="0.2s">
                                <h4>Information</h4>
                                <p>Contact for additional information:</p>
                                <div style={{display:'inline-flex',width:'100%'}}><Icon>mail</Icon><p><i className="fa fa-envelope"></i><a href="mailto:youremailaddress">petshop@site.com</a> or call us</p></div>
                                <div style={{display:'inline-flex'}}><Icon>phone</Icon><p><i className="fa fa-phone"></i>+389 78 458 981</p></div>
                                <h4>Location & Time</h4>
                                <div style={{display:'inline-flex',width:'100%'}}><Icon>home</Icon><p><i className="fa fa-map-marker"></i>Ul 2 br 88 Bardovci, Skopje</p></div>
                                <div style={{display:'inline-flex'}}><Icon>access_time</Icon><p className="openHours"><i ></i>Open from 9 a.m to 9 p.m every day</p></div>
                            </div>
                        </Col>
                        <Col sm ={12} md={7}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    {/* <Row className="show-Grid map"> */}
                        {/* <Col md={12}> */}
                            {/* <img src={map}/> */}
                            {/* <iframe scr={"https://www.npmjs.com/package/google-map-react"}><a></a></iframe> */}
                        {/* </Col>                     */}
                    {/* </Row> */}
                    {/* <Image src={map} responsive /> */}
                    <iframe title="Maps" src="https://www.google.com/maps/d/embed?mid=1NmCGWtxNsdXALkq5Y0Ui1bQ5V5fHcLsx" width="100%" height="480"/>
                    {/* <Row className="show-Grid">
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
                <Row className="show-Grid">
                        <Col md={7}>
                            <ul className="socialI">
                                <li><img alt="prop" href="https://www.facebook.com/pg/ciposhousehotel/" src={facebook}/></li>
                                <li><img alt="prop" src={gmail}/></li>
                                <li><img alt="prop" src={mailin}/></li>
                                <li><img alt="prop" src={insta}/></li>
                                <li><img alt="prop" src={twitter}/></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                        <p id="copyright"> COPYRIGHT © 2018 Aleksandar Stojanovikj</p>
                        </Col>                    
                    </Row>
                </Grid>
                {/* <ContactMap/> */}
            </div>
        );
    }
}
