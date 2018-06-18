import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Input } from '../components/TextInput';
import { Logo } from '../components/Logo';
import { PrimaryButton, ClearButton } from '../components/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    }
  }

  static propTypes = {
    primaryColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }

  handleLoginPressed = async() =>{
    try {
      let response = await fetch(
        'http://18.221.10.226/api/login',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: this.state.login,
            password: this.state.password,
          })
        }
      );
      let responseJson = await response.json();
      let status = responseJson.status;
      if (status == 'errror'){
        alert('Incorrect login or password')
      }
      if (status == 'success'){
        await AsyncStorage.setItem('userToken', responseJson.userToken);
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert('an error occured');
      console.log(error);
    }
  };

  recoverPassword = () => {
    this.props.navigation.navigate('PasswordRecovery');
  }

  render(){
    return (
      <Container backgroundColor={this.props.backgroundColor} >
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" >
          <Logo />
          <Input 
            placeholder="email/#"
            keyboardType="email-address"
            onChangeText={(login) => this.setState({login})}
            value={this.state.login}
          />
          <Input
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <PrimaryButton
            text="Login"
            onPress={this.handleLoginPressed} />
        </KeyboardAvoidingView>
        <ClearButton
          text="Forgot your password?"
          onPress={this.recoverPassword}
        />
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

export default connect(mapStateToProps)(Login);