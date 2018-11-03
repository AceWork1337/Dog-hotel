//import npm package
import React from 'react';
import {Row, Input,Icon,Button} from 'react-materialize';
//import components and containers

//import assets


export default class ContactForm extends React.Component {
    render(){
        return(
            <div className="contactForm">
                <Row>
                    <Input xl={12} label="First Name" validate><Icon>account_circle</Icon></Input>
                    <Input xl={12} label="e-mail" validate type='email'><Icon>account_circle</Icon></Input>
                    
                    <Input xl={12} label="Subject" validate ><Icon>phone</Icon></Input>
                    <Input xl={12} label="Your message" type='textarea' />
                    <Button waves='light'>Send</Button>
                </Row>
            </div>
        );
    }
}
