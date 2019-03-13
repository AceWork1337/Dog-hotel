//import npm package
import React from 'react';
import { Carousel, Grid, Row, Col, Image } from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
import { Parallax ,ParallaxBanner} from 'react-scroll-parallax';
import ParallaxMousemove from 'react-parallax-mousemove';
import $ from 'jquery';
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
import HouseImg from '../../styles/assets/img/cipo-houseslider.jpg';
import HouseImgW from '../../styles/assets/img/cipo-housesliderW.png';
import DogImg1 from '../../styles/assets/img/GoldPet.png';
import DogImgHead from '../../styles/assets/img/cipo-houseslider-head.png';
import Fade from 'react-reveal/Fade';
export default class HomeParalax extends React.Component {
componentDidMount(){
  // $(window).scroll(function() {
  // let top = $(window).scrollTop();
  // let dogGold = $( ".goldDogDiv" ); 
  // console.log(top )
  // if(top < 300 && dogGold.css('margin-left')<"300px"){
  //   dogGold.animate({ "margin-left": "+=20px" },500 );
  //   console.log(dogGold.css('margin-left') );
  // }
  // })
}
  render() {

    const styleImgHouse = {
      // marginLeft : '248em',
      width: '105%',
      height: 'auto',
      opacity: '0.16',
      margin: '0px -600px'
    }
    const styleImg1 = {
      // marginLeft : '-310px',
      marginTop: '780px',
      width: '100%',

    }
    const styleImg2 = {
      marginLeft: '730px',
      width: '45%',
      // height:'200px',

    }
    const style = {
      outter: {
        backgroundImage: `url(${HouseImg})`,
        backgroundPosition: '0px 0px',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',

        // backgroundPositionY: '0',
        // width: '100%',
        // height:'1440px',
        // position: 'relative',
        overflow: 'hidden'
      },
      inner: {
        width: 700,
        height: 500,
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center'
      },
     
      infoLayerStyle: {
        position: 'relative',
        // marginTop: '-62%',
        // marginLeft: '-220%',
        width:'15%',
        marginTop:'-50%',
        marginLeft:'-10%',
      },
      infoLayerStyle2: {
        position: 'relative',
        // marginTop: '-40%',
        // marginLeft: '50rem',
        marginTop: '5%',
        width:'20%',
        marginLeft:'70%',
      },
      bgLayerStyle: {
        position: 'relative',
        // marginTop: '60%',
        // marginLeft: '-90%',
        height: '100%',
        transform: 'translate(-15%, 17%)',
        width:'55%',
        marginLeft:'30%',
        marginTop:'-30%',
      },
      bgLayerStyle2: {
        position: 'relative',
        // marginTop: '-13%',
        // marginLeft: '15%',
        height: '100%',
        width: '100%',
        // transform: 'translate(-15%, 17%)',
        // opacity: '0.3',
      }
    }
    return (
      <Row>
      <div className="home-page-paralax" style={style.outter}>

                  <Parallax className="goldDogDiv" x={[100, 200]} tagOuter="div">
                    <Image src={DogImg1} className="goldDog" />
                </Parallax>
                <Parallax className="headerDiv" x={[130, 90]} y={[0, 0]} tagOuter="div">
                    <Image src={DogImgHead} className="header" />
                </Parallax>

{/* <Fade left>
          <h1>React Reveal</h1>
        </Fade> */}
        {/* <div className="goldDogDiv">
 <img src={DogImg1} className="goldDog" />
 </div> */}
      </div>
      </Row>
    );
  }
}
