import React from 'react';

import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {colors} from '../../../services/utilities/colors';
import {heightPixel, widthPixel} from '../../../services/constants';
import {fontFamily} from '../../../services/utilities/fonts';

import AppHeader from '../../../components/appHeader';

const AboutUs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <AppHeader onPress={() => navigation.goBack()} title={'About Us'} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
              Lorem ipsum dolor sit amet consectetur. In consequat at maecenas
              orci sed dolor. Ornare molestie mi blandit bibendum velit orci in
              tortor. Pretium tristique ut lectus quisque mattis. Ipsum risus
              amet nulla at massa proin vivamus. Arcu tempus leo mauris sit
              massa luctus aliquet enim sit. Adipiscing a sed orci tortor
              adipiscing mauris. Et vitae netus nam elementum amet arcu vel.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginHorizontal: widthPixel(20),
    flex: 1,
  },
  header: {
    marginTop: heightPixel(20),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: heightPixel(20),
  },
  textContainer: {
    marginTop: heightPixel(20),
  },
  text: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.9),
    color: '#414141',
  },
});

export default AboutUs;
