import React, { Component } from 'react';
import Render from './render'
class Home extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return Render.render.call(this);
  }
}

export default Home;
