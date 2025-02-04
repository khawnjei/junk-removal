import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

import AppHeader from '../../../components/appHeader';
import ImageCropPicker from 'react-native-image-crop-picker';
import AppTextInput from '../../../components/appTextInput';

import AppButton from '../../../components/button';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
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
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <AppHeader
              onPress={() => navigation.goBack()}
              title={'Edit Profile'}
            />
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              source={image?.path ? {uri: image?.path} : appIcons.userIcon}
              style={styles.profileImage}
            />
            <TouchableOpacity onPress={addImage}>
              <Image
                source={appIcons.editImageIcon}
                style={styles.editImageIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <AppTextInput
                placeholder={'Enter Your Name'}
                value={fullName}
                onChangeText={e => setFullName(e)}
                leftIcon={appIcons.nameIcon}
                onFocus={event => {
                  scrollRef.current?.scrollToFocusedInput(event.target);
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone</Text>
              <AppTextInput
                placeholder={'Enter Your Phone'}
                value={phone}
                onChangeText={e => setPhone(e)}
                leftIcon={appIcons.phoneIcon}
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
        <View style={styles.saveButtonContainer}>
          <AppButton
            title={'Save Changes'}
            onPress={() => navigation.goBack()}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditProfile;
