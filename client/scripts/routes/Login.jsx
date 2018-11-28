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
         
          username: '',
          firstName: '',
          lastName:'',
          email:'',
          password:'',
          phone:'',
          // islogin:false,
        }
      }
      //   handleChange = event => {
      //     this.setState({ username: event.target.value , firstName: event.target.value });
      //     // this.setState({ firstName: event.target.value });
      //     // this.setState({ lastName: event.target.value });
      //     // this.setState({ email: event.target.value });
      //     // this.setState({ password: event.target.value });
      //     // this.setState({ phone: event.target.value });
  
  
      //   }
        handleChange(e) {
          this.setState({ [e.target.name] : e.target.value });
          console.log(e.target.name);
          console.log(e.target.value);
          console.log("ova se zivki");
          console.log(this.state.username);
          console.log(this.state.firstName);
       }
      //  handleS(dd) {
      //   this.setState(this.state.islogin = dd);
      //   console.log(this.state.islogin);
      //  }
        handleSubmit = event => {
          event.preventDefault();
      
          let user =JSON.stringify( {
            email: this.state.email,
            password: this.state.password,
  
          });
            
          console.log(user)
          axios.post(`http://localhost:3001/log`, user,{headers:{'Content-Type':'application/json'}})
            .then(res => {
              console.log(res);
              console.log(res.data);
              let ace = res.data;
              console.log(ace);
              // this.setState(this.state.islogin = true);
              // console.log(this.state.islogin);
            })
            // .then(this.handleS(this.ace)
            // )
        };
        componentWillUpdate(){
          sessionStorage.setItem('eMail', this.state.email);
        }
      render() {
        let islogin = this.res;
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

                <Input type="email" label="Email" s={12} name="email" onChange={this.handleChange.bind(this)}><Icon>email</Icon></Input>
                <Input type="password" label="password" s={12} name="password" onChange={this.handleChange.bind(this)}><Icon>lock</Icon></Input>
                <Button waves='light'  href='/user' type="submit" > {islogin}<a href="/user">Log in</a></Button>
            </form>
            </Row>
        </div>
        );
      }
    }
    