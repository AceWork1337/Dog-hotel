import React from 'react';
import axios from 'axios';
import { Row, Col, Input, Icon, Button, Card, CardTitle, SideNav, SideNavItem ,Table} from 'react-materialize';

import '../../styles/containers/AdminUsers.scss';
export default class ContactAdmin extends React.Component {
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
            axios.get("http://ciposhouse.mk/backend/adminreservations")
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
            <div id="users">
            {/* {this.renderMovies()} */}
            <Row>
                <Col s={12}>
                    {/* <Col s={4}> */}
                        <h3>List of questions</h3>
                        { this.state.persons.map(person => 
                            <Row>
                                <Col s={12}>
                                    <Table responsive bordered>
                                        <thead>
                                            <tr>
                                                <th>First name :&ensp;&ensp;{person.firstName}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>email:&ensp;{person.email}</td>
                                                <td>Req :&ensp;{person.req}</td>
                                                
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
