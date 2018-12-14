//import npm package
import React from 'react';
// import {Carousel,} from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
//import components and containers
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

//import assets
import SamoyedWall from '../../styles/assets/img/SamoyedWall.jpg';
import SamoyedWhite from '../../styles/assets/img/SamoyedWhite.jpg';
export default class Home extends React.Component {
    render() {
        return (
           {/* <div>
                 <Carousel style={{height: '100%'}}>
                    <Carousel.Item>
                        <img alt="900x500" src={SamoyedWall} />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="900x500" src={SamoyedWall} />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="900x500" src={SamoyedWall} />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                {/* <Slider id="topMedia">
                    <Slide
                        src={SamoyedWall}
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src={SamoyedWhite}
                        title="Left aligned Caption"
                        placement="left"
                    >
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src={SamoyedWall}
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
                <About/>
                <Rooms/>
                <Training/>
                <Faq/>
                <Contact/>

            </div> */}
            <body id="page-top" data-spy="scroll" data-target=".navbar-custom">   
            <div id="preloader">
                <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
            </div>					
              <nav class="navbar navbar-custom navbar-fixed-top">
                    <div class="top-bar hidden-xs hidden-sm">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <ul class="contact-details">
                                        <li><i class="fa fa-map-marker"></i>Pet Street - Bergen,Norway</li>
                                        <li><i class="fa fa-envelope"></i>petshop@site.com</li>
                                        <li><i class="fa fa-phone"></i>+1 (123) 456 7890</li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <ul class="social-list">
                                        <li><a title="Facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a title="Google Plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a  title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a  title="Flickr" href="#"><i class="fa fa-flickr"></i></a></li>
                                        <li><a  title="Tumblr" href="#"><i class="fa fa-tumblr"></i></a></li>
                                        <li><a  title="Instagram" href="#"><i class="fa fa-instagram"></i></a></li>								
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 <div class="container">
                    <div class="navbar-header page-scroll">
                       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                       <i class="fa fa-bars"></i>
                       </button>
                       <div class="page-scroll">
                          <a class="navbar-brand" href="#page-top">
                             <span class="flaticon-animals-allowed"></span>Happy Paws
                          </a>
                       </div>
                    </div>
                    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                       <ul class="nav navbar-nav page-scroll">
                          <li class="active"><a href="#page-top">Home</a></li>
                          <li><a href="#services">Services</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#prices">Prices</a></li>
                          <li><a href="#gallery">Gallery</a></li>
                          <li><a href="#offers">Offers</a></li>
                          <li><a href="#adoption">Adoption</a></li>
                          <li><a href="#contact">Contact</a></li>
                       </ul>
                    </div>
                 </div>
              </nav>
            <div class="slider-container">	
               <div class="slider-control left inactive"></div>
               <div class="slider-control right"></div>
                   <ul class="slider-pagi"></ul>
               <div class="slider">
                  <div class="slide slide-0 active">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                           <h1 class="slide__text-heading">Welcome to happy paws</h1>
                           <div class="hidden-sm hidden-xs">
                              <p class="lead">We offer all the best quality products and services for your adorable pets.</p>
                              <div class="page-scroll">
                                 <a href="#services" class="btn btn-default">our services</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="slide slide-1">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                           <h1 class="slide__text-heading">enjoy our daily offers</h1>
                           <div class="hidden-sm hidden-xs">
                              <p class="lead">We have great offers with amazing prices every week, check it out today!</p>
                              <div class="page-scroll">
                                 <a href="#offers" class="btn btn-default">our offers</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="slide slide-2">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                           <h1 class="slide__text-heading">We Take care of your pet</h1>
                           <div class="hidden-sm hidden-xs">
                              <p class="lead">Discover the amazing health services that we can offer to your pets.</p>
                              <div class="page-scroll">
                                 <a href="#about" class="btn btn-default">More about us</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="slide slide-3">
                     <div class="slide__bg"></div>
                     <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                           <h1 class="slide__text-heading">adopt a Pet</h1>
                           <div class="hidden-sm hidden-xs">
                              <p class="lead">We have many Adorable Pets who need a home. Share the love, adopt!</p>
                              <div class="page-scroll">
                                 <a href="#adoption" class="btn btn-default">Adopt today</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>	
                        
            <section id="services" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Our Services</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container">
                  <div class="row">
                     <div class="col-md-4 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="img-wrapper">
                           <img src="img/service1.jpg" alt="" class="img-responsive"/>
                        </div>
                        <h4>Pet Health</h4>
                        <p class="margin">We offer the most amazing services for your Pet's health and High quality professionals ready to take care of your best friend. 
                        </p>
                     </div>
                     
                     <div class="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="img-wrapper">
                           <img src="img/service2.jpg" alt="" class="img-responsive"/>
                        </div>
                        <h4>Pet Grooming</h4>
                        <p class="margin">Lets talk through some ideas, look at some pictures and help you choose the next great look for your pet in out shop with the best.
                        </p>
                     </div>
                     <div class="col-md-4 col-sm-12 wow fadeInRight" data-wow-delay="0.2s">
                        <div class="img-wrapper">
                           <img src="img/service3.jpg" alt="" class="img-responsive"/>
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>Now you can leave your pet here when you travel with safety and great care for all animals we host here are our hotel.
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            
            <section id="stats" class="home-section">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="section-heading">
                    <h2>Our Stats</h2>
                    <div class="hr"></div>
                 </div>
                </div>
                 <div class="container">
                    <div class="row">
                       <div class="text-center wow fadeInUp" data-wow-delay="0.2s">
                          <div class="col-md-3 col-sm-6 res-margin">
                             <div class="numscroller" data-slno='1' data-min='0' data-max='180' data-delay='20' data-increment="19">0</div>
                             <hr>
                             <h5>Customers</h5>
                          </div>
                          <div class="col-md-3 col-sm-6 res-margin">
                             <div class="numscroller" data-slno='1' data-min='0' data-max='16' data-delay='10' data-increment="9">0</div>
                             <hr>
                             <h5>Professionals</h5>
                          </div>
                          <div class="col-md-3 col-sm-6 res-margin">
                             <div class="numscroller" data-slno='1' data-min='0' data-max='67' data-delay='20' data-increment="19">0</div>
                             <hr>
                             <h5>Pets Hosted</h5>
                          </div>
                          <div class="col-md-3 col-sm-6">
                             <div class="numscroller" data-slno='1' data-min='0' data-max='50' data-delay='10' data-increment="9">0</div>
                             <hr>
                             <h5>Products</h5>
                          </div>
                       </div>
                    </div>
                 </div>
            </section>
              
            <section id="about" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>About us</h2>
                     <div class="hr"></div>
                  </div>
               </div>
                  <div class="col-md-12 col-sm-12 col-centered">
                     <div class="centered-pills">
                        <ul class="nav nav-pills">
                           <li class="active"><a href="#pane1" data-toggle="tab">Our Clinic</a></li>
                           <li><a href="#pane2" data-toggle="tab">Our Philosophy</a></li>
                           <li><a href="#pane3" data-toggle="tab">Our Team</a></li>
                        </ul>
                     </div>
                  </div>
                 <div class="container">
                  <div class="tabbable">
                     <div class="tab-content">
                        <div id="pane1" class="paneltab tab-pane fade active in">
                           <div class="row">
                              <div class="col-md-12 col-sm-12">
                                 <div class="col-lg-7 col-md-6 col-sm-12 res-margin wow fadeInRight" data-wow-delay="0.2s">
                                    <h3>We take care of your best friend</h3>
                                    <p>Interdum donec eget metus auguen unc vel mauris ultricies, vest ao ibulum orci eget,  blandit quam elit, eu imperdiet neque semper lorem ipsum dolores viverra elit Aliquam erat volutpat phase llus ac sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm.
                                    Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare. Aliquam erat volutpat phas ellus sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm Pellentesque turpis lectus, placerat a ultricies a, posuere lorem ipsuet.</p>
                                 </div>					 
                                 <div class="col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                                    <img src="img/about.png" alt="" class="img-responsive"/>
                                 </div>
                              </div>
                              <div class="col-xs-12 col-md-4 col-lg-4">
                                 <div class="box">
                                    <div class="icon">
                                       <div class="image"><span class="flaticon-pet22"></span></div>
                                       <h5>High Tech Clinic</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xs-12 col-md-4 col-lg-4">
                                 <div class="box">
                                    <div class="icon">
                                       <div class="image"><span class="flaticon-dog65"></span></div>
                                       <h5>Amazing Support</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-xs-12 col-md-4 col-lg-4">
                                 <div class="box">
                                    <div class="icon">
                                       <div class="image"><span class="flaticon-pets19"></span></div>
                                       <h5>Award Winner</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         </div> 
                        
                        <div id="pane2" class="paneltab tab-pane fade">
                          <div class="row">
                           <div class="col-lg-6 col-md-6 col-sm-12 res-margin">
                              <h3>Our Philosophy</h3>
                              <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum. Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare ellen tesque turpis lectus, placerat a ultricies a, posuere a nibh fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vestibulum orci eget, viverra elit. Aliquam erat volutpat. Phasellus ac sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm.
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-12">
                              <div class="embed-responsive embed-responsive-16by9">
                                 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/deN3nt3Sdhc"></iframe>
                              </div>
                           </div>
                          </div>
                        </div>
                        <div id="pane3" class="paneltab tab-pane fade text-center">
                         <div class="row">
                           <h3>Meet our Team</h3>
                           <div class="team">
                              <div class="col-md-3 col-sm-6">
                                 <div class="img-wrapper">
                                    <img src="img/team1.jpg" alt="" class="img-responsive"/>
                                 </div>
                                 <div class="caption-team">
                                    <h5>Luane Silva </h5>
                                    <span>Veterinarian</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div class="social-media margin">
                                    <a href="#" title=""><i class="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i class="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i class="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div class="col-md-3 col-sm-6">
                                 <div class="img-wrapper">
                                    <img src="img/team2.jpg" alt="" class="img-responsive"/>
                                 </div>
                                 <div class="caption-team">
                                    <h5>John Suen</h5>
                                    <span>Caretaker</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div class="social-media margin">
                                    <a href="#" title=""><i class="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i class="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i class="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div class="col-md-3 col-sm-6">
                                 <div class="img-wrapper">
                                    <img src="img/team3.jpg" alt="" class="img-responsive"/>
                                 </div>
                                 <div class="caption-team">
                                    <h5>Nancy May</h5>
                                    <span>Specialist</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div class="social-media margin">
                                    <a href="#" title=""><i class="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i class="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i class="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div class="col-md-3 col-sm-6">
                                 <div class="img-wrapper">
                                    <img src="img/team4.jpg" alt="" class="img-responsive"/>
                                 </div>
                                 <div class="caption-team">
                                    <h5>Amelie Plin</h5>
                                    <span>Veterinarian</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div class="social-media">
                                    <a href="#" title=""><i class="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i class="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i class="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </section>
              
            <section id="testimonials" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>What Our Clients Say</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container">
                  <div class="row wow fadeInLeft" data-wow-delay="0.2s">
                     <div id="owl-testimonials" class="owl-carousel">
                        <div class="col-md-10 col-centered">
                           <blockquote>
                              <div class="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src="img/testimonial1.jpg" alt="" class="res-margin img-responsive img-circle"/>
                              </div>
                              <div class="col-md-10 col-md-offset-1 quote-test">
                                 <p>Lotam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi Suspendisse a elementum anteu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>Joanna Vilken, TV Star</small>
                              </div>
                           </blockquote>
                        </div>
                        
                        <div class="col-md-10 col-centered">
                           <blockquote>
                              <div class="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src="img/testimonial2.jpg" alt="" class="res-margin img-responsive img-circle"/>
                              </div>
                              <div class="col-md-10 col-md-offset-1 quote-test">
                                 <p>Laudantium totam tempore optio doloremque aut eius animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>John Cassady, Astronaut</small>
                              </div>
                           </blockquote>
                        </div>
                        
                        <div class="col-md-10 col-centered">
                           <blockquote>
                              <div class="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src="img/testimonial3.jpg" alt="" class="res-margin img-responsive img-circle"/>
                              </div>
                              <div class="col-md-10 col-md-offset-1 quote-test">
                                 <p>Laboriosam quas, quos eaque molestias odio aut eius animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>Maria Silveira, Model</small>
                              </div>
                           </blockquote>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="prices" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Our Prices</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container wow fadeInDown" data-wow-delay="0.2s">
                  <div class="row pricing-tables">
                    <div class="col-md-3 col-sm-6">
                        <div class="pricing-table res-margin">
                           <div class="plan-name">
                              <h4>Basic</h4>
                           </div>
                           <div class="plan-price">
                              <div class="price-value">$49<span>.00</span></div>
                              <div class="interval">per month</div>
                           </div>
                           <div class="plan-list">
                              <ul>
                                 <li>2 Dog walks</li>
                                 <li>1 Vet Visit</li>
                                 <li>1 Pet Spa</li>
                                 <li>10 Vet Calls</li>
                                 <li>Free Support</li>
                              </ul>
                           </div>
                           <div class="plan-signup">
                              <a href="#" class="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>		
                    <div class="col-md-3 col-sm-6 res-margin">
                        <div class="pricing-table highlight-plan">				
                           <div class="plan-name">
                              <h4>Advanced</h4>
                               <div class="ribbon"><span>POPULAR</span></div>				      
                           </div>
                           <div class="plan-price">
                              <div class="price-value">$99<span>.00</span></div>
                              <div class="interval">per month</div>
                           </div>
                           <div class="plan-list">
                              <ul>
                                 <li>5 Dog walks</li>
                                 <li>3 Vet Visits</li>
                                 <li>5 Pet Spa</li>
                                 <li>20 Vet Calls</li>
                                 <li>Free Support</li>						 
                              </ul>
                           </div>
                           <div class="plan-signup">
                              <a href="#" class="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>			 
                     <div class="col-md-3 col-sm-6">
                        <div class="pricing-table res-margin">
                           <div class="plan-name">
                              <h4>Professional</h4>
                           </div>
                           <div class="plan-price">
                              <div class="price-value">$199<span>.00</span></div>
                              <div class="interval">per month</div>
                           </div>
                           <div class="plan-list">
                              <ul>
                                 <li>10 Dog walks</li>
                                 <li>5 Vet Visits</li>
                                 <li>10 Pet Spa</li>
                                 <li>40 Vet Calls</li>
                                 <li>Free Support</li>
                              </ul>
                           </div>
                           <div class="plan-signup">
                              <a href="#" class="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>			 
                     <div class="col-md-3 col-sm-6">
                        <div class="pricing-table">
                           <div class="plan-name">
                              <h4>Extreme</h4>
                           </div>
                           <div class="plan-price">
                              <div class="price-value">$299<span>.00</span></div>
                              <div class="interval">per month</div>
                           </div>
                           <div class="plan-list">
                              <ul>
                                 <li><strong>Unlimited</strong> Dog walks</li>
                                 <li><strong>Unlimited</strong> Vet Visits</li>
                                 <li><strong>Unlimited</strong> Pet Spa</li>
                                 <li><strong>Unlimited</strong> Vet Calls</li>
                                 <li><strong>Unlimited</strong> Support</li>
                              </ul>
                           </div>
                           <div class="plan-signup">
                              <a href="#" class="btn btn-default btn-small">Sign Up Now</a>
                           </div>
                        </div>
                     </div>
                  </div> 
               </div>
            </section>
                
            <section id="call-to-action" class="small-section">
               <div class="container text-center">
                  <div class="col-md-offset-5 col-md-7 col-sm-12">
                     <h3>Discover our Pet Shop and Services</h3>
                     <p>Contact or learn more about us and make your pet happy in your visit to our Shop and discover all our amazing products and services to make your pet very healthy and active with a lot of energy this winter lorem ipsum ipsuet dolor.
                     </p>
                     <div class="page-scroll light-btn">
                        <a class="btn btn-default wow fadeInLeft" data-wow-delay="0.2s" href="#contact">Contact us</a> 
                        <a class="btn btn-default m-left wow fadeInRight" data-wow-delay="0.2s" href="#about">More about us</a>
                     </div>
                  </div>
               </div>
            </section>
            <section id="gallery" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Our Gallery</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container wow fadeInDown" data-wow-delay="0.2s">
                  <div class="nav-gallery col-md-12">
                        <ul class="list-inline nav type cat">
                           <li class="active"><a href="#" data-filter="*">All</a></li>
                           <li><a href="#" data-filter=".dogcat">Dogs and Cats</a></li>
                           <li><a href="#" data-filter=".other">Other Pets</a></li>
                        </ul>
                   </div>
                  <div class="row">
                    <div class="col-md-12">
                     <div id="lightbox">			 
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery1.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery1.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery6.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery6.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery3.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery3.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery4.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery4.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery5.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery5.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery2.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery2.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery7.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery7.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery8.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery8.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery9.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery9.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery10.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery10.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 other">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery11.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery11.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div class="portfolio-item">
                              <div class="gallery-thumb">
                                 <img class="img-responsive" src="img/gallery12.jpg" alt="">
                                 <span class="overlay-mask"></span>
                                 <a href="img/gallery12.jpg" data-gal="prettyPhoto[gallery]" class="link centered" title="You can add caption to pictures.">
                                 <i class="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
            </section>
             
            <section id="offers" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>This Month's Offers</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container wow fadeInDown" data-wow-delay="0.2s">
               <div class="row">
                  <div class="col-md-10 col-centered">
                     <div id="owl-offers" class="owl-carousel">
                        <div>
                           <div class="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src="img/offer1.png" class="img-responsive" alt=""/>
                           </div>
                           <div class="col-sm-7">
                              <div class="media-body">
                                 <h4>Vet Services: <span class="label label-default">20% OFF</span></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                    Quisque mauris augue, lorem tincidunt condimentum vitae uisque mauris augue, lorem ipsum  tincidunt condimentum vitae.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div class="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src="img/offer2.png" class="img-responsive" alt=""/>
                           </div>
                           <div class="col-sm-7">
                              <div class="media-body">
                                 <h4>Pet School: <span class="label label-default">30% OFF</span></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                    Quisque mauris augue, lorem tincidunt condimentum vitae uisque mauris augue, lorem ipsum  tincidunt condimentum vitae.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div class="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src="img/offer3.png" class="img-responsive" alt=""/>
                           </div>
                           <div class="col-sm-7">
                              <div class="media-body">
                                 <h4>Quality Pet Foods: <span class="label label-default">40% OFF</span></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                    Quisque mauris augue, lorem tincidunt condimentum vitae uisque mauris augue, lorem ipsum  tincidunt condimentum vitae.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </section>
            
            <section id="adoption" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Adoption</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container">
                  <div class="row wow fadeInDown" data-wow-delay="0.2s">
                    <div class="col-md-4 col-sm-12 res-margin">
                       <img src="img/adopt.jpg" class="img-responsive" alt=""/>
                    </div>
                     <div class="col-md-8">			 					
                       <h3>Looking to Adopt an Animal?</h3>
                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ul tricies, vest ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sod ales felis tiam non metus ali quam eros accumsan mollis eget vitaeusm.
                          donec eget metus auguen unc vel mauris ul tricies, vest ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam e Aliquam erat volutpat phasellus ac sodales felis tiam non metus ali quam eros accumsan mollis eget vitae tel lusm. Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. Aliquam erat volutpat phasellus ac sodales felis tiam non metus ali quam eros accumsan mollis eget vi tae.
                       </p>							
                      </div>
                     
                     <div class="row">
                        <div class="col-md-5 col-sm-6">
                           <h4 class="text-center">Frequent Questions</h4>
                           <div class="panel-group" id="accordion">
                              <div class="panel panel-default">
                                 <div class="panel-heading">
                                    <h5 class="panel-title">
                                       <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Is account registration required?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseOne" class="panel-collapse collapse in">
                                    <div class="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="panel panel-default">
                                 <div class="panel-heading">
                                    <h5 class="panel-title">
                                       <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">How do I Apply?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseTwo" class="panel-collapse collapse">
                                    <div class="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="panel panel-default">
                                 <div class="panel-heading">
                                    <h5 class="panel-title">
                                       <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">What documents do I need to Adopt?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseThree" class="panel-collapse collapse">
                                    <div class="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="panel panel-default">
                                 <div class="panel-heading">
                                    <h5 class="panel-title">
                                       <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">How to choose an Pet?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseFour" class="panel-collapse collapse">
                                    <div class="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div class="panel panel-default">
                                 <div class="panel-heading">
                                    <h5 class="panel-title">
                                       <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Are the animals neutered?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseFive" class="panel-collapse collapse">
                                    <div class="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                                         
                        <div class="col-md-7 col-sm-6">
                          <h4 class="text-center">Find a New Friend</h4>				  				 				   
                           <div id="owl-adopt" class="owl-carousel owl-theme">
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption1.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Lilica</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 5 years</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#1" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption2.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Charlie</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> No</li>
                                             <li><strong>Age:</strong> 4 months</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#2" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption3.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Lucky</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 1 year</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#3" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption4.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Madalene</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> No</li>
                                             <li><strong>Age:</strong> 2 years</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#4" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption5.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Joanne</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 5 years</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#5" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
        
                              <div>
                                 <div class="col-md-12">
                                    <div class="thumbnail text-center">
                                       <img src="img/adoption6.jpg" class="img-circle img-responsive" alt=""/>
                                       <div class="caption-adoption">
                                          <h6>Cutesy</h6>
                                          <ul class="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 2 years</li>
                                          </ul>	
                                          <div class="toggle-btn page-scroll text-center">
                                             <a href="#6" class=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                         </div>
                         
                           <div class="cd-panel from-right" id="1">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption1.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Lilica</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div class="cd-panel from-right" id="2">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption2.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Charlie</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
        
                           <div class="cd-panel from-right" id="3">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption3.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Lucky</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div class="cd-panel from-right" id="4">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption4.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Madalene</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>	
                           
                           <div class="cd-panel from-right" id="5">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption5.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Joanne</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div class="cd-panel from-right" id="6">
                              <div class="cd-panel-container">
                                 <div class="cd-panel-content">
                                    <div class="col-md-7 col-centered">
                                       <img src="img/adoption6.jpg" class="img-responsive" alt=""/>
                                    </div>
                                    <h3 class="text-center">Adopt Cutesy</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div class="page-scroll text-center">
                                       <a href="#contact" class="cd-close btn btn-default">Adopt Now</a>  <a class="cd-close btn btn-danger m-left"><i class="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                      </div>
                    </div>
                 </div>
             </section>
            
            <section id="brands" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Brands we work with</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container text-center">
                   <div class="row">
                 <div class="col-sm-6 col-md-3 res-margin">
                    <div class="well well-sm wow fadeInLeft">
                       <a href="#"><img src="img/client1.png" alt="client" class="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div class="col-sm-6 col-md-3 res-margin">
                    <div class="well well-sm wow fadeInLeft">
                       <a href="#"><img src="img/client2.png" alt="client" class="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div class="col-sm-6 col-md-3 res-margin">
                    <div class="well well-sm wow fadeInRight">
                       <a href="#"><img src="img/client3.png" alt="client" class="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div class="col-sm-6 col-md-3">
                    <div class="well well-sm wow fadeInRight">
                       <a href="#"><img src="img/client4.png" alt="client" class="col-centered img-responsive"/></a>
                    </div>
                  </div>
                </div>	  
               </div>
            </section>
             
            <section id="contact" class="home-section">
               <div class="col-lg-8 col-lg-offset-2">
                  <div class="section-heading">
                     <h2>Get in touch</h2>
                     <div class="hr"></div>
                  </div>
               </div>
               <div class="container">
                   <div class="row">
                  <div class="margin col-md-4 col-sm-6 wow fadeInLeft" data-wow-delay="0.2s">
                     <h4>Information</h4>
                     <p>Contact for additional information:</p>
                     <p><i class="fa fa-envelope"></i><a href="mailto:youremailaddress">petshop@site.com</a> or call us</p>
                     <p><i class="fa fa-phone"></i>+1 (123) 456 7890</p>
                     <h4>Location & Time</h4>
                     <p><i class="fa fa-map-marker"></i>We are located at Pet City, 304.</p>
                     <p><i class="fa fa-clock-o"></i>Open from 9 a.m to 10 p.m on weekdays and from 9 a.m to 2 p.m in weekends.</p>
                  </div>
                  <div class="col-md-7 col-md-offset-1 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.2s">
                     <div class="form-style" id="contact_form">
                        <div id="contact_results"></div>
                        <div class="form-group">
                           <input type="text" name="name" class="form-control input-field" placeholder="Name" required/>
                        </div>
                        <div class="form-group">
                           <input type="email" name="email" class="form-control input-field"  placeholder="Email ID" required/>
                        </div>
                        <div class="form-group">
                           <input type="text" name="subject" class="form-control input-field" placeholder="Subject" required/>
                        </div>
                        <div class="form-group">
                           <textarea name="message" id="message" class="textarea-field form-control" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <div class="form-group">
                           <button type="submit" id="submit_btn" value="Submit" class="btn btn-default pull-right">Send message</button>
                        </div>				
                     </div>	
                  </div>
                </div>  
               </div> 
            </section>
            
            <div class="wow fadeInTop" data-wow-delay="0.2s">
               <div id="map-canvas"></div>
            </div>
                      
            <footer>
               <div class="container">
                  <div class="row wow fadeInUp" data-wow-delay="0.2s">
                     <div class="col-sm-6 col-md-4">
                        <ul class="social-media">
                           <li><a title="Facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                           <li><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                           <li><a title="Google Plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                           <li><a  title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                           <li><a  title="Flickr" href="#"><i class="fa fa-flickr"></i></a></li>
                           <li><a  title="Tumblr" href="#"><i class="fa fa-tumblr"></i></a></li>
                           <li><a  title="Instagram" href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                     </div>
                     <div class="col-sm-6 col-md-offset-5 col-md-3 text-center">
                        <p>COPYRIGHT © 2015-2018 Ingrid Kuhn</p>
                     </div>			 
                  </div>
               </div>
               <div class="page-scroll hidden-sm hidden-xs">
                  <a href="#page-top" class="back-to-top"><i class="fa fa-angle-up"></i></a>
               </div>
            </footer>
        );
    }
}
