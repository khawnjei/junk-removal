import React from 'react';

import {View, Text, Image, ScrollView} from 'react-native';

import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';
import {heightPixel, widthPixel} from '../../../services/constants';

import AppHeader from '../../../components/appHeader';
import {useSelector} from 'react-redux';

const BillingHistory = ({navigation}) => {
  const userRole = useSelector(state => state?.userData?.role);
  console.log('first', userRole);

  const billingArr = [
    {
      id: 1,
      companyName: 'Name Here',
      date: '21 Oct 2023',
      price: '$100',
    },
    {id: 2, companyName: 'Name Here', date: '21 Oct 2023', price: '$11200'},
    {id: 3, companyName: 'Name Here', date: '21 Oct 2023', price: '$300'},
    {id: 4, companyName: 'Name Here', date: '21 Oct 2023', price: '$400'},
    {id: 5, companyName: 'Name Here', date: '21 Oct 2023', price: '$500'},
    {id: 6, companyName: 'Name Here', date: '21 Oct 2023', price: '$600'},
    {id: 7, companyName: 'Name Here', date: '21 Oct 2023', price: '$700'},
    {id: 8, companyName: 'Name Here', date: '21 Oct 2023', price: '$800'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <AppHeader
            onPress={() => navigation.goBack()}
            title={'Billing History'}
          />
        </View>
        <View style={styles.tableHeaderContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>
              {userRole === 'Client' ? 'Company' : 'User'}
            </Text>
            <Text style={styles.tableHeaderText}>Last Date:</Text>
            <Text style={styles.tableHeaderText}>Price</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: heightPixel(20),
            paddingHorizontal: widthPixel(20),
          }}>
          {billingArr.map((item, index) => {
            return (
              <View key={item?.id} style={{gap: 10}}>
                <BillingCard index={index} item={item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const BillingCard = ({item, index}) => {
  return (
    <View key={item?.id} style={styles.rowContainer}>
      <View style={styles.row}>
        <View style={styles.companyInfo}>
          <Image source={appIcons.companyIcon} style={styles.companyIcon} />
          <Text style={styles.companyName}>{item?.companyName}</Text>
        </View>
        <View>
          <Text style={styles.dateText}>{item?.date}</Text>
        </View>
        <View>
          <Text style={styles.priceText}>{item?.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BillingHistory;
