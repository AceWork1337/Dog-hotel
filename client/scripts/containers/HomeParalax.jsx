//import npm package
import React from 'react';
import {Carousel,Grid,Row,Col,Image} from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
import { Parallax } from 'react-scroll-parallax';
import ParallaxMousemove from 'react-parallax-mousemove'
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
import HouseImg from '../../styles/assets/img/cipo-houseslider.png';
import HouseImgW from '../../styles/assets/img/cipo-housesliderW.png';
import DogImg from '../../styles/assets/img/cipo-dog.png';
import DogImg1 from '../../styles/assets/img/cipo-dog-1.png';
import DogImgHead from '../../styles/assets/img/cipo-houseslider-head.png';

export default class HomeParalax extends React.Component {

    render() {
  
    const styleImgHouse = {
        // marginLeft : '248em',
        width:'105%',
        height:'auto',
        opacity: '0.16',
        margin: '0px -600px'
    }
    const styleImg1 = {
        // marginLeft : '-310px',
        marginTop: '780px',
        width:'100%',
        
    }
    const styleImg2 = {
        marginLeft : '730px',
        width:'45%',
        // height:'200px',
        
    }
    const style = {
        outter: {
          backgroundImage: `url(${HouseImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width:'100%',
          position: 'relative',
          overflow: 'hidden'
        },
        inner: {
          width:700,
          height:500,
          position: 'absolute',
          margin:'auto',
          top:0,
          left:0,
          right:0,
          bottom:0,
          textAlign:'center'
        },
        header: {
          fontFamily: 'Open Sans Condensed',
          textTransform: 'uppercase',
          color: 'white',
          textShadow: '0px 0px 2px #43AABA',
          fontSize: '50px',
          marginTop: '35px',
          fontWeight: 600
        },
        paragraph: {
          fontFamily: 'Roboto',
          fontSize: '20px',
          color: 'white',
          letterSpacing: '0.62px',
          lineHeight: '30px',
          fontWeight: 300
        },
        button: {
          fontFamily: 'Roboto',
          borderRadius: '100px',
          background: '#247B8A',
          textDecoration: 'none',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          marginTop: '40px',
          fontWeight: 100,
          display: 'block'
        },
        infoLayerStyle: {
          position: 'relative',
          marginTop: '-62%',
          marginLeft: '-220%',
        },
        infoLayerStyle2: {
            position: 'relative',
            marginTop: '-40%',
            marginLeft: '50rem',
          },
        bgLayerStyle: {
          position: 'relative',
          marginTop: '60%',
          marginLeft:'-90%',
          height: '100%',
          transform: 'translate(-15%, 17%)',
        },
        bgLayerStyle2: {
            position: 'relative',
            marginTop: '-13%',
            marginLeft:'15%',
            height: '100%',
            width:'100%',
            transform: 'translate(-15%, 17%)',
            opacity: '0.3',
          }
      }
        return (
           <div className="home-page-paralax" style={style}>
           {/* <img id="ss" src={HouseImg}></img> */}
                {/* <Parallax
                    className="custom-class"
                    offsetXMax={-30}
                    offsetXMin={30}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={HouseImg} style={styleImgHouse}/>
                </Parallax> */}
                {/* <Parallax
                    className="custom-class"
                    offsetYMax={200}
                    offsetYMin={800}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={DogImgHead} />
                </Parallax> */}
                {/* <Parallax
                
                    className="custom-class"
                    offsetXMax={-50}
                    offsetXMin={50}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={DogImg1} style={styleImg1}/>
                </Parallax> */}
                {/* <Parallax
                    className="custom-class"
                    offsetYMax={200}
                    offsetYMin={-200}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src={DogImg} style={styleImg2}/>
                </Parallax> */}
                <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle2} config={{
              xFactor: 0.05,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={HouseImgW} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <div style={style.inner}>
          <ParallaxMousemove.Layer  layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.02,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 50
              }
            }}>
            <img src={DogImgHead}  alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
            {/* <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={DogImg1} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer> */}
            
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.05,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={DogImg1} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle2} config={{
                xFactor: 0,
                yFactor: -0.1,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={DogImg} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
          </div>
        </ParallaxMousemove>
            </div> 
           
        );
    }
}
