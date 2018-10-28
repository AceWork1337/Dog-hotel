//import npm package
import React from 'react';
import { Row, Col, Input, Icon, Button, Card, CardTitle, SideNav, SideNavItem } from 'react-materialize';
import {BrowserRouter,Route , Switch,Link,NavLink} from 'react-router-dom';

//import components and containers
import Present from '../containers/Present.jsx';
import Reservations from '../containers/Reservations.jsx';
import Past from '../containers/Past.jsx';
import NotFound from '../routes/404.jsx';

//import assets
import beagle from '../../styles/assets/img/beagle.jpg';
import samojed from '../../styles/assets/img/samojed.jpeg'

export default class AdminPanel extends React.Component {

    render() {
        return (
            <BrowserRouter>
              <div>
              <Row>
                    <Col s={12}>
                        <Col s={2}>
                           
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
                            />
                            {/* <SideNavItem  icon='cloud'><Link to='#!icon'/>First Link With Icon</SideNavItem> */}
                            <SideNavItem ><NavLink exact to='/admin/present'>Prisutni milenici</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/past'>Milenici koi go poseitse gotelot</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/reservation'>Rezervacii</NavLink></SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>Tekovni</SideNavItem>
                            <SideNavItem waves ><NavLink exact to='/admin/bill'>Presmetka</NavLink></SideNavItem>
                            </SideNav>
                        </Col>
                        <Col s={10}>
                        
                            <Switch>
                                <Route  path="/admin/present" exact component={Present}/>
                                <Route  path="/admin/past" exact component={Past}/>
                                <Route  path="/admin/reservation" exact component={Reservations}/>
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
