//import npm package
import React from 'react';
import { Row, Col, Button} from 'react-materialize';
import {BrowserRouter,Route , Switch,Link} from 'react-router-dom';
// import axios from 'axios';
//import components and containers
// import Present from '../containers/Present.jsx';
// import Reservations from '../containers/Reservations.jsx';
// import Past from '../containers/Past.jsx';
import NotFound from '../routes/404.jsx';
import AdminDash from '../containers/AdminDash.jsx';
import Users from '../containers/Users.jsx';
import Pets from '../containers/Pets.jsx';
import ReservationsAdmin from '../containers/ReservationsAdmin.jsx';
import ReservationNoLogin from '../containers/ReservationNoLogin.jsx';
import ContactAdmin from '../containers/ContactAdmin.jsx';

import '../../styles/routes/UserProfile.scss';
//import assets
// import beagle from '../../styles/assets/img/beagle.jpg';
// import samojed from '../../styles/assets/img/samojed.jpeg'


export default class AdminPanel extends React.Component {
    logout () {
        sessionStorage.removeItem('eMail');
        sessionStorage.removeItem('islogin');
        sessionStorage.removeItem('isadmin');
        window.location.href = "/login";
    }
    render() {
        return (
            <BrowserRouter basename="/admin">
              <div id="userProfileDiv">
              <Row>
              <Col s={12}>
                        <Col s={11} l={2} id="BBlock">
                    {/* <Col s={12}>
                           
                            <SideNav
                            trigger={<Button>Admin menu</Button>}
                            options={{ closeOnClick: true }}
                            >
                            <SideNavItem userView
                                user={{
                                    background: require('../../styles/assets/img/samojed.jpeg'),
                                    image: require('../../styles/assets/img/samojed.jpeg'),
                                    name: 'John Doe',
                                    email: 'jdandturk@gmail.com'
                                }}
                            /> */}
                            {/* <SideNavItem  icon='cloud'><Link to='#!icon'/>First Link With Icon</SideNavItem> */}
                            
                            {/* <SideNavItem ><NavLink exact to='/admin/users'>Users</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/pets'>Pets</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/reservation'>Reservations</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/reservationNoLogin'>Reservations without user</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/contact-questions'>Contact-questions</NavLink></SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>Tekovni</SideNavItem>
                            <SideNavItem waves ><NavLink exact to='/admin/bill'>Presmetka</NavLink></SideNavItem>
                            </SideNav>
                        </Col> */}
                        {/* <Col s={12}> */}
                        <Button><Link to='/'>Add Users</Link></Button>
                        <Button><Link to='/users'>Users</Link></Button>
                            <Button><Link to='/pets'>Pets</Link></Button>
                            {/* <Button><NavLink exact to='/admin/reservation'>Reservations</NavLink></Button> */}
                            <Button><Link to='/reservationNoLogin'>Reservations</Link></Button>
                            <Button><Link to='/contact-questions'>Contact-questions</Link></Button>
                                <Button waves='light' id="logout" onClick={this.logout}>Sing out</Button>
                            {/* </Col> */}
                        </Col>
                        <Col s={12} l={9}>
                        
                            <Switch>
                                
                                <Route  path="/users"  component={Users}/>
                                <Route  path="/pets"  component={Pets}/>
                                {/* <Route  path="/admin/present" exact component={Present}/> */}
                                {/* <Route  path="/admin/past" exact component={Past}/> */}
                                <Route  path="/reservationNoLogin"  component={ReservationNoLogin}/>
                                <Route  path="/reservation"  component={ReservationsAdmin}/>
                                <Route  path="/contact-questions"  component={ContactAdmin}/>
                                <Route  path="/" exact component={AdminDash}/>
                                <Route  component={NotFound}/>
                            </Switch>
                            
                        </Col>
                    </Col>
                </Row>
                
                {/* <Footer/> */}

              </div>
            </BrowserRouter>
            );
    }
}
