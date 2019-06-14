import React from 'react';
import './App.css';
import FASS from './FASS';
import SOC from './SOC';
import FOS from './FOS';
import SOCLogo from './SOCLogo.jpg'
import FASSLogo from './FASSLogo.jpg'
import FOSLogo from './FOSLogo.jpg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name:null
    }
    this.handleClickForSOC = this.handleClickForSOC.bind(this)
    this.handleClickForFASS = this.handleClickForFASS.bind(this)
    this.handleClickForFOS = this.handleClickForFOS.bind(this)
    this.handleClickForBack = this.handleClickForBack.bind(this)
  }

  handleClickForFASS() {
    this.setState(prevState => {
      return {
        name:"FASS"
      }
    })
  }

  handleClickForFOS() {
    this.setState(prevState => {
      return {
        name: "FOS"
      }
    })
  }

  handleClickForSOC() {
    this.setState(prevState => {
      return {
        name:"SOC"
      }
    })
  }
  
  handleClickForBack() {
    this.setState(prevState => {
      return {
        name:null
      }
    })
  }

  render() {
    if (this.state.name === null) {
      return (
        <div class="HomePage">
          <h1 class="item PlaNUShp">
            PlaNUS
          </h1>
          <div class="item FASShp">
            <img src={FASSLogo} alt="FASSLogo" onClick={this.handleClickForFASS} height="70" width="250"></img>
          </div>
          <div class="item SOChp">
            <img src={SOCLogo} alt="SOCLogo" onClick={this.handleClickForSOC} height="70" width="250"></img>
          </div>
          <div class="item FOShp">
            <img src={FOSLogo} alt="FOSLogo" onClick={this.handleClickForFOS} height="70" width="250"></img>
          </div>
        </div>
      );
    } else if (this.state.name === "SOC"){
    return (
      <div class="SOC">
        <SOC />
        <button onClick={this.handleClickForBack}>Back</button>
      </div>
    );
    } else if (this.state.name === "FASS") {
      return (
        <div class="FASS">
          <FASS />
          <button onClick={this.handleClickForBack}>Back</button>
        </div>
      )
    } else { //For FOS
      return (
        <div class="FOS">
          <FOS />
          <button onClick={this.handleClickForBack}>Back</button>
        </div>
      )
    }
  }

}


export default App;
