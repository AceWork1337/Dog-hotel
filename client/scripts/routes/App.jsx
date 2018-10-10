import React from 'react';
import '../../styles/routes/App.scss';
//import npm package
import { connect } from 'react-redux';
//favicon
// import Favicon from 'react-favicon';

//import components and containers
// import { render } from 'react-dom';
import {getNews } from '../actions';
import {bindActionCreators} from 'redux';
 class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    news:''
  };
} 
  componentWillMount(){
    // this.props.getMovies(),
    // this.props.getCars()
    this.props.getNews();
    // this.props.carslist();
    fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json())
    .then(json => console.log(json))
 
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
 
renderCars = (cars) => {
 
//   console.log(cars);
//   console.log("movito");
  if(cars){
    var resulta = [];
    cars.map(item => {
      // console.log(item)
      // if(item.id < 50){
      //  return resulta.push( <img src={item.thumbnailUrl}/>  )
      // }else{
      //  return resulta.push( <img src={item.url}/>  )

      // }
      resulta.push( <img src={item.thumbnailUrl}/>  )
    })
    return resulta;
  }
  else{ 
    return null
  }
  
};

    render() {
      // console.log(this.props.movieslist.movies)
      console.log("ovde pochnuva");
      console.log(this.props.data);
      console.log("ovde zavrshuva");
      return (
       <div style={{textAlign: 'center'}}>
           {/* <Favicon url={require("../styles/assets/img/favicon/favicon.ico")}/> */}
          Hello begginer
          <div id="ace"style={{backgroundColor: 'black'}}></div>
          {/* {this.renderMovies(this.props.data.api)} */}
          {this.renderCars(this.props.data.news)}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      data: state.news,  
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