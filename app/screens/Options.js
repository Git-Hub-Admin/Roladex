import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  };
  handleSitePress = () => {
    Linking.openURL('http://www.reddit.com').catch(
      this.props.alertWithType('error', 'Sorry!', 'The Url cannot be opened right now.'),
    );
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
        />
        <Separator />
        <ListItem
          text="Sites"
          onPress={this.handleSitePress}
        />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
