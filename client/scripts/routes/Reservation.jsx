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
                    <Autocomplete
                        title='Rasa'
                        data={
                        {
                            'Beagle': null,
                            'Samojed': null,
                            'PitBull': null,

                        }
                        }
                    />
                    <Input name='on'label="Pick date from" type='date' className='datepicker' onChange={this.ace} data-value={today}/>
                    <Input name='on' type='date' label="Pick date to" className='datepickertill'  data-value={today}/>
                    <Button waves='light' node='a' href='/login'> Make reservation</Button>
                </form>
                </Row>
            </div>
        );
    }
}
