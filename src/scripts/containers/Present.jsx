//import npm package
import React from 'react';
import {Row,Col,Input,Icon,Button,Card,CardTitle,Modal} from 'react-materialize';

//import components and containers
import ModalForDogsCards from './ModalForDogsCards.jsx';
//import assets
import akita from '../../styles/assets/img/akita.jpg';
import beagle from '../../styles/assets/img/beagle.jpg';
import samojed from '../../styles/assets/img/samojed.jpeg';
import haska from '../../styles/assets/img/haska.jpg';
import dognew from '../../styles/assets/img/dog-new.jpg';
import dognew2 from '../../styles/assets/img/dog-new2.jpg';
import dognew3 from '../../styles/assets/img/dog-new3.jpg';
class Pop extends React.Component {
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

export default class Present extends React.Component {
    render(){
        console.log(samojed)
        return(
            <div>
                <Row>
                    <Col s={12}>
                        <Col s={12} m={6} l={4} >
                            <Card horizontal responsive header={<CardTitle  image={beagle}></CardTitle>} >
                                <p>Gala ID:Greta</p>
                                <Pop/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={samojed}></CardTitle>}  >
                                <p>Aron ID:Brazil</p>
                                <Pop/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={haska}></CardTitle>}  >
                                <p>Aleks ID:Ake</p>
                                <Pop/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={dognew}></CardTitle>}  >
                                <p>Ringo ID:Baron</p>
                                <Pop/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={akita}></CardTitle>}  >
                                <p>Hektor ID:Velko</p>
                                <Pop/>
                            </Card>
                        </Col>
                        <Col s={12} m={6} l={4}>
                            <Card horizontal header={<CardTitle image={dognew3}></CardTitle>}  >
                                <p>Sarko ID:Bimbo</p>
                                <Pop/>
                            </Card>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}
