//import npm package
import React from 'react';
// import {Carousel,} from 'react-bootstrap';
// import { Slider, Slide } from 'react-materialize';
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
import '../../styles/js/prefixfree.js';
import '../../styles/css/bootstrap.scss';
import '../../styles/css/animate.css';
// import '../../styles/css/style.css';
import '../../styles/css/yellowpaws.css';
import'../../styles/css/owl.carousel.css';
import'../../styles/css/prettyPhoto.css';
import '../../styles/js/jquery.min.js';
import '../../styles/js/bootstrap.min.js';
import'../../styles/js/main.js';
import '../../styles/js/plugins.js';
import '../../styles/js/numscroller.js';
import '../../styles/js/contact.js';
export default class Home extends React.Component {
    render() {
        return (
           /* <div>
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
                </Carousel> */
                /* <Slider id="topMedia">
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

            </div> */
            <body id="page-top" data-spy="scroll" data-target=".navbar-custom">   
            <div id="preloader">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>					
              <nav className="navbar navbar-custom navbar-fixed-top">
                    <div className="top-bar hidden-xs hidden-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <ul className="contact-details">
                                        <li><i className="fa fa-map-marker"></i>Pet Street - Bergen,Norway</li>
                                        <li><i className="fa fa-envelope"></i>petshop@site.com</li>
                                        <li><i className="fa fa-phone"></i>+1 (123) 456 7890</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="social-list">
                                        <li><a title="Facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a title="Twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a title="Google Plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a  title="Linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a  title="Flickr" href="#"><i className="fa fa-flickr"></i></a></li>
                                        <li><a  title="Tumblr" href="#"><i className="fa fa-tumblr"></i></a></li>
                                        <li><a  title="Instagram" href="#"><i className="fa fa-instagram"></i></a></li>								
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 <div className="container">
                    <div className="navbar-header page-scroll">
                       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                       <i className="fa fa-bars"></i>
                       </button>
                       <div className="page-scroll">
                          <a className="navbar-brand" href="#page-top">
                             <span className="flaticon-animals-allowed"></span>Happy Paws
                          </a>
                       </div>
                    </div>
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                       <ul className="nav navbar-nav page-scroll">
                          <li className="active"><a href="#page-top">Home</a></li>
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
            <div className="slider-container">	
               <div className="slider-control left inactive"></div>
               <div className="slider-control right"></div>
                   <ul className="slider-pagi"></ul>
               <div className="slider">
                  <div className="slide slide-0 active">
                     <div className="slide__bg"></div>
                     <div className="slide__content">
                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div className="slide__text">
                           <h1 className="slide__text-heading">Welcome to happy paws</h1>
                           <div className="hidden-sm hidden-xs">
                              <p className="lead">We offer all the best quality products and services for your adorable pets.</p>
                              <div className="page-scroll">
                                 <a href="#services" className="btn btn-default">our services</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slide slide-1">
                     <div className="slide__bg"></div>
                     <div className="slide__content">
                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div className="slide__text">
                           <h1 className="slide__text-heading">enjoy our daily offers</h1>
                           <div className="hidden-sm hidden-xs">
                              <p className="lead">We have great offers with amazing prices every week, check it out today!</p>
                              <div className="page-scroll">
                                 <a href="#offers" className="btn btn-default">our offers</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slide slide-2">
                     <div className="slide__bg"></div>
                     <div className="slide__content">
                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div className="slide__text">
                           <h1 className="slide__text-heading">We Take care of your pet</h1>
                           <div className="hidden-sm hidden-xs">
                              <p className="lead">Discover the amazing health services that we can offer to your pets.</p>
                              <div className="page-scroll">
                                 <a href="#about" className="btn btn-default">More about us</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="slide slide-3">
                     <div className="slide__bg"></div>
                     <div className="slide__content">
                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                           <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div className="slide__text">
                           <h1 className="slide__text-heading">adopt a Pet</h1>
                           <div className="hidden-sm hidden-xs">
                              <p className="lead">We have many Adorable Pets who need a home. Share the love, adopt!</p>
                              <div className="page-scroll">
                                 <a href="#adoption" className="btn btn-default">Adopt today</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>	
                        
            <section id="services" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Our Services</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col-md-4 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="img-wrapper">
                           <img src={require("../../styles/img/service1.jpg")} alt="" className="img-responsive"/>
                        </div>
                        <h4>Pet Health</h4>
                        <p className="margin">We offer the most amazing services for your Pet's health and High quality professionals ready to take care of your best friend. 
                        </p>
                     </div>
                     
                     <div className="col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="img-wrapper">
                           <img src={require("../../styles/img/service2.jpg")} alt="" className="img-responsive"/>
                        </div>
                        <h4>Pet Grooming</h4>
                        <p className="margin">Lets talk through some ideas, look at some pictures and help you choose the next great look for your pet in out shop with the best.
                        </p>
                     </div>
                     <div className="col-md-4 col-sm-12 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="img-wrapper">
                           <img src={require("../../styles/img/service3.jpg")} alt="" className="img-responsive"/>
                        </div>
                        <h4>Pet Sitting</h4>
                        <p>Now you can leave your pet here when you travel with safety and great care for all animals we host here are our hotel.
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            
            <section id="stats" className="home-section">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="section-heading">
                    <h2>Our Stats</h2>
                    <div className="hr"></div>
                 </div>
                </div>
                 <div className="container">
                    <div className="row">
                       <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
                          <div className="col-md-3 col-sm-6 res-margin">
                             <div className="numscroller" data-slno='1' data-min='0' data-max='180' data-delay='20' data-increment="19">0</div>
                             <hr/>
                             <h5>Customers</h5>
                          </div>
                          <div className="col-md-3 col-sm-6 res-margin">
                             <div className="numscroller" data-slno='1' data-min='0' data-max='16' data-delay='10' data-increment="9">0</div>
                             <hr/>
                             <h5>Professionals</h5>
                          </div>
                          <div className="col-md-3 col-sm-6 res-margin">
                             <div className="numscroller" data-slno='1' data-min='0' data-max='67' data-delay='20' data-increment="19">0</div>
                             <hr/>
                             <h5>Pets Hosted</h5>
                          </div>
                          <div className="col-md-3 col-sm-6">
                             <div className="numscroller" data-slno='1' data-min='0' data-max='50' data-delay='10' data-increment="9">0</div>
                             <hr/>
                             <h5>Products</h5>
                          </div>
                       </div>
                    </div>
                 </div>
            </section>
              
            <section id="about" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>About us</h2>
                     <div className="hr"></div>
                  </div>
               </div>
                  <div className="col-md-12 col-sm-12 col-centered">
                     <div className="centered-pills">
                        <ul className="nav nav-pills">
                           <li className="active"><a href="#pane1" data-toggle="tab">Our Clinic</a></li>
                           <li><a href="#pane2" data-toggle="tab">Our Philosophy</a></li>
                           <li><a href="#pane3" data-toggle="tab">Our Team</a></li>
                        </ul>
                     </div>
                  </div>
                 <div className="container">
                  <div className="tabbable">
                     <div className="tab-content">
                        <div id="pane1" className="paneltab tab-pane fade active in">
                           <div className="row">
                              <div className="col-md-12 col-sm-12">
                                 <div className="col-lg-7 col-md-6 col-sm-12 res-margin wow fadeInRight" data-wow-delay="0.2s">
                                    <h3>We take care of your best friend</h3>
                                    <p>Interdum donec eget metus auguen unc vel mauris ultricies, vest ao ibulum orci eget,  blandit quam elit, eu imperdiet neque semper lorem ipsum dolores viverra elit Aliquam erat volutpat phase llus ac sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm.
                                    Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare. Aliquam erat volutpat phas ellus sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm Pellentesque turpis lectus, placerat a ultricies a, posuere lorem ipsuet.</p>
                                 </div>					 
                                 <div className="col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0.2s">
                                    <img src={require("../../styles/img/about.png")} alt="" className="img-responsive"/>
                                 </div>
                              </div>
                              <div className="col-xs-12 col-md-4 col-lg-4">
                                 <div className="box">
                                    <div className="icon">
                                       <div className="image"><span className="flaticon-pet22"></span></div>
                                       <h5>High Tech Clinic</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xs-12 col-md-4 col-lg-4">
                                 <div className="box">
                                    <div className="icon">
                                       <div className="image"><span className="flaticon-dog65"></span></div>
                                       <h5>Amazing Support</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xs-12 col-md-4 col-lg-4">
                                 <div className="box">
                                    <div className="icon">
                                       <div className="image"><span className="flaticon-pets19"></span></div>
                                       <h5>Award Winner</h5>
                                       <p>Suspendisse blandit quam elit, eu imperdiet neque semper lorem ipsum dolores.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         </div> 
                        
                        <div id="pane2" className="paneltab tab-pane fade">
                          <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-12 res-margin">
                              <h3>Our Philosophy</h3>
                              <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum. Sed in lobortis nisl Phasellus ultrices gravida massa luctus ornare ellen tesque turpis lectus, placerat a ultricies a, posuere a nibh fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vestibulum orci eget, viverra elit. Aliquam erat volutpat. Phasellus ac sodales felis tiam non metus aliquam eros accumsan mollis eget vitae tellusm.</p>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="embed-responsive embed-responsive-16by9">
                                 <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/deN3nt3Sdhc"></iframe>
                              </div>
                           </div>
                          </div>
                        </div>
                        <div id="pane3" className="paneltab tab-pane fade text-center">
                         <div className="row">
                           <h3>Meet our Team</h3>
                           <div className="team">
                              <div className="col-md-3 col-sm-6">
                                 <div className="img-wrapper">
                                    <img src={require("../../styles/img/team1.jpg")} alt="" className="img-responsive"/>
                                 </div>
                                 <div className="caption-team">
                                    <h5>Luane Silva </h5>
                                    <span>Veterinarian</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div className="social-media margin">
                                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i className="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                 <div className="img-wrapper">
                                    <img src={require("../../styles/img/team2.jpg")} alt="" className="img-responsive"/>
                                 </div>
                                 <div className="caption-team">
                                    <h5>John Suen</h5>
                                    <span>Caretaker</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div className="social-media margin">
                                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i className="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                 <div className="img-wrapper">
                                    <img src={require("../../styles/img/team3.jpg")} alt="" className="img-responsive"/>
                                 </div>
                                 <div className="caption-team">
                                    <h5>Nancy May</h5>
                                    <span>Specialist</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div className="social-media margin">
                                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i className="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                 <div className="img-wrapper">
                                    <img src={require("../../styles/img/team4.jpg")} alt="" className="img-responsive"/>
                                 </div>
                                 <div className="caption-team">
                                    <h5>Amelie Plin</h5>
                                    <span>Veterinarian</span>
                                    <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh imperdiet interdum.</p>
                                 </div>
                                 <div className="social-media">
                                    <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                    <a href="#" title=""><i className="fa fa-facebook"></i></a>
                                    <a href="#" title=""><i className="fa fa-linkedin"></i></a>
                                    <a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                    <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                 </div>
                              </div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </section>
              
            <section id="testimonials" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>What Our Clients Say</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container">
                  <div className="row wow fadeInLeft" data-wow-delay="0.2s">
                     <div id="owl-testimonials" className="owl-carousel">
                        <div className="col-md-10 col-centered">
                           <blockquote>
                              <div className="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src={require("../../styles/img/testimonial1.jpg")} alt="" className="res-margin img-responsive img-circle"/>
                              </div>
                              <div className="col-md-10 col-md-offset-1 quote-test">
                                 <p>Lotam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi Suspendisse a elementum anteu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>Joanna Vilken, TV Star</small>
                              </div>
                           </blockquote>
                        </div>
                        
                        <div className="col-md-10 col-centered">
                           <blockquote>
                              <div className="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src={require("../../styles/img/testimonial2.jpg")} alt="" className="res-margin img-responsive img-circle"/>
                              </div>
                              <div className="col-md-10 col-md-offset-1 quote-test">
                                 <p>Laudantium totam tempore optio doloremque aut eius animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>John Cassady, Astronaut</small>
                              </div>
                           </blockquote>
                        </div>
                        
                        <div className="col-md-10 col-centered">
                           <blockquote>
                              <div className="col-md-2 col-md-offset-5 col-sm-12 col-xs-12 text-center">
                                 <img src={require("../../styles/img/testimonial3.jpg")} alt="" className="res-margin img-responsive img-circle"/>
                              </div>
                              <div className="col-md-10 col-md-offset-1 quote-test">
                                 <p>Laboriosam quas, quos eaque molestias odio aut eius animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis..</p>
                                 <small>Maria Silveira, Model</small>
                              </div>
                           </blockquote>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="prices" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Our Prices</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container wow fadeInDown" data-wow-delay="0.2s">
                  <div className="row pricing-tables">
                    <div className="col-md-3 col-sm-6">
                        <div className="pricing-table res-margin">
                           <div className="plan-name">
                              <h4>Basic</h4>
                           </div>
                           <div className="plan-price">
                              <div className="price-value">$49<span>.00</span></div>
                              <div className="interval">per month</div>
                           </div>
                           <div className="plan-list">
                              <ul>
                                 <li>2 Dog walks</li>
                                 <li>1 Vet Visit</li>
                                 <li>1 Pet Spa</li>
                                 <li>10 Vet Calls</li>
                                 <li>Free Support</li>
                              </ul>
                           </div>
                           <div className="plan-signup">
                              <a href="#" className="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>		
                    <div className="col-md-3 col-sm-6 res-margin">
                        <div className="pricing-table highlight-plan">				
                           <div className="plan-name">
                              <h4>Advanced</h4>
                               <div className="ribbon"><span>POPULAR</span></div>				      
                           </div>
                           <div className="plan-price">
                              <div className="price-value">$99<span>.00</span></div>
                              <div className="interval">per month</div>
                           </div>
                           <div className="plan-list">
                              <ul>
                                 <li>5 Dog walks</li>
                                 <li>3 Vet Visits</li>
                                 <li>5 Pet Spa</li>
                                 <li>20 Vet Calls</li>
                                 <li>Free Support</li>						 
                              </ul>
                           </div>
                           <div className="plan-signup">
                              <a href="#" className="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>			 
                     <div className="col-md-3 col-sm-6">
                        <div className="pricing-table res-margin">
                           <div className="plan-name">
                              <h4>Professional</h4>
                           </div>
                           <div className="plan-price">
                              <div className="price-value">$199<span>.00</span></div>
                              <div className="interval">per month</div>
                           </div>
                           <div className="plan-list">
                              <ul>
                                 <li>10 Dog walks</li>
                                 <li>5 Vet Visits</li>
                                 <li>10 Pet Spa</li>
                                 <li>40 Vet Calls</li>
                                 <li>Free Support</li>
                              </ul>
                           </div>
                           <div className="plan-signup">
                              <a href="#" className="btn btn-default">Sign Up Now</a>
                           </div>
                        </div>
                     </div>			 
                     <div className="col-md-3 col-sm-6">
                        <div className="pricing-table">
                           <div className="plan-name">
                              <h4>Extreme</h4>
                           </div>
                           <div className="plan-price">
                              <div className="price-value">$299<span>.00</span></div>
                              <div className="interval">per month</div>
                           </div>
                           <div className="plan-list">
                              <ul>
                                 <li><strong>Unlimited</strong> Dog walks</li>
                                 <li><strong>Unlimited</strong> Vet Visits</li>
                                 <li><strong>Unlimited</strong> Pet Spa</li>
                                 <li><strong>Unlimited</strong> Vet Calls</li>
                                 <li><strong>Unlimited</strong> Support</li>
                              </ul>
                           </div>
                           <div className="plan-signup">
                              <a href="#" className="btn btn-default btn-small">Sign Up Now</a>
                           </div>
                        </div>
                     </div>
                  </div> 
               </div>
            </section>
                
            <section id="call-to-action" className="small-section">
               <div className="container text-center">
                  <div className="col-md-offset-5 col-md-7 col-sm-12">
                     <h3>Discover our Pet Shop and Services</h3>
                     <p>Contact or learn more about us and make your pet happy in your visit to our Shop and discover all our amazing products and services to make your pet very healthy and active with a lot of energy this winter lorem ipsum ipsuet dolor.
                     </p>
                     <div className="page-scroll light-btn">
                        <a className="btn btn-default wow fadeInLeft" data-wow-delay="0.2s" href="#contact">Contact us</a> 
                        <a className="btn btn-default m-left wow fadeInRight" data-wow-delay="0.2s" href="#about">More about us</a>
                     </div>
                  </div>
               </div>
            </section>
            <section id="gallery" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Our Gallery</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container wow fadeInDown" data-wow-delay="0.2s">
                  <div className="nav-gallery col-md-12">
                        <ul className="list-inline nav type cat">
                           <li className="active"><a href="#" data-filter="*">All</a></li>
                           <li><a href="#" data-filter=".dogcat">Dogs and Cats</a></li>
                           <li><a href="#" data-filter=".other">Other Pets</a></li>
                        </ul>
                   </div>
                  <div className="row">
                    <div className="col-md-12">
                     <div id="lightbox">			 
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery1.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery1.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery6.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery6.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery3.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery3.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery4.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery4.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery5.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery5.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery2.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery2.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery7.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery7.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery8.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery8.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery9.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery9.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery10.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery10.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 other">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery11.jpg")} alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery11.jpg")} data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 dogcat">
                           <div className="portfolio-item">
                              <div className="gallery-thumb">
                                 <img className="img-responsive" src={require("../../styles/img/gallery12.jpg")}alt=""/>
                                 <span className="overlay-mask"></span>
                                 <a href={require("../../styles/img/gallery12.jpg")}data-gal="prettyPhoto[gallery]" className="link centered" title="You can add caption to pictures.">
                                 <i className="fa fa-expand"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
            </section>
             
            <section id="offers" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>This Month's Offers</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container wow fadeInDown" data-wow-delay="0.2s">
               <div className="row">
                  <div className="col-md-10 col-centered">
                     <div id="owl-offers" className="owl-carousel">
                        <div>
                           <div className="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src={require("../../styles/img/offer1.png")}className="img-responsive" alt=""/>
                           </div>
                           <div className="col-sm-7">
                              <div className="media-body">
                                 <h4>Vet Services: <span className="label label-default">20% OFF</span></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                    Quisque mauris augue, lorem tincidunt condimentum vitae uisque mauris augue, lorem ipsum  tincidunt condimentum vitae.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src={require("../../styles/img/offer2.png")}className="img-responsive" alt=""/>
                           </div>
                           <div className="col-sm-7">
                              <div className="media-body">
                                 <h4>Pet School: <span className="label label-default">30% OFF</span></h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
                                    Quisque mauris augue, lorem tincidunt condimentum vitae uisque mauris augue, lorem ipsum  tincidunt condimentum vitae.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="col-sm-4 col-md-3 col-sm-offset-1">
                              <img src={require("../../styles/img/offer3.png")}className="img-responsive" alt=""/>
                           </div>
                           <div className="col-sm-7">
                              <div className="media-body">
                                 <h4>Quality Pet Foods: <span className="label label-default">40% OFF</span></h4>
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
            
            <section id="adoption" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Adoption</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container">
                  <div className="row wow fadeInDown" data-wow-delay="0.2s">
                    <div className="col-md-4 col-sm-12 res-margin">
                       <img src={require("../../styles/img/adopt.jpg")}className="img-responsive" alt=""/>
                    </div>
                     <div className="col-md-8">			 					
                       <h3>Looking to Adopt an Animal?</h3>
                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ul tricies, vest ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sod ales felis tiam non metus ali quam eros accumsan mollis eget vitaeusm.
                          donec eget metus auguen unc vel mauris ul tricies, vest ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam e Aliquam erat volutpat phasellus ac sodales felis tiam non metus ali quam eros accumsan mollis eget vitae tel lusm. Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. Aliquam erat volutpat phasellus ac sodales felis tiam non metus ali quam eros accumsan mollis eget vi tae.
                       </p>							
                      </div>
                     
                     <div className="row">
                        <div className="col-md-5 col-sm-6">
                           <h4 className="text-center">Frequent Questions</h4>
                           <div className="panel-group" id="accordion">
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h5 className="panel-title">
                                       <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Is account registration required?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h5 className="panel-title">
                                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">How do I Apply?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h5 className="panel-title">
                                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">What documents do I need to Adopt?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseThree" className="panel-collapse collapse">
                                    <div className="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h5 className="panel-title">
                                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">How to choose an Pet?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseFour" className="panel-collapse collapse">
                                    <div className="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h5 className="panel-title">
                                       <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Are the animals neutered?</a>
                                    </h5>
                                 </div>
                                 <div id="collapseFive" className="panel-collapse collapse">
                                    <div className="panel-body">
                                       <p>Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit. 
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                                         
                        <div className="col-md-7 col-sm-6">
                          <h4 className="text-center">Find a New Friend</h4>				  				 				   
                           <div id="owl-adopt" className="owl-carousel owl-theme">
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption1.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Lilica</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 5 years</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#1" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption2.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Charlie</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> No</li>
                                             <li><strong>Age:</strong> 4 months</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#2" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption3.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Lucky</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 1 year</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#3" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption4.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Madalene</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> No</li>
                                             <li><strong>Age:</strong> 2 years</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#4" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption5.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Joanne</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Female</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 5 years</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#5" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
        
                              <div>
                                 <div className="col-md-12">
                                    <div className="thumbnail text-center">
                                       <img src={require("../../styles/img/adoption6.jpg")}className="img-circle img-responsive" alt=""/>
                                       <div className="caption-adoption">
                                          <h6>Cutesy</h6>
                                          <ul className="list-unstyled">
                                             <li><strong>Gender:</strong> Male</li>
                                             <li><strong>Neutered: </strong> Yes</li>
                                             <li><strong>Age:</strong> 2 years</li>
                                          </ul>	
                                          <div className="toggle-btn page-scroll text-center">
                                             <a href="#6" className=" btn btn-default">More Info</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                         </div>
                         
                           <div className="cd-panel from-right" id="1">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption1.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Lilica</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="cd-panel from-right" id="2">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption2.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Charlie</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
        
                           <div className="cd-panel from-right" id="3">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption3.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Lucky</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="cd-panel from-right" id="4">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption4.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Madalene</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>	
                           
                           <div className="cd-panel from-right" id="5">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption5.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Joanne</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="cd-panel from-right" id="6">
                              <div className="cd-panel-container">
                                 <div className="cd-panel-content">
                                    <div className="col-md-7 col-centered">
                                       <img src={require("../../styles/img/adoption6.jpg")}className="img-responsive" alt=""/>
                                    </div>
                                    <h3 className="text-center">Adopt Cutesy</h3>
                                    <p>Beatae expedita, itaque assumenda libero voluptatem adipisci maiores voluptas accusantium, blanditiis saepe culpa laborum iusto maxime quae aperiam fugiat odit consequatur soluta hic. Sed quasi beatae quia repellendus, adipisci facilis ipsa vel, aperiam, consequatur eaque mollitia quaerat. Iusto fugit inventore eveniet velit.</p>
                                    <div className="page-scroll text-center">
                                       <a href="#contact" className="cd-close btn btn-default">Adopt Now</a>  <a className="cd-close btn btn-danger m-left"><i className="fa fa-times"></i>Close</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                      </div>
                    </div>
                 </div>
                 </div>
             </section>
            
            <section id="brands" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Brands we work with</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container text-center">
                   <div className="row">
                 <div className="col-sm-6 col-md-3 res-margin">
                    <div className="well well-sm wow fadeInLeft">
                       <a href="#"><img src={require("../../styles/img/client1.png")}alt="client" className="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div className="col-sm-6 col-md-3 res-margin">
                    <div className="well well-sm wow fadeInLeft">
                       <a href="#"><img src={require("../../styles/img/client2.png")}alt="client" className="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div className="col-sm-6 col-md-3 res-margin">
                    <div className="well well-sm wow fadeInRight">
                       <a href="#"><img src={require("../../styles/img/client3.png")}alt="client" className="col-centered img-responsive"/></a>
                    </div>
                 </div>
                 <div className="col-sm-6 col-md-3">
                    <div className="well well-sm wow fadeInRight">
                       <a href="#"><img src={require("../../styles/img/client4.png")}alt="client" className="col-centered img-responsive"/></a>
                    </div>
                  </div>
                </div>	  
               </div>
            </section>
             
            <section id="contact" className="home-section">
               <div className="col-lg-8 col-lg-offset-2">
                  <div className="section-heading">
                     <h2>Get in touch</h2>
                     <div className="hr"></div>
                  </div>
               </div>
               <div className="container">
                   <div className="row">
                  <div className="margin col-md-4 col-sm-6 wow fadeInLeft" data-wow-delay="0.2s">
                     <h4>Information</h4>
                     <p>Contact for additional information:</p>
                     <p><i className="fa fa-envelope"></i><a href="mailto:youremailaddress">petshop@site.com</a> or call us</p>
                     <p><i className="fa fa-phone"></i>+1 (123) 456 7890</p>
                     <h4>Location & Time</h4>
                     <p><i className="fa fa-map-marker"></i>We are located at Pet City, 304.</p>
                     <p><i className="fa fa-clock-o"></i>Open from 9 a.m to 10 p.m on weekdays and from 9 a.m to 2 p.m in weekends.</p>
                  </div>
                  <div className="col-md-7 col-md-offset-1 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.2s">
                     <div className="form-style" id="contact_form">
                        <div id="contact_results"></div>
                        <div className="form-group">
                           <input type="text" name="name" className="form-control input-field" placeholder="Name" required/>
                        </div>
                        <div className="form-group">
                           <input type="email" name="email" className="form-control input-field"  placeholder="Email ID" required/>
                        </div>
                        <div className="form-group">
                           <input type="text" name="subject" className="form-control input-field" placeholder="Subject" required/>
                        </div>
                        <div className="form-group">
                           <textarea name="message" id="message" className="textarea-field form-control" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className="form-group">
                           <button type="submit" id="submit_btn" value="Submit" className="btn btn-default pull-right">Send message</button>
                        </div>				
                     </div>	
                  </div>
                </div>  
               </div> 
            </section>
            
            <div className="wow fadeInTop" data-wow-delay="0.2s">
               <div id="map-canvas"></div>
            </div>
                      
            <footer>
               <div className="container">
                  <div className="row wow fadeInUp" data-wow-delay="0.2s">
                     <div className="col-sm-6 col-md-4">
                        <ul className="social-media">
                           <li><a title="Facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                           <li><a title="Twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                           <li><a title="Google Plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                           <li><a  title="Linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                           <li><a  title="Flickr" href="#"><i className="fa fa-flickr"></i></a></li>
                           <li><a  title="Tumblr" href="#"><i className="fa fa-tumblr"></i></a></li>
                           <li><a  title="Instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                     </div>
                     <div className="col-sm-6 col-md-offset-5 col-md-3 text-center">
                        <p>COPYRIGHT © 2015-2018 Ingrid Kuhn</p>
                     </div>			 
                  </div>
               </div>
               <div className="page-scroll hidden-sm hidden-xs">
                  <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up"></i></a>
               </div>
            </footer>
            </body>
        );
    }
}
