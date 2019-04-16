import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, ListGroupItem } from 'reactstrap';
import RecordDetails from './RecordDetailsComponent';
import RecordUpdate from './RecordUpdateComponent';
import classnames from 'classnames';

class MedicationRecordNames extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.recordDetailsToggle = this.recordDetailsToggle.bind(this);

        this.state = {
          activeTab: null,
          recordDetailsView: true
        }
    }

    toggle(tab){
      if(this.state.activeTab !== tab){
        this.setState({
          activeTab: tab
        });
      }
    }

    recordDetailsToggle(flag){
      this.setState({
        recordDetailsView: flag
      });
    }

    render() {
        const record_displays = this.props.medication_records.map((record) => {
            return (
              <NavItem key={record.id}>
                  <NavLink className={classnames({ active: this.state.activeTab === record.id })}
                            onClick={() => { this.toggle(record.id); }}>
                        {record.medicationDisplay}
                  </NavLink>
              </NavItem>
            );
        });

        const record_details = this.props.medication_records.map((record) => {
          return (
            <TabPane tabId={record.id} key={record.id}>
                {
                  this.state.recordDetailsView ?
                  <RecordDetails record={record} recordDetailsToggle={this.recordDetailsToggle} /> :
                  <RecordUpdate record={record} recordDetailsToggle={this.recordDetailsToggle} />
                }
            </TabPane>
          )
        })

        return (
          <Row>
            <Nav pills vertical className="col-md-4">
            <h6 className="med-names"><i>Medications</i></h6>
              {record_displays}
            </Nav>
            <TabContent className="col-md-8" activeTab={this.state.activeTab}>
              {record_details}
            </TabContent>
            </Row>
        );
    }
}


export default MedicationRecordNames;
