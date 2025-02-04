import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import AuthHeader from '../../../components/authHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';
import {routes} from '../../../services/constants';
import {useSelector} from 'react-redux';
import {userData} from '../../../redux/slices/UserDataSlice';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisibleA, setIsPasswordVisibleA] = useState(true);

  const scrollRef = useRef(null);

  const togglePasswordVisibilityA = () => {
    setIsPasswordVisibleA(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        ref={scrollRef}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerWrapper}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Log In To Your Account</Text>
          </View>
          <View style={styles.inputFieldsWrapper}>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Email</Text>
              <AppTextInput
                placeholder={'Enter Your Email'}
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
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.forgotPassword)}
            style={styles.forgotPasswordWrapper}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.loginButtonWrapper}>
            <AppButton
              title={'Log In'}
              onPress={() => navigation.replace(routes?.tab)}
            />
          </View>
          <View style={styles.orSeparatorWrapper}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separatorLine} />
          </View>
          <TouchableOpacity style={styles.fingerprintWrapper}>
            <Image
              source={
                Platform.OS === 'ios'
                  ? appIcons.faceIcon
                  : appIcons.fingerprintIcon
              }
              style={styles.fingerprintIcon}
            />
          </TouchableOpacity>
          <View style={styles.signupWrapper}>
            <Text style={styles.signupText}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes?.signup)}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Signin;
