import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import Requested from '../../../components/requested';
import Offers from '../../../components/offers';

const Home = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabsArr = [
    {id: 1, title: 'Requested'},
    {id: 2, title: 'Offers'},
  ];

  const containerWidth = widthPixel(330);
  const containerHeight = heightPixel(50);

  const renderContent = () => {
    switch (selectedTab) {
      case 1:
        return <Requested />;
      case 2:
        return <Offers />;
      default:
        return <Requested />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View style={styles.innerContainer}>
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
        <View style={styles.tabsContainer}>
          <View style={styles.tabsWrapper}>
            {tabsArr.map(item => {
              const isSelected = selectedTab === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSelectedTab(item.id)}
                  style={[
                    styles.tabButton,
                    isSelected && styles.selectedTabButton,
                    {
                      width: isSelected ? containerWidth / 2 : 'auto',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      isSelected && styles.selectedTabText,
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {renderContent()}
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes?.projectSteps, {type: 'home'})
          }
          style={styles.addContainer}>
          <Image source={appIcons.addIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
