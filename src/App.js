import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import MedicationRecordTypes from './components/MedicationRecordTypesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { MEDICATION_RECORDS } from './shared/medicationrecords';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      medication_records : MEDICATION_RECORDS
    }
  }

  render() {
    return (
      <div>
        <Navbar color="info"  expand="md">
          <h3 className="text-center"><i>Medication Records</i></h3>
        </Navbar>
        <div className="container top-80">
            <MedicationRecordTypes medication_records={this.state.medication_records}/>
        </div>
      </div>
    );
  }
}

export default App;
