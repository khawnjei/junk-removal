import React from 'react';

import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {heightPixel, routes, widthPixel} from '../../../services/constants';

import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import SettingsCard from '../../../components/settingsCard';
import {useSelector} from 'react-redux';

const Settings = ({navigation}) => {
  const settingsArr = [
    {
      id: 1,
      icon: appIcons.settingIconA,
      title: 'Edit Profile',
      route: routes.editProfile,
    },
    {
      id: 2,
      icon: appIcons.settingIconB,
      title: 'My History',
      route: routes.myHistory,
    },
    {
      id: 3,
      icon: appIcons.settingIconC,
      title: 'Billing History',
      route: routes.billingHistory,
    },
    {
      id: 4,
      icon: appIcons.settingIconD,
      title: 'Help Center',
      route: routes.helpCenter,
    },
    {
      id: 5,
      icon: appIcons.settingIconE,
      title: 'Privacy Policy',
      route: routes.privacyPolicy,
    },
    {
      id: 6,
      icon: appIcons.settingIconF,
      title: 'Terms of Use',
      route: routes.termsOfUse,
    },
    {
      id: 7,
      icon: appIcons.settingIconI,
      title: 'About Us',
      route: routes.aboutUs,
    },
    {id: 8, icon: appIcons.settingIconG, title: 'Logout', route: null},
    {
      id: 9,
      icon: appIcons.settingIconH,
      title: 'Delete Account',
      route: routes.deleteAccount,
    },
  ];

  const serviceProviderSettings = [
    {
      id: 1,
      icon: appIcons.settingIconA,
      title: 'Edit Profile',
      route: routes.editProfileProvider,
    },
    {
      id: 2,
      icon: appIcons.settingIconJ,
      title: 'Operational Hours',
      route: routes.selectedOperationalHours,
    },
    {
      id: 3,
      icon: appIcons.settingIconC,
      title: 'Billing History',
      route: routes.billingHistory,
    },
    {
      id: 4,
      icon: appIcons.settingIconB,
      title: 'My History',
      route: routes.myHistoryProvider,
    },
    {
      id: 5,
      icon: appIcons.settingIconK,
      title: 'My Reviews',
      route: routes.myReviews,
    },
    {
      id: 6,
      icon: appIcons.settingIconD,
      title: 'Help Center',
      route: routes.helpCenter,
    },
    {
      id: 7,
      icon: appIcons.settingIconE,
      title: 'Privacy Policy',
      route: routes.privacyPolicy,
    },
    {
      id: 8,
      icon: appIcons.settingIconF,
      title: 'Terms of Use',
      route: routes.termsOfUse,
    },
    {
      id: 9,
      icon: appIcons.settingIconI,
      title: 'About Us',
      route: routes.aboutUs,
    },
    {
      id: 10,
      icon: appIcons.settingIconG,
      title: 'Logout',
      route: null,
    },
    {
      id: 11,
      icon: appIcons.settingIconH,
      title: 'Delete Account',
      route: routes.deleteAccount,
    },
  ];

  const userRole = useSelector(state => state?.userData?.role);
  const settingsToUse =
    userRole === 'Service Provider' ? serviceProviderSettings : settingsArr;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.notifications)}>
            <Image
              source={appIcons.notificationIcon}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Image source={appIcons.userIcon} style={styles.profileImage} />
          <Text style={styles.profileName}>
            {userRole === 'Service Provider'
              ? 'Business Name Here'
              : 'Danial Austin'}
          </Text>
          {userRole === 'Service Provider' ? null : (
            <Text style={styles.profileEmail}>danialaustin@gmail.com</Text>
          )}
          <Text style={styles.profilePhone}>+112233223114</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(20)}}>
          <View style={styles.settingsContainer}>
            {settingsToUse.map((item, index) => {
              const isLastItem = index === settingsToUse.length - 1;
              return (
                <SettingsCard
                  key={item.id}
                  item={item}
                  isLastItem={isLastItem}
                  navigation={navigation}
                  userRole={userRole}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Settings;
