import React, { Component } from 'react'
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      lat: null,
      errorMessage:''
    };
  };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat:position.coords.latitude}),
      (err) => this.setState({errorMessage:err.message})
    );
  }
  
  renderContent(){
    if(this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat={this.state.lat} />
    }
    if(!this.state.lat && this.state.errorMessage){
      return <div>Error : {this.state.errorMessage}</div>
    }
    return <Spinner message="Please accept the location request" />
  }
  render() {
    return(
      <div className="border red">
      {this.renderContent()}
    </div>
    )
  }
}

export default App
