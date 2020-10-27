import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

class Tang extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div>
              <div className="ml-5 text">{this.state.count}</div>
              <Button
                type="button"
                className="btn btn-primary ml-5 w-75"
                onClick={this.handleClick}
              >
                Get it
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div>
              <div className="ml-5 text">{this.state.count}</div>
              <Button
                type="button"
                className="btn btn-primary ml-5 w-75"
                onClick={this.handleClick}
              >
                Get it
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div>
              <div className="ml-5 text">{this.state.count}</div>
              <Button
                type="button"
                className="btn btn-primary ml-5 w-75"
                onClick={this.handleClick}
              >
                Get it
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Tang;
