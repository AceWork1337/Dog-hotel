//import npm package
import React from 'react';
// import {Carousel,} from 'react-bootstrap';
import { Slider, Slide } from 'react-materialize';
//import components and containers

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
                <Slider >
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
            </div>
        );
    }
}
