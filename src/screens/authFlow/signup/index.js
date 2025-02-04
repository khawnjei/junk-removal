import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';
import {routes} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';

import AuthHeader from '../../../components/authHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisibleA, setIsPasswordVisibleA] = useState(true);
  const [isPasswordVisibleB, setIsPasswordVisibleB] = useState(true);

  const scrollRef = useRef(null);

  const togglePasswordVisibilityA = () => {
    setIsPasswordVisibleA(prev => !prev);
  };

  const togglePasswordVisibilityB = () => {
    setIsPasswordVisibleB(prev => !prev);
  };

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
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Create New Account</Text>
            <Text style={styles.subtitleText}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
          </View>
          <View style={styles.inputFieldsContainer}>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Email</Text>
              <AppTextInput
                placeholder={'Enter your email'}
                value={email}
                onChangeText={e => setEmail(e)}
                leftIcon={appIcons.mailIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Password</Text>
              <AppTextInput
                placeholder={'Enter Your Password'}
                value={password}
                onChangeText={e => setPassword(e)}
                eyeIcon={true}
                autoCorrect={false}
                secure={isPasswordVisibleA}
                showPassword={togglePasswordVisibilityA}
                leftIcon={appIcons.lockIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <AppTextInput
                placeholder={'Enter Your Password'}
                value={confirmPassword}
                onChangeText={e => setConfirmPassword(e)}
                eyeIcon={true}
                autoCorrect={false}
                secure={isPasswordVisibleB}
                showPassword={togglePasswordVisibilityB}
                leftIcon={appIcons.lockIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title={'Sign Up'}
              onPress={() =>
                navigation.navigate(routes?.otpVerification, {type: 'signup'})
              }
            />
          </View>
          <View style={styles.orSeparatorWrapper}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separatorLine} />
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
          <View style={styles.loginPromptWrapper}>
            <Text style={styles.loginPromptText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes?.signin)}>
              <Text style={styles.loginPromptLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signup;
