//import npm package
import React from 'react';

//import components and container-fluids
import {Nav, NavItem, Navbar} from 'react-bootstrap';
//import assets


export default class NotFound extends React.Component {

    // componentWillMount(){
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
       
    //   }

    render(){
        return(
            <div>
                <Navbar inverse  fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} id="homeButton" href="/">
                            HOME
                        </NavItem>
                        <NavItem eventKey={2} id="aboutButton">
                            ABOUT
                        </NavItem>
                        <NavItem eventKey={2} id="roomButton">
                            ROOMS & SUITES
                        </NavItem>
                        <NavItem eventKey={2} id="trainButton">
                            TRAINING
                        </NavItem>
                        <NavItem eventKey={2} id="faqButton">
                            FAQ
                        </NavItem>
                        <NavItem eventKey={2} id="contactButton">
                            CONTACT US
                        </NavItem>
                        <NavItem eventKey={2} href="/res">
                            Reservation
                        </NavItem>
                        <NavItem eventKey={2} href="/login">
                            Sign in
                        </NavItem>
                        <NavItem eventKey={2} href="reg">
                            Register
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}











