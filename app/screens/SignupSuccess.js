import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import { Input } from '../components/TextInput';

class SignupSuccess extends Component {
  constructor() {
    super();
    this.state = {
      verificationCode: '',
    }
  }
  
  static propTypes = {
  }

  verifyAccountNumber = () => {
    if (this.state.verificationCode == '42'){
      this.props.navigation.navigate('Home');
    } else {
      alert('Wrong verification code');
    }
  }

  render(){
    return (
      <Container>
        <View>
          <Text>
            We sent a verification code to {this.props.navigation.getParam('number', 'Your registered phone number')} 
          </Text>
          <Text>
            Please use enter the verification code in the box below to verify your number
          </Text>
          <Input
            placeholder=""
            onChangeText={(verificationCode) => this.setState({verificationCode})}
          />
          <PrimaryButton
            text="Verify"
            onPress={this.verifyAccountNumber}
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

export default connect(mapStateToProps)(SignupSuccess);