import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {appIcons, appImages} from '../../../services/utilities/assets';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';

import DynamicCard from '../../../components/dynamicCard';

const MyProjects = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <View style={styles.userSection}>
            <Image source={appIcons.userIcon} style={styles.userIcon} />
            <View>
              <Text style={styles.welcomeText}>Welcome Back!</Text>
              <Text style={styles.userName}>Andrew Ainsley</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.notifications)}>
            <Image
              source={appIcons.notificationIcon}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.noProjectContainer}>
          <Image
            source={appImages.projectTemplateImage}
            style={styles.projectImage}
          />
          <Text style={styles.noProjectText}>No Project Yet</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes?.projectSteps)}
            style={styles.startProjectButton}>
            <Text style={styles.startProjectButtonText}>Start Project</Text>
          </TouchableOpacity>
        </View> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <DynamicCard
            company={true}
            onPress={() => navigation.navigate(routes.junkProjectDetails)}
            price={true}
          />
          <DynamicCard
            company={true}
            onPress={() => navigation.navigate(routes.junkProjectDetails)}
            price={true}
          />
          <DynamicCard
            company={true}
            onPress={() => navigation.navigate(routes.junkProjectDetails)}
            price={true}
          />
          <DynamicCard
            company={true}
            onPress={() => navigation.navigate(routes.junkProjectDetails)}
            price={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
  },
  topSection: {
    marginTop: heightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(20),
  },
  userSection: {
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    width: widthPixel(48),
    height: widthPixel(48),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  welcomeText: {
    fontFamily: fontFamily.appTextLight,
    fontSize: responsiveFontSize(1.8),
    color: '#8E8E8E',
  },
  userName: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: '#1B1B1E',
  },
  notificationIcon: {
    width: widthPixel(32),
    height: widthPixel(32),
    resizeMode: 'contain',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
    paddingTop: heightPixel(20),
    gap: 15,
    paddingHorizontal: widthPixel(20),
  },
  noProjectContainer: {
    marginTop: heightPixel(130),
  },
  noProjectText: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2),
    color: colors.black,
    textAlign: 'center',
    marginTop: heightPixel(55),
  },
  projectImage: {
    width: '100%',
    height: heightPixel(233),
  },
  startProjectButton: {
    width: widthPixel(270),
    height: heightPixel(52),
    backgroundColor: colors.theme,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: heightPixel(70),
  },
  startProjectButtonText: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
    color: colors.white,
  },
});

export default MyProjects;
