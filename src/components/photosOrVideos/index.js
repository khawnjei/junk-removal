import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import {createThumbnail} from 'react-native-create-thumbnail';

import {
  imagePickerFromCamera,
  imagePickerFromGallery,
  videoPickerFromCamera,
  videoPickerFromGallery,
} from '../../helpingMethods';
import {colors} from '../../services/utilities/colors';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const PhotosOrVideos = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);

  const checkAndRequestPermission = async (permission, onGranted) => {
    const result = await check(permission);
    if (result === RESULTS.GRANTED) {
      onGranted();
    } else {
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) {
        onGranted();
      } else {
        Alert.alert('Permission Required', 'Please grant access to continue.', [
          {
            text: 'OK',
            onPress: () =>
              openSettings().catch(() => Alert.alert('Cannot open settings')),
          },
          {text: 'Cancel'},
        ]);
      }
    }
  };

  const pickImage = async (fromCamera = false) => {
    const permission = fromCamera
      ? Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA
      : Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    await checkAndRequestPermission(permission, async () => {
      try {
        setModalVisible(false);
        const options = {mediaType: 'photo', quality: 1};
        const result = fromCamera
          ? await imagePickerFromCamera(options)
          : await imagePickerFromGallery(options);

        if (result?.assets?.length) {
          setImages(prevImages => [...prevImages, result.assets[0]]);
        } else {
          console.log('No image selected');
        }
      } catch (error) {
        console.error('Error picking image:', error);
      }
    });
  };

  const captureVideo = async (fromCamera = false) => {
    const permission = fromCamera
      ? Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA
      : Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    await checkAndRequestPermission(permission, async () => {
      try {
        setVideoModalVisible(false);
        const options = {mediaType: 'video', quality: 1};
        const result = fromCamera
          ? await videoPickerFromCamera(options)
          : await videoPickerFromGallery(options);

        if (result?.assets?.length) {
          generateThumbnail(result.assets[0].uri, thumbnailPath => {
            setVideos(prevVideos => [
              ...prevVideos,
              {video: result.assets[0], thumbnail: thumbnailPath},
            ]);
          });
        } else {
          console.log('No video selected');
        }
      } catch (error) {
        console.error('Error capturing video:', error);
      }
    });
  };

  const generateThumbnail = async (videoPath, callback) => {
    try {
      const response = await createThumbnail({
        url: videoPath,
        timeStamp: 1000,
      });
      callback(response.path);
    } catch (error) {
      console.error('Error generating thumbnail:', error);
    }
  };

  const removeImage = index => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const removeVideo = index => {
    setVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
  };

  const handleAddVideo = () => {
    setVideoModalVisible(true);
  };

  const handleAddImage = () => {
    setModalVisible(true);
  };

  const renderImageItem = ({item, index}) => (
    <View style={styles.imageContainer}>
      <Image style={styles.imageItem} source={{uri: item.uri}} />
      <TouchableOpacity
        onPress={() => removeImage(index)}
        style={styles.removeButtonContainer}>
        <Image source={appIcons.removeIcon} style={styles.removeButtonIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderVideoItem = ({item, index}) => (
    <View style={styles.imageContainer}>
      <Image style={styles.imageItem} source={{uri: item.thumbnail}} />
      <TouchableOpacity
        onPress={() => removeVideo(index)}
        style={styles.videoRemoveButtonContainer}>
        <Image
          source={appIcons.removeIcon}
          style={styles.videoRemoveButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.textDescription}>
        Provide at least 2 photos & we recommend at least 1 video
      </Text>
      <View style={styles.photosSection}>
        <Text style={styles.sectionTitle}>
          Photos <Text style={styles.sectionSubTitle}>(minimum 2)</Text>
        </Text>
        <View style={styles.imagePickerContainer}>
          <TouchableOpacity onPress={handleAddImage}>
            <Image
              source={appIcons.uploadImageIcon}
              style={styles.imagePickerIcon}
            />
          </TouchableOpacity>
          <FlatList
            data={images}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderImageItem}
            contentContainerStyle={styles.imageListContainer}
          />
        </View>
      </View>
      <View style={styles.videosSection}>
        <Text style={styles.sectionTitle}>
          Videos <Text style={styles.sectionSubTitle}>(Recommended)</Text>
        </Text>
        <View>
          <TouchableOpacity
            onPress={handleAddVideo}
            style={styles.videoPickerContainer}>
            <Image
              source={appIcons.uploadVideoIcon}
              style={styles.videoPickerIcon}
            />
          </TouchableOpacity>
          <FlatList
            data={videos}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderVideoItem}
            contentContainerStyle={styles.videoListContainer}
          />
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose an option</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage(false)}>
              <Text style={styles.modalButtonText}>Pick from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => pickImage(true)}>
              <Text style={styles.modalButtonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, {backgroundColor: colors.red}]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={videoModalVisible}
        onRequestClose={() => setVideoModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose an option</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => captureVideo(true)}>
              <Text style={styles.modalButtonText}>Record from Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => captureVideo(false)}>
              <Text style={styles.modalButtonText}>Pick from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, {backgroundColor: colors.red}]}
              onPress={() => setVideoModalVisible(false)}>
              <Text style={styles.modalButtonCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhotosOrVideos;
