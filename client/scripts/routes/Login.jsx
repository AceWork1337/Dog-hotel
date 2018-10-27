//import npm package
import React from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import {Row,Input,Icon,Button} from 'react-materialize';
//import components and containers

//import assets


export default class Login extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    
    //     this.handleChange = this.handleChange.bind(this);
    
    //     this.state = {
    //       value: ''
    //     };
    //   }
    
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
            <form>
            {/* <Input s={6} label="User Name" ><Icon>person</Icon></Input> */}
                {/* <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input> */}
                {/* <Input s={6} label="Last Name" /> */}

                <Input type="email" label="Email" s={12} ><Icon>email</Icon></Input>
                <Input type="password" label="password" s={12} ><Icon>lock</Icon></Input>
                <Button waves='light' node='a' href='/user'> Log in</Button>
            </form>
            </Row>
        </div>
        );
      }
    }
    