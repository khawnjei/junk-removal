import React, {useRef, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';

const DeleteAccount = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisibleA, setIsPasswordVisibleA] = useState(true);

  const scrollRef = useRef(null);

  const togglePasswordVisibilityA = () => {
    setIsPasswordVisibleA(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(20)}}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <AppHeader
              onPress={() => navigation.goBack()}
              title={'Delete Account'}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoHeader}>
              <Image source={appIcons.deleteAccIcon} style={styles.icon} />
              <Text style={styles.warningText}>Delete your account will:</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                We're sorry to see you go. If you're sure you want to delete
                your Pro Search account, please be aware that this action is
                permanent and cannot be undone. All of your personal
                information, including your information and settings, will be
                permanently deleted.
              </Text>
              <Text style={styles.infoText}>
                If you're having trouble with your account or have concerns,
                please reach out to us at [contact email or support page] before
                proceeding with the account deletion. We'd love to help you
                resolve any issues and keep you as a valued Pro Search user.
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <AppTextInput
                placeholder={'Enter Your Password'}
                value={password}
                onChangeText={e => setPassword(e)}
                leftIcon={appIcons.lockIcon}
                autoCorrect={false}
                secure={isPasswordVisibleA}
                eyeIcon={true}
                showPassword={togglePasswordVisibilityA}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => navigation.goBack()}
          title={'Delete Account'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  header: {
    marginTop: heightPixel(20),
  },
  infoContainer: {
    marginTop: heightPixel(25),
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: widthPixel(23),
    height: widthPixel(23),
    resizeMode: 'contain',
  },
  warningText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2),
    color: '#FF0A0A',
  },
  infoTextContainer: {
    marginTop: heightPixel(10),
    gap: 10,
  },
  infoText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: '#0A0F0D',
  },
  formContainer: {
    marginTop: heightPixel(15),
  },
  inputContainer: {
    gap: 10,
  },
  inputLabel: {
    fontFamily: fontFamily.appTextMedium,
    color: '#1E222D',
    fontSize: responsiveFontSize(2),
  },
  buttonContainer: {
    paddingVertical: heightPixel(10),
    alignSelf: 'center',
  },
});

export default DeleteAccount;
