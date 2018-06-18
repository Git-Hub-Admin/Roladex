import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  titleWrapper: {
    flex:1, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginVertical: 15,
  },
  title:{
    fontSize: 28,
    fontWeight: '500',
    color: '$textColor',
  },
  swiperWrapper:{
    flex:7, 
    marginHorizontal: 50,
  },
  slide:{
    backgroundColor:'#ccc',
    height: '85%',
  },
  buttonsWrapper:{
    flex: 4, 
    alignItems:'center',
  },
});

class Start extends Component {
  static propTypes = {
  }

  navigateLogin = () => {
    this.props.navigation.navigate('Login');
  };

  navigateSignup = () => {
    this.props.navigation.navigate('Signup');
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Roladex</Text>
        </View>
        <View style={styles.swiperWrapper}>
          <Swiper showButtons={true}>
            <View style={styles.slide}>
              <Text>Roladex costs 55 stamina to use</Text>
            </View>
            <View style={styles.slide}>
              <Text>Image 2 goes here</Text>
            </View>
            <View style={styles.slide}>
              <Text>Image 3 goes here</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.buttonsWrapper}>
          <PrimaryButton
            text="Log In"
            onPress = {this.navigateLogin}
          />
          <PrimaryButton
            text="Sign Up"
            onPress = {this.navigateSignup}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Start);