import React from 'react';
import axios from 'axios';
import { Row, Col, Input, Icon, Button, Card, CardTitle, SideNav, SideNavItem ,Table} from 'react-materialize';
import $ from 'jquery';
import '../../styles/containers/AdminUsers.scss';
export default class reservationNoLogin extends React.Component {
    state = {
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
        persons: [],
      }

    // componentWillMount(){
        renderMovies = () => {
            axios.get("http://ciposhouse.mk/backend/reservationNoLogin")
            .then(res => {
                console.log(res.data);
                var movies=res.data;
                const persons = res.data;
                // if(movies){
                //     var result = [];
                //     movies.map(item => (
                //         console.log(item.email),
                //     result.push( "<div  >{item.email}</div>"  )
                //     ))
                //     return result;
                // }
                // else{ 
                //     return null
                // }
                this.setState({ persons });
            })
        }
componentDidMount(){
    if($(window).width()>=992){
        $('.disRow').css("display", "none");
    } else {
        $('.disRow').css("display", "block");
    }
    // $('')
}
        
    // }
    render(){
        // setInterval(this.renderMovies, 1000);
        console.log("aceace");
        console.log(this.renderMovies());
        console.log(this.state.persons);
        console.log($(window).width());
        return(
            <div id="petsres">
            {/* {this.renderMovies()} */}
            <Row>
                <Col s={12}>
                    {/* <Col s={4}> */}
                        <h3>List of reservations with out user</h3>
                        { this.state.persons.map(person => 
                            <Row>
                                <Col s={12}>
                                    <Table responsive bordered>
                                        <Row className="disRow">
                                        <thead>
                                            <tr>
                                                <th>User:&ensp;&ensp;{person.email}</th>
                                            </tr>
                                        </thead>
                                        </Row>
                                        <Row className="disRow">
                                        <tbody>
                                        <Row className="disRow">
                                            <tr>
                                                
                                                <td>First name:&ensp;{person.FirstName}</td>
                                                <td>Last name:&ensp;{person.LastName}</td>
                                                {/* <td>User phone:{person.user_phone}</td> */}
                                                <td>Breeds:&ensp;{person.breeds}</td>
                                                <td>Quantity:&ensp;{person.quantity}</td>
                                                <td>Sex:&ensp;{person.sex}</td>
                                                </tr>
                                                </Row>
                                                <Row className="disRow">
                                                <tr>
                                                <td>Pick Date To:&ensp;{person.PickDateTo}</td>
                                                <td>Pick Date From:&ensp;{person.PickDateFrom}</td>
                                                <td>Contact phone:&ensp;{person.phone}</td>
                                                <td>Requirements:&ensp;{person.Requirements}</td>
                                                <td>Birthday:&ensp;{person.BirthdayDog}</td>
                                                </tr></Row>
                                                <Row className="disRow">
                                                <tr>
                                                <td>Chip ID:&ensp;{person.chipID}</td>
                                                <td>Pet ID:&ensp;{person.petID}</td>
                                                <td>Sex:&ensp;{person.group1}</td>
                                                <td>Pet nick name:&ensp;{person.petNickname}</td>
                                                <td><input type="checkbox"/></td>
                                                {/* <td>email:{person.email}</td> */}
                                                {/* <td>Breeds:{person.Breeds}</td> */}
                                                
                                                
                                                {/* <td>Chip ID:{person.chipID}</td> */}
                                                
                                            </tr></Row>
                                        </tbody>
                            <hr/>

                                        </Row>
                                    </Table>    
                                </Col>
                            </Row>
                        )}
                    {/* </Col> */}
                    {/* <Col s={3}>
                    <h3>List of pets</h3>
                    { this.state.persons.map(person => 
                    <Row>
                        <Col s={12}>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>{person.firstName}&ensp;&ensp;{person.lastName}</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{person.email}</td>
                                        <td>{person.phone}</td>
                                        <td>{person.username}</td>
                                        </tr>
                                </tbody>
                        </Table>    
                        </Col>
                    </Row>
                    )}
                    </Col> */}
                </Col>
            </Row>
            </div>
        )
    }
}
