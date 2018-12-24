//import npm package
import React from 'react';
import {Row,Input,Icon,Button,Autocomplete} from 'react-materialize';
import axios from 'axios';
//import components and containers

//import assets

import '../../styles/routes/ReservationWithoutLogin.scss';
export default class Reservation extends React.Component {
    // constructor(){
        // super();
    //    this.handleDateChange = this.handleDateChange.bind(this);
    //   }
    //    handleDateChange(e){
    //        this.setState({roomData: { ...this.state.roomData, date: e.currentTarget.value }})
    //    }
    //  componentDidMount () {
    //     let year = $('.datepicker').pickadate('picker').get('highlight', 'yyyy');
    //     let day= $('.datepicker').pickadate('picker').get('highlight', 'dd');
    //     let month = $('.datepicker').pickadate('picker').get('highlight', 'mm');
    //     console.log(month);
    // }
    state = {
        FirstName:'',
        LastName:'',
        email:'',
        Breeds:'',
        numberof:'',
        phone:'',
        from:'',
        too:'',
        baranja:'',
        petID:'',
        petNickname:'',
        group1:'',
        on:'',
        chipID:'',
      }
      handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("ova se zivki");
        // console.log(this.state.username);
        // console.log(this.state.firstName);
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
          console.log(typeof user.quantity);
        console.log(user)
        axios.post(`http://localhost:3001/reservationNoLogin`, user,{headers:{'Content-Type':'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            // if(res.data == true){
            //   window.location.href = "/login";

            // }else {
            //   window.location.href = "/reg";

            // }
          })
      }
    render(){
        let today = new Date().toISOString().split("T")[0];
        let _this = this;
        return(
            <div id="ReservationWithoutLogin">
                 <Row>
                <form onSubmit={this.handleSubmit}>
                    <Input s={6} name="FirstName" label="First Name" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                    <Input s={6} name="LastName" label="Last Name" onChange={this.handleChange.bind(this)}/>
                    {/* <Input s={6} label="User Name" ><Icon>person</Icon></Input> */}
                    {/* <Input type="password" label="password" s={6} ><Icon>lock</Icon></Input> */}
                    <Input type="email" label="Email" name="email" s={6} onChange={this.handleChange.bind(this)}><Icon>email</Icon></Input>
                    {/* <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input> */}
                    <Input s={6} label="First Name in travel ID" name="petID" onChange={this.handleChange.bind(this)}/>
                    <Input s={6} label="Nickname" name="petNickname" onChange={this.handleChange.bind(this)}/>
                    <Row>
                    <Input
                        icon='pets'
                        s={4}
                        placeholder='Rasa'
                        data={
                        {
                            'Beagle': null,
                            'Samojed': null,
                            'PitBull': null,

                        }
                        }
                        name="Breeds"
                        onChange={this.handleChange.bind(this)}
                    />
                    </Row>
                    <Row>
                    <Input s={4} name="numberof" type='select' label='Broj na milenici' icon='more_vert' defaultValue='2' onChange={this.handleChange.bind(this)}>
                        <option value='1'>Eden</option>
                        <option value='2'>Dva</option>
                        <option value='3'>Tri</option>
                    </Input>
                    </Row>
                    <Row>
                    <Input s={2} name='group1' type='radio' value='masko' label='mashko' className='with-gap' onChange={this.handleChange.bind(this)}/>
                    <Input s={2} name='group1' type='radio' value='zensko' label='zensko' className='with-gap' onChange={this.handleChange.bind(this)}/>
                    </Row>
                    <Input s={3} name='from'label="Pick date from" type='date' className='datepicker'icon='date_range'  onChange={this.ace} value={today} onChange={this.handleChange.bind(this)}/>
                    <Input s={3} name='too' type='date' label="Pick date to" className='datepickertill' icon='date_range'  value={today} onChange={this.handleChange.bind(this)}/>
                    <Row>
                    <Input s={4} name="phone" label="Telephone" validate type='number' onChange={this.handleChange.bind(this)}><Icon>phone</Icon></Input>
                    </Row>
                    <Row>
                    <Input s={7} name="baranja"label='Ostanati baranja' type='textarea'onChange={this.handleChange.bind(this)} />
                    </Row>
                    <Input s={3} name='on' type='date' label="Pick a birthday" className='datepicker' icon=' cake'  value={today} onChange={this.handleChange.bind(this)}/>
                    <Input s={6} label="Chip ID" name="chipID" onChange={this.handleChange.bind(this)}/>
                    <Row>
                    <Button waves='light' tyoe="submit"> Make reservation</Button>
                    </Row>
                </form>
                </Row>
            </div>
        );
    }
}
