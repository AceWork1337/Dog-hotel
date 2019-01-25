//import npm package
import React from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import {Row,Input,Icon,Button,Col} from 'react-materialize';
import axios from 'axios';
//import components and containers
import '../../styles/routes/Login.scss';
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
          islogin:false,
          isadmin:false,
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
          // console.log(e.target.name);
          // console.log(e.target.value);
          // console.log("ova se zivki");
          // console.log(this.state.username);
          // console.log(this.state.firstName);
       }
       
        handleSubmit = event => {
          event.preventDefault();
      
          let user =JSON.stringify( {
            email: this.state.email,
            password: this.state.password,
  
          });
            
          console.log(user)
          var self =this;
          axios.post(`http://34.244.230.153/backend/log`, user,{headers:{'Content-Type':'application/json'}})
            .then(res => {
              console.log("res");
              console.log(res);
              // console.log(res.data);
              let userlogin = res.data[0].user;
              let adminlogin = res.data[1].admin;
              console.log(userlogin);
              console.log(adminlogin);
              console.log("dali e true ili false")
              self.setState({islogin : userlogin});
              self.setState({isadmin : adminlogin});
              console.log(this.state.islogin);
              console.log(this.state.isadmin);              
              if(this.state.islogin == true && this.state.isadmin == false){
                sessionStorage.setItem('eMail', this.state.email);
                sessionStorage.setItem('firstName', this.state.firstName);
                sessionStorage.setItem('lastName', this.state.lastName);
                sessionStorage.setItem('islogin', this.state.islogin);
                sessionStorage.setItem('isadmin', this.state.isadmin);
                window.location.href = "/user";
              } else if(this.state.islogin == false && this.state.isadmin == true){
                sessionStorage.setItem('eMail', this.state.email);
                sessionStorage.setItem('firstName', this.state.firstName);
                sessionStorage.setItem('lastName', this.state.lastName);
                sessionStorage.setItem('islogin', this.state.islogin);
                sessionStorage.setItem('isadmin', this.state.isadmin);
                window.location.href = "/admin";
              } else {
                sessionStorage.removeItem('eMail');
                sessionStorage.removeItem('firstName');
                sessionStorage.removeItem('lastName');
                sessionStorage.removeItem('islogin');
                sessionStorage.removeItem('isadmin');
                window.location.href = "/login";
              }
              // console.log("islogin vo state");
            })
            // .then(
              // this.setState(this.state.islogin = this.ace),
              // console.log(this.state.islogin),
              // console.log("islogin vo state222")

            // )
        };
        componentWillMount(){
          if (sessionStorage.getItem('islogin')=="true" ){
            window.location.href = "/user"
          } else if (sessionStorage.getItem('isadmin')== "true") {
            window.location.href = "/admin"            
          }
          console.log("dali e logiran veke");
          console.log(sessionStorage.getItem('islogin'));
          console.log(sessionStorage.getItem('isadmin'));
          // sessionStorage.removeItem('islogin');
                // ;

        }
        // handleS(dd) {
        //   this.setState(this.state.islogin = dd);
        //   console.log(this.state.islogin);
        //   console.log("islogin vo state222");
  
        //  }
        // componentWillUpdate(){
          // sessionStorage.setItem('eMail', this.state.email);
          // sessionStorage.setItem('islogin', this.state.islogin);
        // }
      render() {
        let islogin = this.state.islogin;
        console.log(islogin);
        console.log("islogin");
        // if (islogin){
        //   var ds = <a href="/user">Log in</a>
        // } else {
        //   ds = <a href="/login">Log in</a>
        // }
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
        <Row>
          <Col s={1} m={3} l={4}></Col>
              <Col s={10}  m ={6} l={4}>
        <div className="loginDiv">
            
            <form onSubmit={this.handleSubmit}>
            {/* <Input s={6} label="User Name" ><Icon>person</Icon></Input> */}
                {/* <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input> */}
                {/* <Input s={6} label="Last Name" /> */}

                <Input type="email" label="Email" s={12} name="email" onChange={this.handleChange.bind(this)}><Icon>email</Icon></Input>
                <Input type="password" label="password" s={12} name="password" onChange={this.handleChange.bind(this)}><Icon>lock</Icon></Input>
                <Button waves='light'  type="submit"> Log in</Button>
            </form>
            
        </div>
        </Col>
            </Row>
        );
      }
    }
    
