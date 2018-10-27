//import npm package
import React from 'react';
import {Row,Input,Icon,Button,Autocomplete} from 'react-materialize';

//import components and containers

//import assets


export default class Reservation extends React.Component {
    constructor(){
        super();
    //    this.handleDateChange = this.handleDateChange.bind(this);
      }
    //    handleDateChange(e){
    //        this.setState({roomData: { ...this.state.roomData, date: e.currentTarget.value }})
    //    }
     componentDidMount () {
        let year = $('.datepicker').pickadate('picker').get('highlight', 'yyyy');
        let day= $('.datepicker').pickadate('picker').get('highlight', 'dd');
        let month = $('.datepicker').pickadate('picker').get('highlight', 'mm');
        console.log(month);
    }

    render(){
        let today = new Date().toISOString().split("T")[0];
        let _this = this;
        return(
            <div>
                <Row>
                <form>
                    {/* <Input s={6} label="First Name" ><Icon>account_circle</Icon></Input> */}
                    {/* <Input s={6} label="Last Name" /> */}
                    {/* <Input s={6} label="User Name" ><Icon>person</Icon></Input> */}
                    {/* <Input type="password" label="password" s={6} ><Icon>lock</Icon></Input> */}
                    {/* <Input type="email" label="Email" s={6} ><Icon>email</Icon></Input> */}
                    {/* <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input> */}
                    <Row>
                    <Autocomplete
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
                        
                    />
                    </Row>
                    <Row>
                    <Input s={4} type='select' label='Broj na milenici' icon='more_vert' defaultValue='2'>
                        <option value='1'>Eden</option>
                        <option value='2'>Dva</option>
                        <option value='3'>Tri</option>
                    </Input>
                    </Row>
                    <Row>
                    <Input s={2} name='group1' type='radio' value='masko' label='mashko' className='with-gap' />
                    <Input s={2} name='group1' type='radio' value='zensko' label='zensko' className='with-gap' />
                    </Row>
                    <Input s={3} name='on'label="Pick date from" type='date' className='datepicker'icon='date_range'  onChange={this.ace} data-value={today}/>
                    <Input s={3} name='on' type='date' label="Pick date to" className='datepickertill' icon='date_range'  data-value={today}/>
                    <Row>
                    <Input s={4} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                    </Row>
                    <Row>
                    <Input s={7} label='Ostanati baranja' type='textarea' />
                    </Row>

                    <Row>
                    <Button waves='light' node='a' href='/user'> Make reservation</Button>
                    </Row>
                </form>
                </Row>
            </div>
        );
    }
}
