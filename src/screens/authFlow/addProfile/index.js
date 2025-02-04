import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {routes} from '../../../services/constants';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

import ImageCropPicker from 'react-native-image-crop-picker';

import AuthHeader from '../../../components/authHeader';
import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';
import DynamicPopup from '../../../components/dynamicPopup';

const AddProfile = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [popup, setPopup] = useState(false);

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
    })
      .then(image => {
        setImage(image);
        console.log('img', image);
      })
      .catch(err => {
        console.log('Error opening image picker:', err);
      });
  };

  return (
    <View style={styles.container}>
      {popup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'Profile Created'}
          route={routes?.kickStartProject}
        />
      )}
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
              <Text style={styles.inputLabel}>Full Name</Text>
              <AppTextInput
                placeholder={'Enter your name'}
                value={fullName}
                onChangeText={e => setFullName(e)}
                leftIcon={appIcons.nameIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Phone</Text>
              <AppTextInput
                placeholder={'Enter your phone'}
                value={phone}
                onChangeText={e => setPhone(e)}
                leftIcon={appIcons.phoneIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputField}>
              <Text style={styles.inputLabel}>Location</Text>
              <AppTextInput
                placeholder={'Your Address'}
                value={location}
                onChangeText={e => setLocation(e)}
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
        <AppButton title={'Next'} onPress={() => setPopup(true)} />
      </View>
    </View>
  );
};

export default AddProfile;
