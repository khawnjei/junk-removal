import React from 'react';

import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {appIcons, appImages} from '../../../services/utilities/assets';
import {styles} from './styles';
import {routes} from '../../../services/constants';
import {colors} from '../../../services/utilities/colors';

import AppButton from '../../../components/button';

const ProfileVerification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <View style={styles.contentWrapper}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={appIcons.leftArrowIcon}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.mainTitle}>JUNK REMOVAL</Text>
              <Text style={styles.subtitle}>Profile Verification</Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={appImages.illustrationImage}
                style={styles.illustrationImage}
              />
            </View>
            <View style={styles.verificationTextWrapper}>
              <Text style={styles.waitText}>Please Wait!</Text>
              <Text style={styles.descriptionText}>
                Your business is being verified, this process could take up to
                24hrs. You’ll receive a notification once completed.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton
            title={'Go Back'}
            onPress={() => navigation.replace(routes?.signup)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileVerification;
