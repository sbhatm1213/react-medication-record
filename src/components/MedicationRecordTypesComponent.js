import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import MedicationRecordNames from './MedicationRecordNamesComponent';
import classnames from 'classnames';

class MedicationRecordTypes extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
          activeTab: null
        }
    }

    toggle(tab){
      if(this.state.activeTab !== tab){
        this.setState({
          activeTab: tab
        });
      }
    }

    render() {
        const record_types = this.props.medication_records.map((record, index) => {
            return (
              <NavItem key={index}>
                  <NavLink className={classnames({ active: this.state.activeTab === index })}
                            onClick={() => { this.toggle(index); }}>
                            {record.type}
                  </NavLink>
              </NavItem>
            );
        });

        const record_names = this.props.medication_records.map((record, index) => {
          return (
              <TabPane tabId={index} key={index}>
                <Row>
                  <Col>
                      <MedicationRecordNames medication_records={record.medications}/>
                  </Col>
                </Row>
              </TabPane>
          )
        })

        return (
          <div className="row">
            <Nav pills vertical className="col-md-3">
            <h6 className="med-types"><i>Types</i></h6>
              {record_types}
            </Nav>
            <TabContent className="col-md-9" activeTab={this.state.activeTab}>
              {record_names}
            </TabContent>
            </div>
        );
    }
}

export default MedicationRecordTypes;
