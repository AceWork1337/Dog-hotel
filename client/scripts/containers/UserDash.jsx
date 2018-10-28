//import npm package
import React from 'react';
import {Row,Input,Icon,Button,Autocomplete} from 'react-materialize';

//import components and containers

//import assets


export default class UserDash extends React.Component {

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
                    <h5>Personal informations</h5>
                    <Input s={6} label="Change First Name" ><Icon>account_circle</Icon></Input>
                    <Input s={6} label="Change Last Name" />
                    <Input s={6} label="Change User Name" ><Icon>person</Icon></Input>
                    <Input type="password" label="Change password" s={6} ><Icon>lock</Icon></Input>
                    <Input type="email" label="Change Email" s={6} ><Icon>email</Icon></Input>
                    <Input s={6} label="Change Telephone" validate type='number'><Icon>phone</Icon></Input>
                    <h5>Your pet informations</h5>
                    <Input s={6} label="First Name in travel ID" />
                    <Input s={6} label="Nickname" />
                    <Row>
                        <Input type="file" label="File" s={12} multiple placeholder="Upload images from your pet" />
                    </Row>
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
                    {/* </Row>
                    <Row> */}
                    <Input s={2} name='group1' type='radio' value='masko' label='mashko' className='with-gap' />
                    <Input s={2} name='group1' type='radio' value='zensko' label='zensko' className='with-gap' />
                    </Row>
                    <Input s={3} name='on' type='date' label="Pick a birthday" className='datepicker' icon=' cake'  value={today}/>
                    <Input s={6} label="Chip ID" />
                    <Button waves='light' node='a' href='#'> Save changes</Button>
                </form>
                </Row>
            </div>
        );
    }
}
