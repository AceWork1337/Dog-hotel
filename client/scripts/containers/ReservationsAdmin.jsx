import React from 'react';
import axios from 'axios';
import { Row, Col, Input, Icon, Button, Card, CardTitle, SideNav, SideNavItem ,Table} from 'react-materialize';

import '../../styles/containers/AdminUsers.scss';
export default class ReservationsAdmin extends React.Component {
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
            axios.get("http://34.244.230.153/backend/allreservations")
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

        
    // }
    render(){
        // setInterval(this.renderMovies, 1000);
        console.log("aceace");
        console.log(this.renderMovies());
        return(
            <div id="pets">
            {/* {this.renderMovies()} */}
            <Row>
                <Col s={12}>
                    {/* <Col s={4}> */}
                        <h3>List of reservations</h3>
                        { this.state.persons.map(person => 
                            <Row>
                                <Col s={12}>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>User:&ensp;&ensp;{person.email}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>First name:&ensp;{person.firstName}</td>
                                                <td>User phone:&ensp;{person.user_phone}</td>
                                                <td>Contact phone:&ensp;{person.phone}</td>
                                                <td>Breeds:&ensp;{person.breeds}</td>
                                                <td>Quantity:&ensp;{person.quantity}</td>
                                                <td>Sex:&ensp;{person.group1}</td>
                                                <td>Pick Date To:&ensp;{person.PickDateTo}</td>
                                                <td>Pick Date From:&ensp;{person.PickDateFrom}</td>
                                                <td>Sex:&ensp;{person.group1}</td>
                                                <td>Quantity:&ensp;{person.quantity}</td>
                                                <td>Requirements:&ensp;{person.Requirements}</td>
                                                {/* <td>email:{person.email}</td> */}
                                                {/* <td>Breeds:{person.Breeds}</td> */}
                                                
                                                <td>Birthday:&ensp;{person.BirthdayDog}</td>
                                                {/* <td>Chip ID:{person.chipID}</td> */}
                                                
                                            </tr>
                                        </tbody>
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
