//import npm package
import React from 'react';
import {Row,Input,Icon,Button} from 'react-materialize';
import axios from 'axios';
//import components and containers

//import assets


export default class Register extends React.Component {
    state = {
        username: '',
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        phone:''
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
      handleSubmit = event => {
        event.preventDefault();
    
        let user =JSON.stringify( {
          username: this.state.username,
          firstName: this.state.firstName,
        //   lastName: this.state.lastname,
        //   email: this.state.email,
        //   password: this.state.password,
        //   phone: this.state.phone,

        });
          
        console.log(user)
        axios.post(`http://localhost:3001/register`, {data:user},{headers:{'Content-Type':'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render(){
        return(
            // <div>
            //     <Row>
            //     <form onSubmit={this.handleSubmit}>
            //         <Input s={6} label="First Name" name="firstName"><Icon>account_circle</Icon></Input>
            //         <Input s={6} label="Last Name" name="lastName"/>
            //         <Input s={6} label="User Name" name="username"><Icon>person</Icon></Input>
            //         <Input type="password" label="password" name="password" s={6} ><Icon>lock</Icon></Input>
            //         <Input type="email" label="Email" name="email" s={6} ><Icon>email</Icon></Input>
            //         <Input s={6} label="Telephone" name="phone" validate type='number'><Icon>phone</Icon></Input>
            //         <Button waves='light' node='a' type="submit" href='/login'> Register</Button>
            //     </form>
            //     </Row>
            // </div>
            <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="username" onChange={this.handleChange.bind(this)} />
            <input type="text" name="firstName" onChange={this.handleChange.bind(this)} />

          </label>
          <button type="submit">Add</button>
        </form>
      </div>
        );
    }
}
