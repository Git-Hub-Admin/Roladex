import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';

class Settings extends Component {
  static propTypes = {
  }

  signOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  
  render(){
    return (
      <Container>
        <Text>Hi! I'm a potato</Text>
        <PrimaryButton 
          text="Log out"
          onPress={this.signOut}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Settings);