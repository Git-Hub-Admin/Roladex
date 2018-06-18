import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken){
      try {
        let response = await fetch(
          'http://18.221.10.226/api/check_user_verification',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userToken: userToken,
            })
          }
        );
        let responseJson = await response.json();
        let is_verified = responseJson.is_verified;
        if(is_verified){
          this.props.navigation.navigate('App');
        } else {
          this.props.navigation.navigate('numberVerificationLogin', {
            number: responseJson.user_number,
            user_id: responseJson.user_id,
          })
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
        console.log(error);
      }
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

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

export default connect(mapStateToProps)(AuthLoadingScreen);