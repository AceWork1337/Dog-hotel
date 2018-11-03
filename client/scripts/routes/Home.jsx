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
            <div>
                {/* <Carousel style={{height: '100%'}}>
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
                <Slider id="topMedia">
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

            </div>
        );
    }
}
