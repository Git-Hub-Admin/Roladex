import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, TextInput, Text } from 'react-native';

import styles from './styles';

class Input extends Component {
  static propTypes = {
    editable: PropTypes.bool,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    label: PropTypes.string,
  };

  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0: 1);
  }
  componentDidUpdate(){
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1: 0,
      duration:200,
    }).start();
  }

  handleFocus = () => this.setState({isFocused: true});
  hadnleBlur = () => this.setState({isFocused: false});
  focusField = () => {
    this.refs.textinput.focus();
  };

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange:[0, 1],
        outputRange:[28, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange:[0, 1],
        outputRange:[18, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange:[0, 1],
        outputRange:['#aaa', '#000'],
      }),
    };
    return (
      <View style={styles.container}>
        <Animated.Text style={labelStyle}> {label} </Animated.Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onFocus={this.handleFocus}
          onBlur={this.hadnleBlur}
          ref="textinput"
          {...props} />
      </View>
    )
  }
}

export default Input;
