import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {appIcons} from '../../utilities/assets';
import {
  Home,
  MyBooking,
  MyProjects,
  ServiceProviderHome,
  Settings,
} from '../../../screens/appFlow';
import {colors} from '../../utilities/colors';
import {heightPixel, widthPixel} from '../../constants';
import {fontFamily} from '../../utilities/fonts';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const tabArray = [
  {
    route: 'Home',
    icon: appIcons.homeIcon,
    component: Home,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },

  {
    route: 'My Projects',
    icon: appIcons.projectIcon,
    component: MyProjects,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },
  {
    route: 'Settings',
    icon: appIcons.settingsIcon,
    component: Settings,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },
];

const serviceProviderTabs = [
  {
    route: 'Home',
    icon: appIcons.homeIcon,
    component: ServiceProviderHome,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },
  {
    route: 'My Booking',
    icon: appIcons.bookingTabIcon,
    component: MyBooking,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },
  {
    route: 'Settings',
    icon: appIcons.settingsIcon,
    component: Settings,
    iconWidth: widthPixel(24),
    iconHeight: heightPixel(24),
  },
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const isHome = item.route === 'Home';
  const tintColor = focused ? colors.theme : '#666666';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={isHome ? styles.homeButtonContainer : styles.container}>
      <View style={isHome ? styles.homeButtonWrapper : styles.btn}>
        <View style={isHome ? styles.homeButton : styles.btn}>
          <Image
            source={item.icon}
            style={[
              {
                tintColor: focused ? colors.theme : '#666666',
                resizeMode: 'contain',
              },
              {width: item.iconWidth, height: item.iconHeight},
            ]}
          />
          <Text
            style={[
              styles.tabLabel,
              {color: focused ? colors.theme : '#666666'},
            ]}>
            {item.route}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  const userRole = useSelector(state => state?.userData?.role);

  const handleUserRoles = () => {
    if (userRole === 'Client') {
      return tabArray;
    } else {
      return serviceProviderTabs;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
      }}>
      {handleUserRoles().map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  barStyle: {
    height: Platform.OS === 'ios' ? heightPixel(100) : heightPixel(80),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: widthPixel(-100),
    paddingBottom: Platform.OS === 'ios' ? heightPixel(40) : 0,
    paddingTop: Platform.OS === 'ios' ? heightPixel(25) : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    marginTop: heightPixel(5),
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    fontFamily: fontFamily.appTextRegular,
  },
});
