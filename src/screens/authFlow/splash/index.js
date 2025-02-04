import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';
import {routes, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';

const Splash = ({navigation}) => {
  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(routes?.userRoles);
      }, 3000),
    );
  };

  React.useEffect(() => {
    performTimeConsumingTask();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Image source={appIcons.mainIcon} style={styles.icon} />
      <Text style={styles.title}>No Pressure, No Hassle, No Problem!</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    gap: 15,
  },
  icon: {
    width: widthPixel(180),
    height: widthPixel(180),
    resizeMode: 'contain',
  },
  title: {
    color: colors.theme,
    fontFamily: fontFamily.appTextSemiBold,
  },
});
