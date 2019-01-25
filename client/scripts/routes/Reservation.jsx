//import npm package
import React from "react";
import {Row,Col,Input,Icon,Button} from "react-materialize";
import axios from "axios";
//import components and containers
import "../../styles/routes/ReservationWithoutLogin.scss";
//import assets


export default class Reservation extends React.Component {
    state = {
        FirstName:"",
        LastName:"",
        email:"",
        Breeds:"",
        numberof:"",
        phone:"",
        from:"",
        too:"",
        baranja:"",
        petID:"",
        petNickname:"",
        group1:"",
        on:"",
        chipID:"",
    }
    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("this is inputs");
    }
    handleSubmit = event => {
        event.preventDefault();
    
        let user =JSON.stringify( {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            Breeds: this.state.Breeds,
            quantity: this.state.numberof,
            sex: this.state.group1,
            PickDateTo: this.state.too,
            PickDateFrom: this.state.from,
            Phone: this.state.phone,
            Requirements: this.state.baranja,
            BirthdayDog: this.state.on,
            chipID: this.state.chipID,
            petID: this.state.petID,
            petNickname: this.state.petNickname,
        });

        console.log(user)

        axios.post(`http://34.244.230.153/backend/reservationNoLogin`, user, {headers:{"Content-Type":"application/json"}})
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data == true) {
                    window.location.href = "/";
                } else {
                    window.location.href = "/res";
                }
            })
    }
    render() {
        let today = new Date().toISOString().split("T")[0];
        let _this = this;
        return (
            <div id="ReservationWithoutLogin">
                <Row>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Personal info</h4>
                        <Row>
                            <Input s={12} m={6} name="FirstName" label="First Name" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                            <Input s={12} m={6} name="LastName" label="Last Name" onChange={this.handleChange.bind(this)}><Icon>person</Icon></Input>
                        </Row>
                        <Row>
                            <Input s={12} m={6} name="email" label="Email" type="email" onChange={this.handleChange.bind(this)}><Icon>email</Icon></Input>
                            <Input s={12} m={6} name="phone" label="Telephone" type="number" onChange={this.handleChange.bind(this)}><Icon>phone</Icon></Input>
                        </Row>
                        <h4>Pet's info</h4>
                        <Row>
                            <Input s={12} m={6} name="petID" label="First Name in travel ID" onChange={this.handleChange.bind(this)}/>
                            <Input s={12} m={6} name="petNickname" label="Nickname" onChange={this.handleChange.bind(this)}/>
                        </Row>
                        <Row>
                            <Input s={12} m={4} name="Breeds" label="Breeds" icon="pets"onChange={this.handleChange.bind(this)}/>
                            <Col hidden-s m={2}></Col>
                            <Input s={12} m={3} name="group1" type="radio" value="masko" label="Male" className="with-gap" onChange={this.handleChange.bind(this)}/>
                            <Input s={12} m={3} name="group1" type="radio" value="zensko" label="Female" className="with-gap" onChange={this.handleChange.bind(this)}/>
                        </Row>
                        <Row>
                            <Input s={12}  m={4} name="numberof" label="Quantity" type="select" icon="more_vert" defaultValue="2" onChange={this.handleChange.bind(this)}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Input>
                            <Input s={12} m={4} name="from" label="Pick date from" type="date" icon="date_range" className="datepicker" onChange={this.ace} value={today} onChange={this.handleChange.bind(this)}/>
                            <Input s={12} m={4} name="too" label="Pick date to" type="date" icon="date_range" value={today} className="datepickertill" onChange={this.handleChange.bind(this)}/>
                        </Row>
                        <Row>
                            <Input s={12} m={4} name="on" label="Pick a birthday" type="date" className="datepicker" icon="cake" value={today} onChange={this.handleChange.bind(this)}/>
                            <Input s={12} m={6} label="Chip ID" name="chipID" onChange={this.handleChange.bind(this)}/>
                        </Row>
                        <Row>
                            <Input s={12} m={7} name="baranja" label="Requirements:" type="textarea" onChange={this.handleChange.bind(this)}/>
                            <Col hidden-s m={3}></Col>
                            <Button s={12} m={2} waves="light" type="submit" onClick={() => {window.Materialize.toast('Reservation created', 5000)}}> Make reservation</Button>
                        </Row>
                    </form>
                </Row>
            </div>
        );
    }
}
