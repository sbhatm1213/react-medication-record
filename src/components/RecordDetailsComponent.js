import React, { Component } from 'react';
import { Card, CardBody, ListGroup, ListGroupItem, CardText, CardTitle, Button, Collapse, Col, Row } from 'reactstrap';

class RecordDetails extends Component {

  constructor(props){
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.state = {
      collapse: null,
      ingredients: null,
      comments: null
    }
  }

  toggleCollapse(button, collapseArray){
    if(button === "ingredients"){
      this.setState({
        collapse: true,
        ingredients: collapseArray.map((ingredient) => {
          return (
            <ListGroupItem className="plain-list">{ingredient}</ListGroupItem>
          )
        })
      });
    }
    else if (button === "comments") {
      this.setState({
        collapse: false,
        comments: collapseArray.map((comment) => {
          return (
            <ListGroupItem className="plain-list">{comment.comment}</ListGroupItem>
          )
        })
      });
    }
  }

  render(){
    return (
        <Card body>
          <Row>
            <Col md={1}>
                  <Button color="info" onClick={() => this.props.recordDetailsToggle(false)}>
                    <i className="fa fa-pencil"></i>
                  </Button>
            </Col>
            <Col md={10}>
                <CardTitle>{this.props.record.medicationDisplay}</CardTitle>
            </Col>
          </Row>

          <CardText><b>CDL - </b>{this.props.record.CDL}</CardText>
          <CardText><b>LastDose - </b>{this.props.record.lastDose}</CardText>
          <CardText><b>Due - </b>{this.props.record.due}</CardText>

          <div>
            <Button color="info" onClick={() => this.toggleCollapse("ingredients", this.props.record.ingredients)} active={this.state.collapse}>Ingredients</Button>
            <Button color="info" onClick={() => this.toggleCollapse("comments", this.props.record.comments)} active={this.state.collapse === false}>Comments</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  <ListGroup>
                  {this.state.ingredients}
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={this.state.collapse === false}>
              <Card>
                <CardBody>
                  <ListGroup>
                  {this.state.comments}
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Card>
      );
    }
}

export default RecordDetails;
