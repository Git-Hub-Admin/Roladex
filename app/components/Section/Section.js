import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Section = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }

  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
};

Section.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Section;
