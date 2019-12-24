import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class ColorView extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>{
        this.props.navigation.push('HomeDetail')
      }}>
        <Text>ColorView</Text>
      </TouchableOpacity>
    );
  }
}

ColorView.propTypes = {
};

ColorView.defaultProps = {
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: 100,
    height: 100
  },
});

export default withNavigation(ColorView)
