import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

class CustomButton extends Component<{}> {
  constructor(props){
    super(props);
    this.randomColor = this.randomColor.bind(this)
  }

  randomColor(){
    let r = Math.floor(Math.random()*256);
		let g = Math.floor(Math.random()*256);
		let b = Math.floor(Math.random()*256);
		return '#'+r.toString(16)+g.toString(16)+b.toString(16);
  }


  render() {
    return (
      <TouchableOpacity style={[styles.container, {backgroundColor: this.randomColor()}]} onPress={this.props.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

CustomButton.defaultProps = {
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
});

export default CustomButton
