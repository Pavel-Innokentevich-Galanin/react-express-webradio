import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui';
import "swagger-ui/dist/swagger-ui.css";

class GpiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definitionLink: `${process.env.REACT_APP__SWAGGER}`,
    };
  }

  componentDidMount() {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink
    })
  }

  render() {
    return (
      <div className="App">
        <div id="api-data" />
      </div>
    );
  }
}

export default GpiApp;
