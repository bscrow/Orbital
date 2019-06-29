import React from 'react';
import './App.css';
import FASS from '../Planning/FASS/FASS';
import SOC from '../Planning/SOC/SOC';
import FOS from '../Planning/FOS/FOS';
import FOE from '../Planning/FOE/FOE';
import SOCLogo from '../../Images/SOCLogo.jpg';
import FASSLogo from '../../Images/FASSLogo.jpg';
import FOSLogo from '../../Images/FOSLogo.jpg';
import FOELogo from '../../Images/FOELogo.jpg';
import computer from '../../Images/computer.png';
import chemistry from '../../Images/chemistry.png';
import books from '../../Images/books.png';
import engineering from '../../Images/engineering.png';
import FacultyLogo from './FacultyLogo';

//Import statements:
// "./" means current directory
// "../" means parent directory
// "/" means root directory

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
    this.handleClickForFOE = this.handleClickForFOE.bind(this)
  }

  handleClickForFOE() {
    this.setState(prevState => {
      return {
        name:"FOE"
      }
    })
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
        <div class="HomePageWrapper">
          <div class="HomePage">
            <div class="PlaNUShp">
              <h1>PlaNUS</h1>
              <h2>A platform for you to plan your university journey</h2>
            </div>
            <div class="FASShp" onClick={this.handleClickForFASS}>
              <FacultyLogo name="Faculty of Arts & Social Science" img={books} hoverImg={books} majors={null}/>
            </div>
            <div class="SOChp" onClick={this.handleClickForSOC}>
            <FacultyLogo name="School of Computing" img={computer} hoverImg={computer} majors={null}/>
            </div>
            <div class="FOShp" onClick={this.handleClickForFOS}>
            <FacultyLogo name="Faculty of Science" img={chemistry} hoverImg={chemistry} majors={null}/>
            </div>
            <div class="FOEhp" onClick={this.handleClickForFOE}>
            <FacultyLogo name="Faculty of Engineering" img={engineering} hoverImg={engineering} majors={null}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.name === "SOC"){
    return (
      <SOC buttonClick={this.handleClickForBack}/>
    );
    } else if (this.state.name === "FASS") {
      return (
        <div class="FASS">
          <FASS />
          <button onClick={this.handleClickForBack}>Back</button>
        </div>
      )
    } else if (this.state.name === "FOS") { //For FOS
      return (
        <div class="FOS">
          <FOS buttonClick={this.handleClickForBack}/>
        </div>
      )
    } else {
      return (
        <div class='FOE'>
          <FOE />
          <button onClick={this.handleClickForBack}>Back</button>
        </div>
      )
    }
  }

}


export default App;
