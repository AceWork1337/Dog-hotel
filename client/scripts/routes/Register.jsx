//import npm package
import React from 'react';
import {Row,Input,Icon,Button} from 'react-materialize';
import axios from 'axios';
//import components and containers
import '../../styles/routes/Register.scss';
//import assets


export default class Register extends React.Component {
    state = {
        username: '',
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        phone:'',
        isCreate:false,
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
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          phone: this.state.phone,

        });
          
        console.log(user)
        axios.post(`http://34.244.230.153/backend/register`, user,{headers:{'Content-Type':'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data == true){
              window.location.href = "/login";

            }else {
              window.location.href = "/reg";

            }
          })
      }
    render(){
        return(
            <div className="registerDiv">
                <Row>
                <form onSubmit={this.handleSubmit}>
                    <Input s={12} type="text" label="First Name" name="firstName" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                    <Input s={12} type="text" label="Last Name" name="lastName" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                    <Input s={12} type="text" label="User Name" name="username" onChange={this.handleChange.bind(this)}><Icon>person</Icon></Input>
                    <Input type="password" label="password" name="password" s={12} onChange={this.handleChange.bind(this)} ><Icon>lock</Icon></Input>
                    <Input type="email" label="Email" name="email" s={12} onChange={this.handleChange.bind(this)}><Icon>email</Icon></Input>
                    <Input s={12} label="Telephone" name="phone" validate type='number'onChange={this.handleChange.bind(this)}><Icon>phone</Icon></Input>
                    <Button waves='light'  type="submit"  > Register</Button>
                </form>
                </Row>
            </div>
      //       <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Person Name:
      //       <input type="text" name="username" onChange={this.handleChange.bind(this)} />
      //       <input type="text" name="firstName" onChange={this.handleChange.bind(this)} />

      //     </label>
      //     <Button type="submit">Add</Button>
      //   </form>
      // </div>
        );
    }
}
