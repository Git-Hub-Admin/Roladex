import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, ConditionalView } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import { Input } from '../components/TextInput';
import { ScreenTitle } from '../components/Text';

class numberVerification extends Component {
  constructor() {
    super();
    this.state = {
      verificationCode: '',
      phoneNumber: '',
      codeSent: false,
      codeSending: false,
    }
  }
  
  componentWillMount() {
    this._animatedCodeSent = new Animated.Value(0);
    this.setState({phoneNumber: this.props.navigation.getParam('number')});
  }
  componentDidUpdate(){
    Animated.timing(this._animatedCodeSent, {
      toValue: this.state.codeSent ? 1: 0,
      duration:200,
    }).start();
  }

  static propTypes = {
  }

  sendVerificationCode = async() => {
    try {
      this.setState({codeSending: true});
      let response = await fetch(
        'http://18.221.10.226/api/send_verification_code',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: this.props.navigation.getParam('user_id'),
            phoneNumber: this.state.phoneNumber,
          })
        }
      );
      let responseJson = await response.json();
      this.setState({codeSending: false});
      let status = responseJson.status;
      if (status == 'duplicate'){
        alert('The number you had entered was already registered to another user');
      }
      if (status == 'success'){
        this.setState({codeSent: true});
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.log(error);
    }
  }
  verifyAccountNumber = () => {
    if (this.state.verificationCode == '42'){
      this.props.navigation.navigate('Home');
    } else {
      alert('Wrong verification code');
    }
  }

  _renderCodeVerification = () => {
    if (this.state.codeSent){
      return (
        <View>
          
        </View>
      )
    } else {
      return null;
    }
  }

  render(){  
    const { codeSent } = this.state;
    const bigWidth = Dimensions.get('window').width * 0.75;
    const smallWidth = bigWidth * 0.3;
    const containerStyle = {
      width: this._animatedCodeSent.interpolate({
        inputRange:[0, 1],
        outputRange:[bigWidth, smallWidth],
      }),
      marginTop: this._animatedCodeSent.interpolate({
        inputRange:[0, 1],
        outputRange:[0, 0],
      }),
      left: this._animatedCodeSent.interpolate({
        inputRange:[0, 1],
        outputRange:[0, 0],
      }),
    };
    const textStyle = {
      paddingVertical: this._animatedCodeSent.interpolate({
        inputRange:[0, 1],
        outputRange:[15, 8],
      }),
      fontSize: this._animatedCodeSent.interpolate({
        inputRange:[0, 1],
        outputRange:[20, 14],
      }),
    };
    const buttonText = this.state.codeSent ? 'Resend' : 'Send verification code';
    return (
      <Container>
        <KeyboardAvoidingView behavior="position" enabled style={{width :'100%', alignItems: 'center'}}>
          <ScreenTitle
            text="Verify Your Number"
          />
          <View style={{width: '80%', justifyContent: 'flex-start'}}>
            <Text>
              Roladex will send a verification code to {this.state.phoneNumber} to verify that it is your phone number. 
            </Text>
            <View>
              <Input
                label="Your phone number"
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              />
            </View>
            <PrimaryButton
              text={buttonText}
              onPress={this.sendVerificationCode}
              containerStyle={containerStyle}
              textStyle={textStyle}
            />
          </View>
          <ConditionalView condition = {this.state.codeSent && !this.state.codeSending} style={{ width: '80%', justifyContent: 'flex-start', marginTop: 30}}>
            <Text>
              Verification Code Sent! Please enter it in the box below then hit "Verify"
            </Text>
            <View>
            <Input
              placeholder="Verification code"
              onChangeText={(verificationCode) => this.setState({verificationCode})}
            />
            </View>
            <PrimaryButton
              text="Verify"
              onPress={this.verifyNumber}
            />
          </ConditionalView>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(numberVerification);