import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, routes, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';
import {appIcons} from '../../../services/utilities/assets';

import AppHeader from '../../../components/appHeader';
import StepIndicator from 'react-native-step-indicator';
import AboutProject from '../../../components/aboutProject';
import PhotosOrVideos from '../../../components/photosOrVideos';
import DateAndTime from '../../../components/date&time';
import AppButton from '../../../components/button';
import DynamicPopup from '../../../components/dynamicPopup';

const ProjectSteps = ({navigation, route}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [popup, setPopup] = useState(false);

  const type = route?.params?.type;

  const labels = ['About', 'Photos or Videos', 'Date & Time'];

  const renderComponentForStep = () => {
    switch (currentPosition) {
      case 0:
        return <AboutProject />;
      case 1:
        return <PhotosOrVideos />;
      case 2:
        return <DateAndTime />;
      default:
        return <AboutProject />;
    }
  };

  const handleNext = () => {
    if (currentPosition < labels.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setPopup(true);
    }
  };

  const handleBack = () => {
    if (currentPosition === 0) {
      if (type === 'home') {
        navigation.navigate(routes.tab);
      } else {
        navigation.goBack();
      }
    } else {
      setCurrentPosition(currentPosition - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      {popup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'Project Submitted Succesfully'}
          route={routes?.tab}
        />
      )}
      <View style={styles.mainContent}>
        <View style={styles.headerContainer}>
          <AppHeader title={labels[currentPosition]} onPress={handleBack} />
        </View>
        <View style={styles.stepIndicatorContainer}>
          <Steps
            currentPosition={currentPosition}
            onPageChange={() => {}}
            labels={labels}
          />
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          {renderComponentForStep()}
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Next'} onPress={handleNext} />
      </View>
    </View>
  );
};

const Steps = ({currentPosition, onPageChange, labels}) => {
  const customStyles = {
    stepIndicatorSize: 26,
    currentStepIndicatorSize: 26,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: colors.theme,
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: colors.theme,
    stepStrokeUnFinishedColor: '#777777',
    separatorFinishedColor: colors.theme,
    separatorUnFinishedColor: '#777777',
    stepIndicatorFinishedColor: colors.theme,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: colors.theme,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: colors.white,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#777777',
    labelColor: '#777777',
    labelSize: 13,
    currentStepLabelColor: colors.theme,
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      labels={labels}
      stepCount={labels.length}
      onPress={onPageChange}
      renderLabel={({position, label, currentPosition}) => (
        <Text
          style={{
            fontFamily:
              position === currentPosition ? fontFamily.appTextMedium : '',
            fontSize:
              position === currentPosition
                ? responsiveFontSize(1.4)
                : responsiveFontSize(1.4),
            color: position <= currentPosition ? colors.theme : '#777777',
          }}>
          {label}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContent: {
    flex: 1,
  },
  headerContainer: {
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(20),
  },
  stepIndicatorContainer: {
    marginTop: heightPixel(20),
    marginLeft: widthPixel(-40),
    marginHorizontal: widthPixel(-20),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: heightPixel(30),
    marginTop: heightPixel(15),
    paddingHorizontal: widthPixel(20),
  },
  buttonContainer: {
    marginVertical: heightPixel(10),
    alignSelf: 'center',
  },
});

export default ProjectSteps;
