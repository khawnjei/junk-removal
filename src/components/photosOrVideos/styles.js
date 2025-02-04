const {responsiveFontSize} = require('react-native-responsive-dimensions');

import {heightPixel, widthPixel} from '../../services/constants';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  textDescription: {
    color: '#666666',
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(1.8),
  },
  photosSection: {
    marginTop: heightPixel(20),
  },
  sectionTitle: {
    color: colors.black,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.1),
  },
  sectionSubTitle: {
    color: '#666666',
    fontFamily: fontFamily.appTextMedium,
    fontSize: responsiveFontSize(2.1),
  },
  imagePickerContainer: {
    marginTop: heightPixel(14),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePickerIcon: {
    width: widthPixel(60),
    height: widthPixel(60),
    resizeMode: 'contain',
    marginRight: widthPixel(5),
  },
  imageListContainer: {
    marginLeft: widthPixel(12),
  },
  imageContainer: {
    position: 'relative',
    marginRight: widthPixel(12),
  },
  imageItem: {
    borderRadius: 7,
    width: widthPixel(60),
    height: widthPixel(60),
    resizeMode: 'cover',
  },
  removeButtonContainer: {
    position: 'absolute',
    top: -3,
    right: -5,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 3,
  },
  removeButtonIcon: {
    width: widthPixel(16),
    height: widthPixel(16),
    resizeMode: 'contain',
  },
  videosSection: {
    marginTop: heightPixel(20),
  },
  videoPickerContainer: {
    marginTop: heightPixel(14),
  },
  videoPickerIcon: {
    width: widthPixel(390),
    height: heightPixel(144),
    resizeMode: 'contain',
  },
  videoListContainer: {
    marginTop: heightPixel(14),
  },
  videoRemoveButtonContainer: {
    position: 'absolute',
    top: -3,
    right: -5,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 3,
  },
  videoRemoveButtonIcon: {
    width: widthPixel(16),
    height: widthPixel(16),
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.1),
    fontFamily: fontFamily.appTextSemiBold,
    marginBottom: 20,
    color: colors.black,
  },
  modalButton: {
    backgroundColor: colors.theme,
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextMedium,
    color: colors.white,
  },
  modalButtonCancelText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.appTextMedium,
    color: colors.black,
  },
});
