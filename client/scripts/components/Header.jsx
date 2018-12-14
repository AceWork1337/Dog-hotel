//import npm package
import React from 'react';
// import $ from 'jquery';
//import components and container-fluids
import {Nav, NavItem, Navbar} from 'react-bootstrap';
//import assets


export default class NotFound extends React.Component {

    // componentDidMount(){
    //     $(document).ready(function(){       
    //       // const logoD = this.logoDark;
    //       var scroll_start = 0;
    //       var startchange = $('#about');
    //         $("#homeButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#topMedia").offset().top
    //           }, 2000);
    //       });
    //         $("#aboutButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#about").offset().top
    //           }, 2000);
    //       });
    //         $("#roomButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#rooms").offset().top
    //           }, 2000);
    //       });
    //       $("#trainButton").click(function() {
    //         $('html, body').animate({
    //             scrollTop: $("#train").offset().top
    //         }, 2000);
    //      });
    //      $("#faqButton").click(function() {
    //         $('html, body').animate({
    //             scrollTop: $("#faq").offset().top
    //         }, 2000);
    //      });
    //         $("#contactButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#contact").offset().top
    //           }, 2000);
    //       });
    //       // var newChange = $('.SliderCanvas');
    //       var offset = startchange.offset();
    //       offset.top-=100;
    //       // if(window.screen.availWidth <= 1440){
    //       //   offset.top-=50
    //       // }else {
    //       //   if(window.screen.availWidth <= 600){
    //       //     offset.top+=1500
    //       //   }
          
    //       // }
    //       console.log(offset);
    //        if (startchange.length){
    //       $(window).scroll(function() { 
    //          scroll_start = $(this).scrollTop();
    //          if(scroll_start > offset.top ) {
    //           // $(".navbar-inverse .container-fluid").fadeOut(3) ;
    
    //           $(".navbar-inverse .container-fluid").css({backgroundColor: 'white' ,'z-index':'9999',borderBottom:'1px solid black'}) ;
    //             //  $(".navbar-inverse .container-fluid").css({'z-index':'9999'});
    //             $(".navbar-inverse .navbar-toggle").css({border:"none"});
    //           $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"black"});
    //           $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'white'});
    //              $(".navbar-inverse .container-fluid .navbar-collapse ul li a").css({ 'color' : 'black'});
    //             //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo_dark.png'));
    //           } else{
    //             $(".navbar-inverse .container-fluid").css({'background-color': 'transparent','z-index':'0',borderBottom:'none'});
    //              $(".navbar-inverse .container-fluid .navbar-collapse ul li a").css({ 'color' : 'white'})
    //             //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo.png'));
    //           $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"white"});
    //           $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'transparent'});
    
    
    //           }
              
    //       });
    //        }
    //    });







    // ova treba za sing in
    //     if(sessionStorage.getItem("islogin") == "true" || sessionStorage.getItem("isadmin") == "true"){
    //         // $('#loginNavv').text('Sing Out');
    //         // console.log("vlegovvvv");
    //         document.getElementById("loginNavv").textContent="Profile";
    //         if (sessionStorage.getItem("islogin") == "true") {
    //             document.getElementById("loginNavv").href="/user";
    //         } else if (sessionStorage.getItem("isadmin") == "true") {
    //             document.getElementById("loginNavv").href="/admin";
    //         }
    //     }
    //     // console.log(sessionStorage.getItem("islogin"));
    //     // console.log("dadadadadada")
    //   }

    render(){
        return(
            // <div>
            //     <Navbar inverse  fluid collapseOnSelect>
            //         <Navbar.Header>
            //             <Navbar.Brand>
            //             <a href="#brand">React-Bootstrap</a>
            //             </Navbar.Brand>
            //             <Navbar.Toggle />
            //         </Navbar.Header>
            //         <Navbar.Collapse>
            //             <Nav pullRight>
            //             <NavItem eventKey={1} id="homeButton" href="/">
            //                 HOME
            //             </NavItem>
            //             <NavItem eventKey={2} id="aboutButton">
            //                 ABOUT
            //             </NavItem>
            //             <NavItem eventKey={2} id="roomButton">
            //                 ROOMS & SUITES
            //             </NavItem>
            //             <NavItem eventKey={2} id="trainButton">
            //                 TRAINING
            //             </NavItem>
            //             <NavItem eventKey={2} id="faqButton">
            //                 FAQ
            //             </NavItem>
            //             <NavItem eventKey={2} id="contactButton">
            //                 CONTACT US
            //             </NavItem>
            //             <NavItem eventKey={2} href="/res">
            //                 Reservation
            //             </NavItem>
            //             <NavItem eventKey={2} id="loginNavv" href="/login">
            //                 Sign in
            //             </NavItem>
            //             <NavItem eventKey={2} href="reg">
            //                 Register
            //             </NavItem>
            //             </Nav>
            //         </Navbar.Collapse>
            //     </Navbar>
            // </div>
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
        );
    }
}











