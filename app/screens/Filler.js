import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';

class Filler extends Component {
  static propTypes = {
  }

  render(){
    return (
      <Container>
        <Text>Hi! I'm a potato</Text>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Filler);