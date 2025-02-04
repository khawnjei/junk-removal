import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';

import {colors} from '../../../services/utilities/colors';
import {styles} from './styles';
import {heightPixel, routes} from '../../../services/constants';

import OTPTextInput from 'react-native-otp-textinput';
import AppButton from '../../../components/button';
import AuthHeader from '../../../components/authHeader';

const OtpVerification = ({navigation, route}) => {
  const [otp, setOtp] = useState('');

  const type = route?.params?.type;
  const userRole = useSelector(state => state?.userData?.role);
  console.log('deaddddd', type);

  const handleUserRole = () => {
    if (type === 'reset') {
      navigation.navigate(routes?.createNewPassword);
      return true;
    }
    if (userRole === 'Service Provider') {
      navigation.navigate(routes?.addProfileServiceProvider);
      return true;
    } else if (userRole) {
      navigation.navigate(routes?.addProfile);
      return true;
    }
    return false;
  };

  const handleOnPress = () => {
    const isRoleHandled = handleUserRole();
    if (isRoleHandled) {
      return;
    }
    navigation.navigate(routes?.createNewPassword);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(20)}}>
        <View style={styles.scrollContent}>
          <View style={styles.headerContainer}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Enter OTP</Text>
          </View>
          <View style={styles.otpContainer}>
            <OTPTextInput
              defaultValue={otp}
              handleTextChange={e => setOtp(e)}
              autoFocus
              tintColor={colors.primary}
              textInputStyle={styles.otpInput}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Don’t receive code{' '}
              <Text style={styles.sendAgainText}>SEND AGAIN</Text>
            </Text>
            <Text style={styles.timerText}>00:55</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton title={'Next'} onPress={handleOnPress} />
      </View>
    </View>
  );
};

export default OtpVerification;
