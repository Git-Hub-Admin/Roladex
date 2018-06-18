import React from 'react';
import { TouchableHighlight, View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const PrimaryButton = ({
  text, onPress, containerStyle, textStyle,
}) => {
  const underlayColor = color(styles.$pbBackgroundColor).darken(styles.$pbBackgroundColorModifier);

  return (
    <Animated.View
      style={[styles.pbContainer, containerStyle]}
    >
      <TouchableHighlight
        style={[styles.pbWrapper]}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Animated.Text style={[styles.pbText, textStyle]}>{text}</Animated.Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  textStyle: PropTypes.any,
};

export default PrimaryButton;
