import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';
import {appIcons} from '../../../services/utilities/assets';
import {colors} from '../../../services/utilities/colors';

import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';
import AuthHeader from '../../../components/authHeader';
import DynamicPopup from '../../../components/dynamicPopup';

const CreateNewPassword = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisibleA, setIsPasswordVisibleA] = useState(true);
  const [isPasswordVisibleB, setIsPasswordVisibleB] = useState(true);
  const [popup, setPopup] = useState(false);

  const togglePasswordVisibilityA = () => {
    setIsPasswordVisibleA(prev => !prev);
  };

  const togglePasswordVisibilityB = () => {
    setIsPasswordVisibleB(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {popup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'New password Created'}
          route={routes.signin}
        />
      )}
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Create New Password</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>New Password</Text>
              <AppTextInput
                placeholder={'Enter Your Password'}
                value={newPassword}
                onChangeText={e => setNewPassword(e)}
                leftIcon={appIcons.lockIcon}
                eyeIcon={true}
                autoCorrect={false}
                secure={isPasswordVisibleA}
                showPassword={togglePasswordVisibilityA}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Confirm New Password</Text>
              <AppTextInput
                placeholder={'Enter Your Password'}
                value={confirmPassword}
                onChangeText={e => setConfirmPassword(e)}
                leftIcon={appIcons.lockIcon}
                eyeIcon={true}
                autoCorrect={false}
                secure={isPasswordVisibleB}
                showPassword={togglePasswordVisibilityB}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton title={'Next'} onPress={() => setPopup(true)} />
      </View>
    </View>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
  },
  titleContainer: {
    marginTop: heightPixel(20),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  inputContainer: {
    marginTop: heightPixel(20),
    gap: 15,
  },
  inputField: {
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  buttonContainer: {
    marginHorizontal: widthPixel(20),
    paddingBottom: heightPixel(10),
  },
});
