import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

import AppButton from '../../../components/button';
import {routes} from '../../../services/constants';
import {useDispatch} from 'react-redux';
import {setUserRole} from '../../../redux/slices/UserDataSlice';

const userRoles = [
  {
    id: 1,
    title: 'Client',
    icon: appIcons.clientIcon,
  },
  {
    id: 2,
    title: 'Service Provider',
    icon: appIcons.serviceProdviderIcon,
  },
];

const UserRoles = ({navigation}) => {
  const [selectedRole, setSelectedRole] = useState(userRoles[0]);
  console.log('first', selectedRole);

  const dispatch = useDispatch();

  const handleRoles = () => {
    dispatch(setUserRole(selectedRole?.title));
    if (selectedRole?.title === 'Client')
      navigation.navigate(routes?.onboarding);
    else {
      navigation.navigate(routes?.onboardingServiceProvider);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <Image source={appIcons.mainIcon} style={styles.mainIcon} />
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Choose a Role</Text>
          <Text style={styles.subHeaderText}>
            No phone calls, no setting in person appointments and no visits from
            high pressure salespeople
          </Text>
        </View>
        <View style={styles.rolesContainer}>
          {userRoles.map(item => {
            const isSelected = item?.id === selectedRole?.id;
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={item?.id}
                style={styles.roleCard}
                onPress={() => setSelectedRole(item)}>
                {isSelected ? (
                  <View style={styles.selectIconWrapper}>
                    <Image
                      source={appIcons.selectIcon}
                      style={styles.selectIcon}
                    />
                  </View>
                ) : (
                  <View style={styles.placeHolder} />
                )}
                <View style={styles.roleContentWrapper}>
                  <Image source={item?.icon} style={styles.roleIcon} />
                  <Text style={styles.roleTitle}>{item?.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Continue'} onPress={handleRoles} />
      </View>
    </View>
  );
};

export default UserRoles;
