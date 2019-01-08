//import npm package</div>
import React from 'react';
import {Row,Col,Input,Icon,Button,Card,CardTitle} from 'react-materialize';
import $ from 'jQuery';
//import components and containers

//import assets
import beagle from '../../styles/assets/img/beagle.jpg';
import samojed from '../../styles/assets/img/samojed.jpeg'

export default class ModalForDogsCards extends React.Component {
    componentWillMount(){
        $(document).ready(function(){
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('.modal-trigger').leanModal();
          });
        
    }
    render(){
        return(
            <div>
  <div className="row section">
  <div className="col">
    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    <p>You have to include jQuery and Materialize JS + CSS for the modal to work. You can include it from </p><a href="http://materializecss.com/getting-started.html">CDN (getting started)</a>.
  </div>
</div>
<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div className="modal-footer">
    <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
  </div>
    );
  }
}