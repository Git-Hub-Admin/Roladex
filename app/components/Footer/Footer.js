import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { IconWithTextBelow } from '../Icon/';
import styles from './styles';

const Footer = () => (
  <View style={styles.container}>
    <IconWithTextBelow
      text="Home"
    />
    <IconWithTextBelow
      text="Contacts"
    />
    <IconWithTextBelow
      text="Invite"
    />
    <IconWithTextBelow
      text="Update"
    />
  </View>
);

Footer.propTypes = {
};

export default Footer;
