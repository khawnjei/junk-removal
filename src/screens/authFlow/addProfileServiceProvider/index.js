import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

import {routes} from '../../../services/constants';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

import ImageCropPicker from 'react-native-image-crop-picker';

import AuthHeader from '../../../components/authHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';

const AddProfileServiceProvider = ({navigation}) => {
  const [businessName, setBusinessName] = useState('');
  const [authorizedUser, setAuthorizedUser] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const scrollRef = useRef(null);

  const checkGalleryPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      addImage();
    } else {
      Alert.alert(
        'Permission Required',
        'Please grant access to your photo library/gallery to upload a photo.',
        [
          {
            text: 'OK',
            onPress: () => {
              openSettings().catch(() => Alert.alert('Cannot open settings'));
            },
          },
          {text: 'Cancel', onPress: () => console.log('Permission denied')},
        ],
      );
    }
  };

  const addImage = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image);
      console.log('img', image);
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <AuthHeader onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.profileImageContainer}>
            <Text style={styles.title}>Complete Profile</Text>
            <View style={styles.imageWrapper}>
              <Image
                source={image?.path ? {uri: image?.path} : appIcons.userIcon}
                style={styles.profileImage}
              />
              <TouchableOpacity onPress={checkGalleryPermission}>
                <Image source={appIcons.cameraIcon} style={styles.cameraIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputFieldsContainer}>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Business Name</Text>
              <AppTextInput
                placeholder={'Enter Business Name'}
                value={businessName}
                onChangeText={e => setBusinessName(e)}
                leftIcon={appIcons.nameIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Authorized User</Text>
              <AppTextInput
                placeholder={'User'}
                value={authorizedUser}
                onChangeText={e => setAuthorizedUser(e)}
                leftIcon={appIcons.nameIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Title</Text>
              <AppTextInput
                placeholder={'Title'}
                value={title}
                onChangeText={e => setTitle(e)}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Phone</Text>
              <AppTextInput
                placeholder={'Enter Your Phone'}
                value={phone}
                onChangeText={e => setPhone(e)}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Address</Text>
              <AppTextInput
                placeholder={'Enter Your Address'}
                value={address}
                onChangeText={e => setAddress(e)}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
                rightIcon={appIcons.locationIcon}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate(routes?.operationalHours)}
        />
      </View>
    </View>
  );
};

export default AddProfileServiceProvider;
