//import npm package
import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter,Route , Switch} from 'react-router-dom';
//favicon
// import Favicon from 'react-favicon';

//import components and containers
import Home from '../routes/Home.jsx';
import Rooms from '../containers/Rooms.jsx';
import UserProfile from '../routes/UserProfile.jsx';
import AdminPanel from '../routes/AdminPanel.jsx';
import Reservation from '../routes/Reservation.jsx';
import About from '../containers/About.jsx';
import Contact from '../containers/Contact.jsx';
import NotFound from '../routes/404.jsx';
import Login from '../routes/Login.jsx';
import Register from '../routes/Register.jsx';
import Header from '../components/Header.jsx';
import Faq from '../containers/Faq.jsx';
import Training from '../containers/Training.jsx';

import '../../styles/routes/App.scss';

// import { render } from 'react-dom';
import {getNews } from '../actions';
import {bindActionCreators} from 'redux';
 class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    news:'',
    email:'acea@ace.com',
    login:'true',
  };
} 
  componentWillMount(){
    // this.props.getMovies(),
    // this.props.getCars()
    this.props.getNews();
    // this.props.carslist();
    // fetch('http://127.0.0.1:8181/')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // fetch('http://localhost:3001/allusers')
    // .then(response => response.json())
    // .then(json => console.log(json))
 
};

// renderMovies = (movies) => {
 
//   console.log(movies);
//   console.log("movito");
//   if(movies){
//     var result = [];
//     movies.map(item => (
//       result.push( <div  >{item.name}</div>  )
//     ))
//     return result;
//   }
//   else{ 
//     return null
//   }
  
// };
 
// renderCars = (cars) => {
 
// //   console.log(cars);
// //   console.log("movito");
//   if(cars){
//     var resulta = [];
//     cars.map(item => {
//       // console.log(item)
//       // if(item.id < 50){
//       //  return resulta.push( <img src={item.thumbnailUrl}/>  )
//       // }else{
//       //  return resulta.push( <img src={item.url}/>  )

//       // }
//       resulta.push( <img src={item.thumbnailUrl}/>  )
//     })
//     return resulta;
//   }
//   else{ 
//     return null
//   }
  
// };

    render() {
      // console.log(this.props.movieslist.movies)
      console.log("ovde pochnuva");
      console.log(this.props.data);
      console.log("ovde zavrshuva");
      return (
          <BrowserRouter>
              <div>
                {/* <Favicon url={require("../styles/assets/img/favicon/favicon.ico")}/> */}
                <Header/> 
                <Switch>
                  <Route  path="/train" component={Training}/>
                  <Route  path="/faq" component={Faq}/>
                  <Route  path="/user" component={UserProfile}/>
                  <Route  path="/reg" component={Register}/>
                  <Route  path="/admin" exact component={AdminPanel}/>
                  <Route  path="/contact" component={Contact}/>
                  <Route  path="/res" exact component={Reservation}/>
                  <Route  path="/About" exact component={About}/>
                  <Route  path="/login" component={Login}/>
                  <Route  path="/accommodation" exact component={Rooms}/>
                  <Route  path="/" exact component={Home}/>
                  <Route  component={NotFound}/>
                </Switch>
                {/* <Footer/> */}

              </div>
            </BrowserRouter>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      data: state.news,  
      body: {email:state.email,login:state.login}
    }
  }
  const  mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      getNews 
    },dispatch) 
    
  } 
 
  // const  mapDispatchToProps = (dispatch) => {
  //  return {
  //   getMovies:()=>{
  //     dispatch(movieslist())
  //   },
  //   getCars:()=>{
  //     dispatch(carslist())
  //   }
  //  }
    // ...bindActionCreators(actionCreators, dispatch),
  // }
  export default connect(mapStateToProps,mapDispatchToProps)(App);
  // export const getCart = state => state.email