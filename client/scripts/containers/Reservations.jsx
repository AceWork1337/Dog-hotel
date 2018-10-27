//import npm package
import React from 'react';
import {Row,Col,Input,Icon,Button,Card,CardTitle,Modal} from 'react-materialize';

//import components and containers
import ModalForDogsCards from './ModalForDogsCards.jsx';
//import assets
import beagle from '../../styles/assets/img/beagle.jpg';
import samojed from '../../styles/assets/img/samojed.jpeg'

class Pop2 extends React.Component {
    render(){
        return(
            <Modal
                header='Modal Header'
                fixedFooter
                trigger={<Button >More</Button>}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Modal>
        );
    }
}

export default class Reservations extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <Col s={12}>
                        <Col s={12} m={6} l={4} >
                            <Card horizontal responsive header={<CardTitle  image={beagle}></CardTitle>} >
                                <p>Gala Stratrova</p>
                                <Pop2/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={beagle}></CardTitle>}  >
                                <p>Aron Stojanovikj</p>
                                <Pop2/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={beagle}></CardTitle>}  >
                                <p>Gala Stratrova</p>
                                <Pop2/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={samojed}></CardTitle>}  >
                                <p>Aron Stojanovikj</p>
                                <Pop2/>
                            </Card>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}
