import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contacts from '../data/contacts';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactListItem, ListItem, Seperator } from '../components/List';

import { importContacts } from '../actions/contacts';

class ContactList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    primaryColor: PropTypes.string,
    contacts: PropTypes.array,
    last_updated: PropTypes.string,
    status: PropTypes.string,
  }

  componentWillMount() {
    console.log('hihihi');
  };

  handleContactPressed = (contact) => {
    this.props.navigation.navigate('Contact',
      { 'contact': contact }
    );
  };

  handleOptionsPress = () => {
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
      fetch('http://dev.crewplatform.org/roladex/ajax/upload_contacts?contacts=hahahah', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contacts: phone_contacts,
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          return 'hi';
        });
    });
  };

  render() {
    return (
      <Container>
        <Header onPress={this.handleOptionsPress} title={this.props.status}/>
        <FlatList
          data={this.props.contacts}
          renderItem={({ item }) => (
            <ContactListItem
              text={item.name}
              onPress={() => this.handleContactPressed(item)}
            />
          )}
          keyExtractor={item => item.recordID}
          ItemSeparatorComponent={Seperator}
        />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    primaryColor: state.theme.primaryColor,
    contacts: state.contacts.contacts,
    last_updated: state.contacts.last_updated,
    status: state.contacts.status,
  };
};

export default connect(mapStateToProps)(ContactList);
