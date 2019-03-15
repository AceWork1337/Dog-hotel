//import npm package
import React from 'react';
import { Row, Col, Input, Icon, Button, Card, CardTitle, SideNav, SideNavItem } from 'react-materialize';
import {BrowserRouter,Route , Switch,Link,NavLink} from 'react-router-dom';

//import components and containers
import Present from '../containers/Present.jsx';
import MakeReservationUser from '../containers/MakeReservationUser.jsx';
import PastReservationUser from '../containers/PastReservationUser.jsx';
import NotFound from '../routes/404.jsx';
import UserDash from '../containers/UserDash.jsx';
//import assets
import beagle from '../../styles/assets/img/beagle.jpg';
import samojed from '../../styles/assets/img/samojed.jpeg'
import '../../styles/routes/UserProfile.scss';
export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   news:'',
          email:sessionStorage.getItem('eMail'),
          firstName:sessionStorage.getItem('firstName'),
          lastName:sessionStorage.getItem('lastName'),

        //   login:'true',
        };
      } 
    //   componentWillMount(){
    //   let userinfo = sessionStorage.getItem('eMail');
    //   }
    logout () {
        sessionStorage.removeItem('eMail');
        sessionStorage.removeItem('islogin');
        sessionStorage.removeItem('isadmin');
        window.location.href = "/login";
    }
    render() {
        console.log(this.props);
        console.log(this.state.email)
        const userinfo = this.state.email;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;

        return (
            <BrowserRouter>
              <div id="userProfileDiv">
              <Row>
                    <Col s={12}>
                        <Col s={2} id="BBlock">
                    <Col s={12}>
                           
                            <SideNav
                            trigger={<Button>Profile menu</Button>}
                            options={{ closeOnClick: true }}
                            >
                            <SideNavItem userView
                                user={{
                                    background: require('../../styles/assets/img/samojed.jpeg'),
                                    image: require('../../styles/assets/img/samojed.jpeg'),
                                    name: `${firstName}" "${lastName}`,
                                    email: `${userinfo}`
                                }}
                            />
                            {/* <SideNavItem  icon='cloud'><Link to='#!icon'/>First Link With Icon</SideNavItem> */}
                            <SideNavItem ><NavLink exact to='/user'>Dashboard</NavLink></SideNavItem>
                            {/* <SideNavItem ><NavLink exact to='/admin/pastreservation'>Dosegasni rezervacii</NavLink></SideNavItem> */}
                            <SideNavItem ><NavLink exact to='/user/makereservation'>Rezerviraj</NavLink></SideNavItem>
                            {/* <SideNavItem divider /> */}
                            {/* <SideNavItem subheader>Tekovni</SideNavItem> */}
                            {/* <SideNavItem waves ><NavLink exact to='/admin/bill'>Presmetka</NavLink></SideNavItem> */}
                            </SideNav>
                            </Col>
                            {/* <Col s={12}>

                                    <Button waves='light' id="HomeB" ><a href="/">Home</a></Button>
                            </Col> */}
                            {/* <Col s={12}>
                                                    <Button waves='light' id="profileB" href="/user">Profile</Button>
                            </Col> */}
                            <Col s={12}>
                                <Button waves='light' id="logout" onClick={this.logout}>Sing out</Button>
                            </Col>
                        </Col>
                        <Col s={10}>
                        
                            <Switch>
                                {/* <Route  path="/user/pastreservation" exact component={PastReservationUser}/> */}
                                <Route  path="/user/makereservation" exact component={MakeReservationUser}/>
                                <Route  path="/user" exact component={UserDash}/>
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
