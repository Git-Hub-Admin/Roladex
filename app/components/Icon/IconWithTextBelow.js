import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const IconWithTextBelow = ({ icon = '', text }) => (
  <View style={styles.container}>
    <Image
      source={require('../../images/icon.png')}
    />
    <Text>
      {text}
    </Text>
  </View>
);

IconWithTextBelow.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default IconWithTextBelow;
