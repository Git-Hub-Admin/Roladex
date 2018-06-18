import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ title, onPress }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default Header;
