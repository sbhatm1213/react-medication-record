import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardTitle, Col, Row } from 'reactstrap';

class RecordUpdate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            orderId: props.record.id,
            medicationDisplay: props.record.medicationDisplay,
            CDL: props.record.CDL,
            lastDose: props.record.lastDose,
            due: props.record.due
        };

    //   this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    handleSubmit(event) {
      console.log(this.state);
      // axios.post('http://10.182.244.122:8080/medicationrecord/webapi/medicationrecords/'+this.state.orderId, this.state)
      // .then(function (response) {
      //   console.log(response);
      //   alert(JSON.stringify(response));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // event.preventDefault();

      const data = this.state;
      const url = 'http://10.182.244.122:8080/medicationrecord/webapi/medicationrecords/'+this.state.orderId;
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        data: qs.stringify(data),
        url,
      };
      axios(options);
      event.preventDefault();
    }

    render() {
      return (
        <Card body>
            <Row>
                <Col md={1}>
                    <Button color="info" onClick={() => this.props.recordDetailsToggle(true)}>
                        <i className="fa fa-chevron-left"></i>
                    </Button>
                </Col>
                <Col md={10}>
                    <CardTitle>Edit Medication Record</CardTitle>
                </Col>
            </Row>
            <div>
                <Form onSubmit={this.handleSubmit}>
                    {/* <FormGroup>
                        <Label>
                            Pick your favorite flavor:
                            <Input type="select" value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                            </Input>
                        </Label>
                        </FormGroup> */}
                    <FormGroup row>
                        <Label sm={4}>Medication Display</Label>
                        <Col sm={8}>
                            <Input type="text" name="medicationDisplay" value={this.state.medicationDisplay} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>CDL</Label>
                        <Col sm={8}>
                            <Input type="textarea" rows={4} name="CDL" value={this.state.CDL} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>Last Dose</Label>
                        <Col sm={8}>
                            <Input type="text" name="lastDose" value={this.state.lastDose} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={4}>Due</Label>
                        <Col sm={8}>
                            <Input type="text" name="due" value={this.state.due} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={4}></Col>
                        <Col sm={3}>
                            <Input type="submit" value="Submit" className="btn btn-info" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </Card>
      );
    }
  }

  export default RecordUpdate;
