import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

const ConditionalView = ({ condition, children, ...props }) => {
  if (!condition) {
    return (
      <View {...props} />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

ConditionalView.propTypes = {
  children: PropTypes.any,
  condition: PropTypes.bool,
};

export default ConditionalView;
