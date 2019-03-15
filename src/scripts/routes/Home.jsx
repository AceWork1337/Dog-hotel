//import npm package
import React from 'react';
import {  Grid, Row, Col, Image } from 'react-bootstrap';
// import { Slider, Slide } from 'react-materialize';
import { ParallaxProvider } from 'react-scroll-parallax';
// import $ from 'jquery';
//import components and containers
import HomeParalax from '../containers/HomeParalax.jsx';
// import Home from '../routes/Home.jsx';
// import UserProfile from '../routes/UserProfile.jsx';
// import AdminPanel from '../routes/AdminPanel.jsx';
// import Reservation from '../routes/Reservation.jsx';
import About from '../containers/About.jsx';
import Steam from '../containers/Steam.jsx';
// import Rooms from '../containers/Rooms.jsx';
// import NotFound from '../routes/404.jsx';
// import Login from '../routes/Login.jsx';
// import Register from '../routes/Register.jsx';
// import Header from '../components/Header.jsx';
// import Faq from '../containers/Faq.jsx';
// import Training from '../containers/Training.jsx';
import Contact from '../containers/Contact.jsx';
import '../../styles/routes/Home.scss';
//import assets

import pethealth from '../../styles/assets/img/pet-health.jpg';
import pethotel from '../../styles/assets/img/pet-hotel.jpg';
import PetGrooming from '../../styles/assets/img/Pet-Grooming.jpg';

export default class Home extends React.Component {
   componentDidMount() {
      // var container = document.getElementById('container');
      // var windowHeight = window.innerHeight;
      // var windowWidth = window.innerWidth;
      // var scrollArea = 1000 - windowHeight;
      // var square1 = document.getElementsByClassName('square')[0];
      // var square2 = document.getElementsByClassName('square')[1];

      // // update position of square 1 and square 2 when scroll event fires.
      // window.addEventListener('scroll', function () {
      //    var scrollTop = window.pageYOffset || window.scrollTop;
      //    var scrollPercent = scrollTop / scrollArea || 0;

      //    square1.style.left = scrollPercent * window.innerWidth + 'px';
      //    square2.style.left = 800 - scrollPercent * window.innerWidth * 0.6 + 'px';
      // });
   }
   render() {
      return (
         <div className="home-page">
            <Grid fluid>
               <ParallaxProvider>
                  <HomeParalax />
               </ParallaxProvider>
               <ParallaxProvider>
                  <About />
               </ParallaxProvider>
               {/* <Rooms/>
                <Training/>
                <Faq/>
                <Contact/> */}
               <Row>
                  <Steam />
               </Row>
               <Grid fluid className="ServicesGrid">
                  <Row className="show-Grid">
                     <Grid><Row>
                        <div className="ourServices">
                           <Row>
                              <h4>OUR SERVICES</h4>

                           </Row>
                           <Row>

                              <div className="ourServicesDiv">
                                 
                                 <Row>

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
                                 </Row>
                                 <Row>
                                    <Col lg={12}>
                                       <p id="ServicesPa">
                                          Cipo's House Hotel is the premier home away from home for your beloved pet.Make sure to take advantage of our 24/7 drop-off & pick-up, on-site dog bathing and grooming.
                                       Plus, check in on your pet anytime you want with our 24/7 webcams.
                                       We are trying to create conditions to satisfy and suit your dog needs.
                                       </p>
                                    </Col>
                                 </Row>
                              </div>
                           </Row>
                        </div>
                     </Row></Grid>
                  </Row>
               </Grid>
               <Contact />
            </Grid>
         </div>

      );
   }
}
