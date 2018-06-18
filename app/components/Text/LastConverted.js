import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = ({
  date, base, quote, conversionRate,
}) => (
  <Text style={styles.smallText}>
    ghjg
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};
export default LastConverted;
