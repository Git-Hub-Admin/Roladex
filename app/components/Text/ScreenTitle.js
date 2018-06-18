import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ScreenTitle = ({ text }) => (
  <View style={styles.titleWrapper}>
    <Text style={styles.title}>
      {text}
    </Text>
  </View>
);

ScreenTitle.propTypes = {
  text: PropTypes.string,
};

export default ScreenTitle;
