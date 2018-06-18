import React, { Component } from 'react';
import ReactNative, { TextInput, View, StatusBar, KeyboardAvoidingView, AsyncStorage, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { Input } from '../components/TextInput';
import { Logo } from '../components/Logo';
import { PrimaryButton, ClearButton } from '../components/Button';

const styles = EStyleSheet.create({
  title:{
    textAlign: 'left', 
    fontSize: 22, 
    fontWeight: '500', 
    width:'100%', 
    marginTop: 20,
    color:'$textColor',
  }
});

class Singup extends Component {
  static propTypes = {
    primaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }
  static navigationOptions = {
    title: 'Sign Up',
  }

  constructor() {
    super();
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      password: '',
      passwordConfirm: '',
    }
  }

  navigateLogin = () =>{
    this.props.navigation.navigate('Login');
  };

  handleSignupPressed = async() => {
    try {
      let response = await fetch(
        'http://18.221.10.226/api/register_user',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
          })
        }
      );
      let responseJson = await response.json();
      let status = responseJson.status;
      if (status == 'duplicate'){
        this.props.navigation.navigate('SignupError', {
          number: this.state.phoneNumber,
        });
      }
      if (status == 'success'){
        await AsyncStorage.setItem('userToken', responseJson.user_id);
        this.props.navigation.navigate('numberVerification', {
          number: this.state.phoneNumber,
          user_id: responseJson.user_id,
        });
      }
    } catch (error) {
      alert('An error has occurred. Please try again!');
      console.log(error);
    }
  }

  focusField = (refName) => {
    this.refs[refName].focusField();
  };

  render(){
    return (
      <Container>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Create your account</Text>
          <Input 
            label="Full Name" 
            onChangeText={(fullName) => this.setState({fullName})}
            value={this.state.fullName}
            ref="fullName"
            onSubmitEditing={()=>{this.focusField('phoneNumber')}}
          />     
          <Input 
            label="Phone Number"
            keyboardType="email-address"
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            value={this.state.phoneNumber}
            ref="phoneNumber"
            onSubmitEditing={()=>{this.focusField('password')}}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            ref="password"
            onSubmitEditing={()=>{this.focusField('passwordConfirm')}}
          />
          <Input 
            label="Confirm Password"
            secureTextEntry={true}
            onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
            value={this.state.passwordConfirm}
            ref="passwordConfirm"
          />
          <PrimaryButton
            text="Next"
            onPress={this.handleSignupPressed}
            style={{marginTop: 30}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <Text style={{marginRight: 8}}>
              Already have an account? 
            </Text>
            <ClearButton
              text="Log In"
              onPress={this.navigateLogin}
            />
          </View>
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    primaryColor: state.theme.primaryColor,
    backgroundColor: state.theme.backgroundColor,
  };
}

export default connect(mapStateToProps)(Singup);