//import npm package
import React from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import {Row,Input,Icon,Button} from 'react-materialize';
import axios from 'axios';
//import components and containers

//import assets


export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        // this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    //   getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 10) return 'success';
    //     else if (length > 5) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    //   }
    
    //   handleChange(e) {
    //     this.setState({ value: e.target.value });
    //   }
    // componentDidMount() {
        //  blabla = function ace () {
        // axios.post('http://localhost:3001/log', {
        //     email: "acea@ace.com",
        //     password: "ace"
        //   })
        //   .then(function (response) {
        //       console.log("zivka");
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // }

        // handleSubmit(event) {
        //     event.preventDefault();
        //     const data = new FormData(event.target);
            
        //     fetch('http://localhost:3001/log', {
        //       method: 'POST',
        //       body: data,
        //     })
        //     .then(function (response) {
        //               console.log("zivka");
        //             console.log(response);
        //           })
        //   }
    // }
      render() {
        return (
        //   <form>
        //     <FormGroup
        //       controlId="formBasicText"
        //       validationState={this.getValidationState()}
        //     >
        //       <ControlLabel>Working example with validation</ControlLabel>
        //       <FormControl
        //         type="text"
        //         value={this.state.value}
        //         placeholder="Enter text"
        //         onChange={this.handleChange}
        //       />
        //       <FormControl.Feedback />
        //       <HelpBlock>Validation is based on string length.</HelpBlock>
        //     </FormGroup>
        //   </form>
        <div>
            <Row>
            <form onSubmit={this.handleSubmit}>
            {/* <Input s={6} label="User Name" ><Icon>person</Icon></Input> */}
                {/* <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input> */}
                {/* <Input s={6} label="Last Name" /> */}

                <Input type="email" label="Email" s={12} ><Icon>email</Icon></Input>
                <Input type="password" label="password" s={12} ><Icon>lock</Icon></Input>
                <Button waves='light' node='a' href='/user' type="submit"> Log in</Button>
            </form>
            </Row>
        </div>
        );
      }
    }
    