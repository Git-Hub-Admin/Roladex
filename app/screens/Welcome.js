import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import { importContacts } from '../actions/contacts';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';

class Welcome extends Component {
  static propTypes = {
  }

  handleOptionsPress = () => {
    this.props.navigation.nagivate('Home');
    /*
    var Contacts = require('react-native-contacts');
    Contacts.getAll((err, contacts) => {
      phone_contacts = contacts.filter(function(contact){
        return contact.phoneNumbers.length > 0;
      })
      var results = '';
      for (var i = 0, len = phone_contacts.length; i < len; i++){
        results = results + JSON.stringify(phone_contacts[i]);
        var firstName = phone_contacts[i].givenName,
            middleName = phone_contacts[i].middleName,
            lastName = phone_contacts[i].familyName;
        if (firstName === null){
          phone_contacts[i].name = '';
        } else {
          phone_contacts[i].name = firstName;
        }
        if (middleName !== null){
          phone_contacts[i].name += ' ' + middleName;
        }
        if (lastName !== null){
          phone_contacts[i].name += (' ' + lastName);
        }
      }
      phone_contacts.sort(function(a, b){
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
      this.props.dispatch(importContacts(phone_contacts));
    });
    */
  };

  render(){
    return (
      <Swiper showButtons={true}>
        <View>
          <Text>First, Go Grab a potato</Text>
        </View>
        <View>
          <Text>Now you are the potatoe</Text>
        </View>
        <View>
          <Text>Import your contacts to get started!</Text>
          <PrimaryButton
            text="Import Contacts"
            onPress={this.handleOptionsPress}
          />
        </View>
      </Swiper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Welcome);