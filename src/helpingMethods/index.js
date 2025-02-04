import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const imagePickerFromGallery = async options => {
  try {
    return await launchImageLibrary(options);
  } catch (error) {
    console.log(error);
  }
};

export const imagePickerFromCamera = async options => {
  try {
    return await launchCamera(options);
  } catch (error) {
    console.log(error);
  }
};

export const videoPickerFromCamera = async options => {
  try {
    const result = await launchCamera({
      mediaType: 'video',
      quality: 1,
      ...options,
    });
    return result;
  } catch (error) {
    console.log('Error picking video from camera:', error);
  }
};

export const videoPickerFromGallery = async options => {
  try {
    const result = await launchImageLibrary({
      mediaType: 'video',
      quality: 1,
      ...options,
    });
    return result;
  } catch (error) {
    console.log('Error picking video from gallery:', error);
  }
};
