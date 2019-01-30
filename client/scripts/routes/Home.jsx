//import npm package
import React from 'react';
import {Carousel,Grid,Row,Col,Image} from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
import { ParallaxProvider } from 'react-scroll-parallax';
//import components and containers
import HomeParalax from '../containers/HomeParalax.jsx';
// import Home from '../routes/Home.jsx';
// import UserProfile from '../routes/UserProfile.jsx';
// import AdminPanel from '../routes/AdminPanel.jsx';
// import Reservation from '../routes/Reservation.jsx';
import About from '../containers/About.jsx';
import Rooms from '../containers/Rooms.jsx';
// import NotFound from '../routes/404.jsx';
// import Login from '../routes/Login.jsx';
// import Register from '../routes/Register.jsx';
// import Header from '../components/Header.jsx';
import Faq from '../containers/Faq.jsx';
import Training from '../containers/Training.jsx';
import Contact from '../containers/Contact.jsx';
import '../../styles/routes/Home.scss';
//import assets
import SamoyedWall from '../../styles/assets/img/samoyedWall.jpg';
import SamoyedWhite from '../../styles/assets/img/SamoyedWhite.jpg';
import pethealth from '../../styles/assets/img/pet-health.jpg';
import pethotel from '../../styles/assets/img/pet-hotel.jpg';
import PetGrooming from '../../styles/assets/img/Pet-Grooming.jpg';

export default class Home extends React.Component {
    render() {
        return (
           <div className="home-page">
           <Grid fluid>
            {/* <ParallaxProvider> */}
                <HomeParalax/>
            {/* </ParallaxProvider> */}
                    
                <About/>
                {/* <Rooms/>
                <Training/>
                <Faq/>
                <Contact/> */}
                <Grid>
                   <Row className="show-grid">
               <div className="ourServices">
               <Row>
                  <h4>OUR SERVICES</h4>
                  </Row>
                  <Row>
                     
                  <div className="ourServicesDiv">
                  <Col sm={12} md={4}>
                     <div>
                        {/* <img src={pethealth}/> */}
                        <Image src={pethealth} responsive />
                        <h5>Pet Health</h5>
                        <p>We offer the most amazing services for your Pet's health and High quality professionals ready to take care of your best friend. </p>
                     </div>
                     </Col>
                     <Col sm={12} md={4}>
                     <div>
                        {/* <img src={PetGrooming}/> */}
                        <Image src={PetGrooming} responsive />
                        <h5>Pet Grooming</h5>
                        <p>Lets talk through some ideas, look at some pictures and help you choose the next great look for your pet in out shop with the best.</p>
                     </div>
                     </Col>
                     <Col sm={12} md={4}>
                     <div>
                        {/* <img src={pethotel}/> */}
                        <Image src={pethotel} responsive />

                        <h5>Pet Hotel</h5>
                        <p>Now you can leave your pet here when you travel with safety and great care for all animals we host here are our hotel.</p>
                     </div>
                     </Col>
                  </div>
                  </Row>
               </div>
               </Row>
               </Grid>
               <Contact/>
               </Grid>
            </div> 
           
        );
    }
}
