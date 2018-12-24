//import npm package
import React from 'react';
import $ from 'jquery';
//import components and container-fluids
import {Nav, NavItem, Navbar,Image,Button} from 'react-bootstrap';
//import assets
import logo from '../../styles/assets/img/logo-concept.png';
import '../../styles/components/Header.scss';
export default class HeaderEmpry extends React.Component {

    componentWillMount(){
       
       
      }
    componentDidMount(){
        // $(document).ready(function(){       
            // const logoD = this.logoDark;
            // if (window.location.pathname == "/") {
            // var scroll_start = 0;
            // var startchange = $('#about');
            //   $("#homeButton").click(function() {
            //     $('html, body').animate({
            //         scrollTop: $(".home-page").offset().top
            //     }, 2000);
            // });
            //   $("#aboutButton").click(function() {
            //     $('html, body').animate({
            //         scrollTop: $("#about").offset().top
            //     }, 2000);
            // });
            //   $("#ServicesButton").click(function() {
            //     $('html, body').animate({
            //         scrollTop: $(".ourServices").offset().top
            //     }, 2000);
            // });
            //   $("#contactButton").click(function() {
            //     $('html, body').animate({
            //         scrollTop: $("#contact").offset().top
            //     }, 2000);
            // });
            // // var newChange = $('.SliderCanvas');
            // var offset = startchange.offset();
            // offset.top-=100;
            // console.log(offset);
            //  if (startchange.length){
            // $(window).scroll(function() { 
            //    scroll_start = $(this).scrollTop();
            //    if(scroll_start > offset.top ) {
                // $(".navbar-inverse .container").fadeOut(3) ;
      
              //   $(".navbar-inverse .container").css({backgroundColor: 'white' ,'z-index':'9999',borderBottom:'1px solid black'}) ;
                  //  $(".navbar-inverse .container").css({'z-index':'9999'});
                  // $(".navbar-inverse .navbar-toggle").css({border:"none"});
              //   $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"black"});
              //   $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'white'});
                  //  $(".navbar-inverse .container .navbar-collapse ul li a").css({ 'color' : 'black'});
                  //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo_dark.png'));
                // } else{
                  // $(".navbar-inverse .container").css({'background-color': 'transparent','z-index':'0',borderBottom:'none'});
                  //  $(".navbar-inverse .container .navbar-collapse ul li a").css({ 'color' : 'white'})
                  //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo.png'));
              //   $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"white"});
              //   $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'transparent'});
      
      
                // }
                
            // });
            //  }
            // } 
            // else {
                // document.getElementById('homeButton').addEventListener("click", redirectF);
                // function redirectF () {
                //     windows.location.href="/"
                // }
                // document.getElementById('homeButton').href = "/home";

            // }
        //  });







    // ova treba za sing in
        if(sessionStorage.getItem("islogin") == "true" || sessionStorage.getItem("isadmin") == "true"){
            // $('#loginNavv').text('Sing Out');
            // console.log("vlegovvvv");
            document.getElementById("resButton").style.display = 'none';
            document.getElementById("regNavv").style.display = 'none';
            document.getElementById("loginNavv").textContent="PROFILE";
            document.getElementById("regNavv").style.display = 'none';
            // document.getElementById("logout").style.display = 'block';
            if (sessionStorage.getItem("islogin") == "true") {
                document.getElementById("loginNavv").href="/user";
            } else if (sessionStorage.getItem("isadmin") == "true") {
                document.getElementById("loginNavv").href="/admin";
            }
        }
        // console.log(sessionStorage.getItem("islogin"));
        // console.log("dadadadadada")
      }
    // logout () {
    //     sessionStorage.removeItem('eMail');
    //     sessionStorage.removeItem('islogin');
    //     sessionStorage.removeItem('isadmin');
    //     window.location.href = "/login";
    // }
    render(){
console.log(window.innerWidth);
        return(
            <div id="hedNavEmpty">
                <Navbar fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand pullLeft>
                        <Image src={logo} responsive />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} id="homeButton" href="/">
                            HOME
                        </NavItem>
                        <NavItem eventKey={2} id="aboutButton" href="/">
                            ABOUT
                        </NavItem>
                        {/* <NavItem eventKey={2} id="roomButton">
                            ROOMS & SUITES
                        </NavItem>
                        <NavItem eventKey={2} id="trainButton">
                            TRAINING
                        </NavItem> */}
                        <NavItem eventKey={2} id="ServicesButton" href="/">
                            OUR SERVICES
                        </NavItem>
                        <NavItem eventKey={2} id="contactButton" href="/">
                            CONTACT US
                        </NavItem>
                        <NavItem eventKey={2} id="resButton"href="/res" >
                            RESERVATION
                        </NavItem>
                        <NavItem eventKey={2} id="loginNavv" href="/login">
                            SING IN
                        </NavItem>
                        <NavItem eventKey={2} id="regNavv" href="/reg">
                            REGISTER
                        </NavItem>
                        {/* <Button waves='light' id="logout" onClick={this.logout}>Sing out</Button> */}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
      
        );
    }
}

















