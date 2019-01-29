//import npm package
import React from 'react';
import {Carousel,Grid,Row,Col,Image} from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
import { Parallax } from 'react-scroll-parallax';
//import components and containers
// import Home from '../routes/Home.jsx';
// import UserProfile from '../routes/UserProfile.jsx';
// import AdminPanel from '../routes/AdminPanel.jsx';
// import Reservation from '../routes/Reservation.jsx';
import About from './About.jsx';
import Rooms from './Rooms.jsx';
// import NotFound from '../routes/404.jsx';
// import Login from '../routes/Login.jsx';
// import Register from '../routes/Register.jsx';
// import Header from '../components/Header.jsx';
import Faq from './Faq.jsx';
import Training from './Training.jsx';
import Contact from './Contact.jsx';
import '../../styles/routes/Home.scss';
//import assets
import SamoyedWall from '../../styles/assets/img/samoyedWall.jpg';
import SamoyedWhite from '../../styles/assets/img/SamoyedWhite.jpg';
import pethealth from '../../styles/assets/img/pet-health.jpg';
import pethotel from '../../styles/assets/img/pet-hotel.jpg';
import PetGrooming from '../../styles/assets/img/Pet-Grooming.jpg';

export default class HomeParalax extends React.Component {

    render() {
    const style = {
        backgroundColor : `black`,
        height:'80vh',

    }
    const styleImg1 = {
        marginLeft : '-222em',
        marginTop: '12%',
        width:'300px',
        height:'200px',
    }
    const styleImg2 = {
        marginLeft : '248em',
        width:'300px',
        height:'200px',
    }
        return (
           <div className="home-page-paralax" style={style}>
                <Parallax
                    className="custom-class"
                    offsetXMax={-200}
                    offsetXMin={200}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={pethotel} style={styleImg1}/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetXMax={200}
                    offsetXMin={-200}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={PetGrooming} style={styleImg2}/>
                </Parallax>
            </div> 
           
        );
    }
}
