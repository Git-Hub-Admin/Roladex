import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { PrimaryButton} from '../components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.checkNumberVerification();
  }
  static propTypes = {

  }

  checkNumberVerification = async() => {
    console.log('hi');
  };

  syncContacts = () => {
    console.log('sync');
  }

  render(){
    return (
      <Container>
        <Text>2 New Updates</Text>
        <PrimaryButton
          text="Sync Now"
          onPress={this.syncContacts}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(Home);