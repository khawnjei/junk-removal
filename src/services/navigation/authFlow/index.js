import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import * as Auth from '../../../screens/authFlow';
import {routes} from '../../constants';

const AuthStack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={routes.splash}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}>
      <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
      <AuthStack.Screen name={routes.userRoles} component={Auth.UserRoles} />
      <AuthStack.Screen name={routes.onboarding} component={Auth.Onboarding} />
      <AuthStack.Screen name={routes.signinType} component={Auth.SigninType} />
      <AuthStack.Screen name={routes.signin} component={Auth.Signin} />
      <AuthStack.Screen
        name={routes.forgotPassword}
        component={Auth.ForgotPassword}
      />
      <AuthStack.Screen
        name={routes.otpVerification}
        component={Auth.OtpVerification}
      />
      <AuthStack.Screen
        name={routes.createNewPassword}
        component={Auth.NewPassword}
      />
      <AuthStack.Screen name={routes.signup} component={Auth.Signup} />
      <AuthStack.Screen name={routes.addProfile} component={Auth.AddProfile} />
      <AuthStack.Screen
        name={routes.onboardingServiceProvider}
        component={Auth.OnboardingServiceProvider}
      />
      <AuthStack.Screen
        name={routes.addProfileServiceProvider}
        component={Auth.AddProfileServiceProvider}
      />
      <AuthStack.Screen
        name={routes.operationalHours}
        component={Auth.OperationalHours}
      />
      <AuthStack.Screen
        name={routes.licenseRegA}
        component={Auth.LicenseRegA}
      />
      <AuthStack.Screen
        name={routes.licenseRegB}
        component={Auth.LicenseRegB}
      />
      <AuthStack.Screen
        name={routes.profileVerification}
        component={Auth.ProfileVerification}
      />
    </AuthStack.Navigator>
  );
};
