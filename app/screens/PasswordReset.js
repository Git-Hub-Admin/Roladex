import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';

class PasswordReset extends Component {
  static propTypes = {
  }

  render(){
    return (
      <Container>
        <Text>Password Reset Page</Text>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(PasswordReset);