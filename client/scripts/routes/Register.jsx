//import npm package
import React from 'react';
import {Row,Input,Icon,Button} from 'react-materialize';

//import components and containers

//import assets


export default class Register extends React.Component {

    render(){
        return(
            <div>
                <Row>
                <form>
                    <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input>
                    <Input s={6} label="Last Name" />
                    <Input s={6} label="User Name" ><Icon>person</Icon></Input>
                    <Input type="password" label="password" s={6} ><Icon>lock</Icon></Input>
                    <Input type="email" label="Email" s={6} ><Icon>email</Icon></Input>
                    <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                    <Button waves='light' node='a' href='/login'> Register</Button>
                </form>
                </Row>
            </div>
        );
    }
}
