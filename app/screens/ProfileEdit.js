import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';

class ProfileEdit extends Component {
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

export default connect(mapStateToProps)(ProfileEdit);