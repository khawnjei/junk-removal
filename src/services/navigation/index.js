import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './authFlow';
import {routes} from '../constants';
import TabNavigator from './appFlow';
import {
  AboutUs,
  AddReview,
  BillingHistory,
  BookingDetailsProvider,
  BookingDetailsService,
  CompanyInfo,
  DeleteAccount,
  EditOperationalHours,
  EditProfile,
  EditProfileProvider,
  HelpCenter,
  JunkProjectDetails,
  KickStartProject,
  MakeOffer,
  MyHistory,
  MyHistoryProvider,
  MyReviews,
  Notifications,
  OffersDetailPage,
  OffersDetails,
  OffersDetailService,
  PrivacyPolicy,
  ProjectSteps,
  RequestedDetails,
  RequestedDetailsProvider,
  SelectedOperationalHours,
  TermsOfUse,
} from '../../screens/appFlow';
import {AddProfile} from '../../screens/authFlow';
import BookingDetails from '../../screens/appFlow/bookingDetails';

const MyStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName={routes.auth}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={routes.auth} component={AuthNavigation} />
        <MyStack.Screen name={routes.tab} component={TabNavigator} />
        <MyStack.Screen
          name={routes.kickStartProject}
          component={KickStartProject}
        />
        <MyStack.Screen name={routes.projectSteps} component={ProjectSteps} />
        <MyStack.Screen name={routes.notifications} component={Notifications} />
        <MyStack.Screen
          name={routes.requestedDetails}
          component={RequestedDetails}
        />
        <MyStack.Screen name={routes.offersDetails} component={OffersDetails} />
        <MyStack.Screen name={routes.companyInfo} component={CompanyInfo} />
        <MyStack.Screen
          name={routes.junkProjectDetails}
          component={JunkProjectDetails}
        />
        <MyStack.Screen name={routes.addReview} component={AddReview} />
        <MyStack.Screen name={routes.editProfile} component={EditProfile} />
        <MyStack.Screen name={routes.myHistory} component={MyHistory} />
        <MyStack.Screen
          name={routes.billingHistory}
          component={BillingHistory}
        />
        <MyStack.Screen name={routes.helpCenter} component={HelpCenter} />
        <MyStack.Screen name={routes.privacyPolicy} component={PrivacyPolicy} />
        <MyStack.Screen name={routes.termsOfUse} component={TermsOfUse} />
        <MyStack.Screen name={routes.aboutUs} component={AboutUs} />
        <MyStack.Screen
          name={routes.bookingDetails}
          component={BookingDetails}
        />
        <MyStack.Screen name={routes.deleteAccount} component={DeleteAccount} />
        <MyStack.Screen
          name={routes.offersDetailPage}
          component={OffersDetailPage}
        />
        <MyStack.Screen
          name={routes.requestedDetailsProvider}
          component={RequestedDetailsProvider}
        />
        <MyStack.Screen name={routes.makeOffer} component={MakeOffer} />
        <MyStack.Screen
          name={routes.bookingDetailsService}
          component={BookingDetailsService}
        />
        <MyStack.Screen
          name={routes.offersDetailService}
          component={OffersDetailService}
        />
        <MyStack.Screen
          name={routes.editOperationalHours}
          component={EditOperationalHours}
        />
        <MyStack.Screen
          name={routes.editProfileProvider}
          component={EditProfileProvider}
        />
        <MyStack.Screen name={routes.myReviews} component={MyReviews} />
        <MyStack.Screen
          name={routes.myHistoryProvider}
          component={MyHistoryProvider}
        />
        <MyStack.Screen
          name={routes.bookingDetailsProvider}
          component={BookingDetailsProvider}
        />
        <MyStack.Screen
          name={routes.selectedOperationalHours}
          component={SelectedOperationalHours}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};
