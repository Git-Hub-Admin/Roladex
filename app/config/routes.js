import React from 'react';
import { StackNavigator, SwitchNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import Start from '../screens/Start';
import Login from '../screens/Login';
import PasswordReset from '../screens/PasswordReset';
import PasswordRecovery from '../screens/PasswordRecovery';
import Signup from '../screens/Signup';
import numberVerification from '../screens/numberVerification';
import SignupError from '../screens/SignupError';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Home from '../screens/Home';
import ContactList from '../screens/ContactList';
import Contact from '../screens/ContactList';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';
import Settings from '../screens/Settings';

const AuthenticationStack = StackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: {
        header: () => null,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerTintStyle: {
          fontWeight: 'bold',
        },
      },
    },
    numberVerification: {
      screen: numberVerification,
      navigationOptions: {
        headerTintStyle: {
          fontWeight: 'bold',
        },
      },
    },
    SignupError: {
      screen: SignupError,
      navigationOptions: {
        header: () => null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    PasswordRecovery: {
      screen: PasswordRecovery,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Start',
  },
);

const AppNavigator = TabNavigator(
  {
    Home: { screen: Home },
    ContactList: { screen: ContactList },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'ContactList':
            iconName = 'list-alt';
            break;
          case 'Profile':
            iconName = 'user-circle-o';
            break;
          case 'Settings':
            iconName = 'gear';
            break;
          default:
            iconName = 'home';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#232323',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  },
);

const AppStack = StackNavigator({
  Home: {
    screen: Home,
  },
  ContactList: {
    screen: ContactList,
  },
  Contact: {
    screen: Contact,
  },
  Profile: {
    screen: Profile,
  },
  ProfileEdit: {
    screen: ProfileEdit,
  },
});

const RootStack = SwitchNavigator(
  {
    Auth: AuthenticationStack,
    App: AppNavigator,
    AuthLoading: AuthLoadingScreen,
    PasswordReset: {
      screen: PasswordReset,
    },
    numberVerificationLogin: {
      screen: numberVerification,
    },
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default RootStack;
