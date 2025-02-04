import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {heightPixel, routes} from '../../../services/constants';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

import StarRating from 'react-native-star-rating-widget';

import AppHeader from '../../../components/appHeader';
import AppButton from '../../../components/button';
import DynamicPopup from '../../../components/dynamicPopup';

const AddReview = ({navigation}) => {
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [popup, setPopup] = useState(false);

  const handleStarRating = newRating => {
    setRating(newRating);
  };

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      {popup && (
        <DynamicPopup
          icon={appIcons.popupIcon}
          title={'Review Added'}
          route={routes.tab}
        />
      )}

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <AppHeader title={'Add Review'} onPress={() => navigation.goBack()} />
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: heightPixel(20)}}>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              If you’d like, leave a review for the junk removal service you
              received.
            </Text>
            <Image source={appIcons.companyIcon} style={styles.companyIcon} />
            <Text style={styles.companyName}>Company Name</Text>
          </View>
          <View style={styles.starRatingContainer}>
            <StarRating
              rating={rating}
              enableHalfStar={false}
              onChange={handleStarRating}
              starSize={32}
              color="#E2C126"
              starStyle={styles.starStyle}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Write Feedback"
              value={inputValue}
              onChangeText={handleInputChange}
              placeholderTextColor="#666666"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.footerContainer}>
        <AppButton title={'Add Review'} onPress={() => setPopup(true)} />
      </View>
    </View>
  );
};

export default AddReview;
