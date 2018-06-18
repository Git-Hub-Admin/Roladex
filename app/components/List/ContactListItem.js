import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ContactListItem = ({
  text, onPress,
}) => (
  <TouchableHighlight
    underlayColor={styles.$underlayColor}
    onPress={onPress}
  >
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
);

ContactListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ContactListItem;
