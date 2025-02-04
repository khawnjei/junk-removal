import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';
import {appIcons} from '../../../services/utilities/assets';

import AuthHeader from '../../../components/authHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerWrapper}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Forgot Password</Text>
          </View>
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Email</Text>
            <AppTextInput
              placeholder={'Enter Your Email'}
              value={email}
              onChangeText={e => setEmail(e)}
              leftIcon={appIcons.mailIcon}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton
            title={'Next'}
            onPress={() =>
              navigation.navigate(routes?.otpVerification, {type: 'reset'})
            }
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentWrapper: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerWrapper: {
    marginTop: widthPixel(20),
  },
  titleWrapper: {
    marginTop: heightPixel(20),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  inputField: {
    gap: 10,
    marginTop: heightPixel(20),
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  buttonWrapper: {
    alignSelf: 'center',
    paddingBottom: heightPixel(10),
  },
});

export default ForgotPassword;
