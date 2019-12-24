import React, { Component } from 'react';
import Render from './render'
class Register extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return Render.render.call(this);
  }
}

export default Register;
