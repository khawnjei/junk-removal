import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {routes} from '../../../services/constants';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

import ImageCropPicker from 'react-native-image-crop-picker';

import AppTextInput from '../../../components/appTextInput';
import AppButton from '../../../components/button';
import AppHeader from '../../../components/appHeader';

const EditProfileProvider = ({navigation}) => {
  const [businessName, setBusinessName] = useState('');
  const [authorizedUser, setAuthorizedUser] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const scrollRef = useRef(null);

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
      <View style={styles.headerContainer}>
        <AppHeader title={'Edit Profile'} onPress={() => navigation.goBack()} />
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.profileImageContainer}>
            <View style={styles.imageWrapper}>
              <Image
                source={image?.path ? {uri: image?.path} : appIcons.userIcon}
                style={styles.profileImage}
              />
              <TouchableOpacity onPress={addImage}>
                <Image
                  source={appIcons.editImageIcon}
                  style={styles.cameraIcon}
                />
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
            <View style={styles.locationSectionContainer}>
              <Text style={styles.sectionTitleText}>Your Location</Text>
              <View style={styles.locationBox}>
                <View style={styles.locationDetailsWrapper}>
                  <Image
                    source={appIcons.markerIcon}
                    style={styles.locationIcon}
                  />
                  <View>
                    <Text style={styles.sectionTitleText}>
                      Lahore Ring Road
                    </Text>
                    <Text style={styles.locationDescription}>
                      Bankers Town, Lahore, Pakistan
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Image
                    source={appIcons.editIcon}
                    style={styles.locationEditIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton title={'Save Changes'} onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default EditProfileProvider;
