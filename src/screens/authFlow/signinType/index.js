import React from 'react';

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import AppButton from '../../../components/button';
import AuthHeader from '../../../components/authHeader';
import {routes} from '../../../services/constants';

const SigninType = ({navigation}) => {
  const socialArr = [
    {
      id: 1,
      icon: appIcons.googleIcon,
      title: 'Continue with Google',
      platform: 'both',
    },
    {
      id: 2,
      icon: appIcons.appleIcon,
      title: 'Continue with Apple',
      platform: 'ios',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <AuthHeader onPress={() => navigation.goBack()} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Log In Type</Text>
      </View>
      <View style={styles.socialContainer}>
        {socialArr.map(item => {
          if (item.platform === 'ios' && Platform.OS !== 'ios') return null;
          if (item.platform === 'android' && Platform.OS !== 'android')
            return null;
          return (
            <TouchableOpacity key={item?.id} style={styles.socialButton}>
              <Image source={item?.icon} style={styles.socialIcon} />
              <Text style={styles.socialText}>{item?.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.emailButtonContainer}>
        <AppButton
          title={'Log In With Email'}
          onPress={() => navigation.navigate(routes?.signin)}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes?.signup)}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninType;
