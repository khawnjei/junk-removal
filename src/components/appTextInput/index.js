import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {heightPixel, widthPixel} from '../../services/constants';
import {appIcons} from '../../services/utilities/assets';
import {fontFamily} from '../../services/utilities/fonts';
import {colors} from '../../services/utilities/colors';

function AppTextInput({
  value,
  placeholder,
  onChangeText,
  eyeIcon,
  secure,
  autoCorrect,
  keyboardType,
  showPassword,
  onFocus,
  editable,
  rightIcon,
  leftIcon,
  onPressRightIcon,
  dropdown = false,
  leftIconStyle,
}) {
  return (
    <View style={styles.inputField}>
      {leftIcon && (
        <Image style={[styles.leftIcon, leftIconStyle]} source={leftIcon} />
      )}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#606970"
          keyboardType={keyboardType}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secure}
          autoCorrect={autoCorrect}
          onFocus={onFocus}
          editable={editable}
        />
      </View>
      {rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image
            style={dropdown ? styles.dropdownIcon : styles.locationIcon}
            source={rightIcon}
          />
        </TouchableOpacity>
      )}
      {eyeIcon && (
        <TouchableOpacity
          onPress={showPassword}
          style={styles.eyeIconContainer}>
          <Image
            style={styles.eyeIcon}
            source={secure ? appIcons.eyeIcon : appIcons.showIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: heightPixel(50),
    paddingHorizontal: widthPixel(13),
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.appTextRegular,
    color: '#666666',
    fontSize: responsiveFontSize(2),
    paddingVertical: 0,
    paddingTop: heightPixel(2),
  },
  leftIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
    marginRight: widthPixel(6),
  },
  eyeIconContainer: {
    padding: widthPixel(5),
  },
  eyeIcon: {
    width: widthPixel(20),
    height: heightPixel(16),
    resizeMode: 'contain',
  },
  locationIcon: {
    width: widthPixel(16),
    height: heightPixel(19),
    resizeMode: 'contain',
    marginRight: widthPixel(10),
  },
  dropdownIcon: {
    width: widthPixel(24),
    height: heightPixel(24),
    resizeMode: 'contain',
    marginRight: widthPixel(5),
  },
});

export default AppTextInput;
