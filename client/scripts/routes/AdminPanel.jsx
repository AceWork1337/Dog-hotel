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
                            trigger={<Button>SIDE NAV DEMO</Button>}
                            options={{ closeOnClick: true }}
                            >
                            <SideNavItem userView
                                user={{
                                name: 'John Doe',
                                email: 'jdandturk@gmail.com'
                                }}
                            />
                            {/* <SideNavItem  icon='cloud'><Link to='#!icon'/>First Link With Icon</SideNavItem> */}
                            <SideNavItem ><NavLink exact to='/admin/present'>Second Link</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/past'>ond Link</NavLink></SideNavItem>
                            <SideNavItem ><NavLink exact to='/admin/reservation'>ecd Link</NavLink></SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>Subheader</SideNavItem>
                            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
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
