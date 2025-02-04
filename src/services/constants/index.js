import {Dimensions, PixelRatio} from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const storageKey = {};

export const routes = {
  auth: 'auth',
  tab: 'tabNavigator',
  splash: 'splash',
  onboarding: 'onboarding',
  userRoles: 'userRoles',
  signinType: 'signinType',
  signin: 'signin',
  forgotPassword: 'forgotPassword',
  otpVerification: 'otpVerification',
  createNewPassword: 'createNewPassword',
  signup: 'signup',
  addProfile: 'addProfile',
  home: 'home',
  settings: 'settings',
  myProjects: 'myProjects',
  kickStartProject: 'kickStartProject',
  projectSteps: 'projectSteps',
  notifications: 'notifications',
  requestedDetails: 'requestedDetails',
  offersDetails: 'offersDetails',
  companyInfo: 'companyInfo',
  junkProjectDetails: 'junkProjectDetails',
  addReview: 'addReview',
  editProfile: 'editProfile',
  myHistory: 'myHistory',
  billingHistory: 'billingHistory',
  helpCenter: 'helpCenter',
  privacyPolicy: 'privacyPolicy',
  termsOfUse: 'termsOfUse',
  aboutUs: 'aboutUs',
  bookingDetails: 'bookingDetails',
  deleteAccount: 'deleteAccount',
  offersDetailPage: 'offersDetailPage',
  onboardingServiceProvider: 'onboardingServiceProvider',
  addProfileServiceProvider: 'addProfileServiceProvider',
  operationalHours: 'operationalHours',
  licenseRegA: 'licenseRegA',
  licenseRegB: 'licenseRegB',
  profileVerification: 'profileVerification',
  requestedDetailsProvider: 'requestedDetailsProvider',
  makeOffer: 'makeOffer',
  bookingDetailsService: 'bookingDetailsService',
  offersDetailService: 'offersDetailService',
  editOperationalHours: 'editOperationalHours',
  editProfileProvider: 'editProfileProvider',
  myReviews: 'myReviews',
  myHistoryProvider: 'myHistoryProvider',
  bookingDetailsProvider: 'bookingDetailsProvider',
  selectedOperationalHours: 'selectedOperationalHours',
};

export const loaderStyles = {
  CircleFlip: 'CircleFlip',
  Bounce: 'Bounce',
  Wave: 'Wave',
  WanderingCubes: 'WanderingCubes',
  Pulse: 'Pulse',
  ChasingDots: 'ChasingDots',
  ThreeBounce: 'ThreeBounce',
  Circle: 'Circle',
  CubeGrid: '9CubeGrid',
  WordPress: 'WordPress',
  FadingCircle: 'FadingCircle',
  FadingCircleAlt: 'FadingCircleAlt',
  Arc: 'Arc',
};

export const wp = p => WINDOW_WIDTH * (p / 100);
export const hp = p => WINDOW_HEIGHT * (p / 100);
export {WINDOW_HEIGHT, WINDOW_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH};

const widthBaseScale = SCREEN_WIDTH / 430;
const heightBaseScale = SCREEN_HEIGHT / 932;

function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const widthPixel = size => {
  return normalize(size, 'width');
};
const heightPixel = size => {
  return normalize(size, 'height');
};
const fontPixel = size => {
  return heightPixel(size);
};

export {widthPixel, heightPixel, fontPixel};
