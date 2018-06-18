import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';

class SignupError extends Component {
  static propTypes = {
  }

  handleLoginPressed = () => {
    this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <Container>
        <View>
          <Text>
            Sorry, {this.props.navigation.getParam('phone', 'the phone number you provided')} is already in use. 
          </Text>
          <Text>
            Already a user? 
          </Text>
          <PrimaryButton
            text="Login"
            onPress={this.handleLoginPressed}
          />
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(SignupError);