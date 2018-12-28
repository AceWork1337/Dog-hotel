//import npm package
import React from "react";
import {Row, Input,Icon,Button} from "react-materialize";
import axios from "axios";
//import components and containers

//import assets


export default class ContactForm extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        // this.handleChange = this.handleChange.bind(this);
    
        this.state = {
         
          username: "",
          firstName: "",
          lastName:"",
          email:"",
          password:"",
          phone:"",
          req:"",
          islogin:false,
          isadmin:false,
          status:"",
        }
      }

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
          firstName: this.state.firstName,
          phone: this.state.phone,
          req: this.state.req,
        });
          
        console.log(user)
        var self =this;
        axios.post(`http://localhost:3001/contactform`, user,{headers:{"Content-Type":"application/json"}})
          .then(res => {
            console.log("res");
            console.log(res);
            if (res.data == true) {
                const status = res.data;
                this.setState({ status });
                console.log(this.state.status);
                // component.forceUpdate();
                // this.setState(status=true);
                // this.shouldComponentUpdate();
            }
            // console.log(res.data);
            // let userlogin = res.data[0].user;
            // let adminlogin = res.data[1].admin;
            // console.log(userlogin);
            // console.log(adminlogin);
            // console.log("dali e true ili false")
            // self.setState({islogin : userlogin});
            // self.setState({isadmin : adminlogin});/
            // console.log(this.state.islogin);
            // console.log(this.state.isadmin);              
            // console.log("islogin vo state");
          })
          // .then(
            // this.setState(this.state.islogin = this.ace),
            // console.log(this.state.islogin),
            // console.log("islogin vo state222")

          // )
      };
      
    render(){
        return(
            <div className="contactForm">
                <Row>
                    <form onSubmit={this.handleSubmit}>
                        <Input s={10} name="firstName" label="First Name" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                        <Input s={10} name="email" label="e-mail" type="email" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                        <Input s={10} name="phone" label="Phone" onChange={this.handleChange.bind(this)}><Icon>phone</Icon></Input>
                        <Input s={10} name="req" label="Your message" type="textarea" onChange={this.handleChange.bind(this)}/>
                        <Button waves="light" type="submit" onClick={() => {window.Materialize.toast("Contact form send!", 5000)}}>Send</Button>
                    </form>
                </Row>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.status.value != nextState.status.value;
      }
      componentWillUpdate(nextProps, nextState) {
          if(this.shouldComponentUpdate()==true){
            this.render();
          }
      }
}
 