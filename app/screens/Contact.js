import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

const TEMP_NAME = 'Wonder Woman';
const TEMP_PHONE = '6193098258';
const TEMP_ADDRESS = '6425 Central Ave Apt 107, El Cerrito CA, 94530';
const TEMP_EMAIL = 'vip@berkeley.edu';
const TEMP_LAST_UPDATED = '2013-05-05';

class Contact extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    primaryColor: PropTypes.string,
    contacts: PropTypes.array,
  }

  render(){
    const { contact } = this.props.navigation.state.params;
    const contact_name = contact.name;
    const contact_phone = contact.phoneNumbers;
    const contact_email = contact.emailAddresses;
    const contact_address = contact.postalAddresses;
    const contact_last_updated = 'today';

    let contact_phone_string = '';
    if (contact_phone.length > 0){
      contact_phone_string = contact_phone[0].number;
    }

    let contact_email_string = '';
    if (contact_email.length > 0) {
      contact_email_string = contact_email[0].email;
    }

    let contact_address_string = '';
    if (contact_address.length > 0) {
      contact_address_string = contact_address.street + ' ' + contact_address.city + ',' + contact_address.state + ' ' + contact_address.postCode;
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>

        <StatusBar translucent={false} barStyle="light-content" />
        <Section>
          <Text>{contact_name}</Text>
        </Section>
        <Section>
          <Text>Options here</Text>
        </Section>
        <Section>
          <Text>{contact_phone_string}</Text>
        </Section>
        <Section>
          <Text>{contact_email_string}</Text>
        </Section>
        <Section>
          <Text>{contact_address_string}</Text>
        </Section>
        <Section>
          <Text>{contact_last_updated}</Text>
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    primaryColor: state.theme.primaryColor,
    contacts: state.contacts.contacts,
  };
}

export default connect(mapStateToProps)(Contact);