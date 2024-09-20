import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Header from '../Layout/Header';

const Media = () => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImageUri(selectedImage.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header leftImage={require('../assets/images/Spectra_Solar.png')}/>

      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.viewJobButton}>
            <Text style={styles.viewJobButtonText}>View Job Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stopTrackingButton}>
            <Text style={styles.stopTrackingButtonText}>Stop Tracking</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            <Text style={styles.timerNumber}>05</Text> Hours
          </Text>
          <Text style={styles.timerText}>
            <Text style={styles.timerNumber}>42</Text> Minutes
          </Text>
          <Text style={styles.timerText}>
            <Text style={styles.timerNumber}>54</Text> Seconds
          </Text>
        </View>

        <Text style={styles.totalTimeText}>Total Time for this 10:AM - 3:PM</Text>

        <View style={styles.divider} />
        <TouchableOpacity style={styles.uploadMediaContainer} onPress={pickImage}>
          <Image
            source={require('../assets/images/Spectra_Solar.png')}
            style={styles.uploadIcon}
          />
          <Text style={styles.uploadText}>Upload Media</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image source={{uri: imageUri}} style={styles.uploadedImage} />
        )}

        <View style={styles.navigateBtnContainer}>
          <TouchableOpacity style={styles.navigateBtn}>
            <EvilIcons name="location" size={25}  style={styles.navigateIcon}/>
            <Text style={styles.navigateBtnText}>Navigate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  viewJobButton: {
    backgroundColor: '#8BBF3E',
    width: '35%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  viewJobButtonText: {
    color: '#ffffff',
  },
  stopTrackingButton: {
    backgroundColor: '#F32929',
    width: '35%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  stopTrackingButtonText: {
    color: '#ffffff',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 18,
    color: '#666666',
  },
  timerNumber: {
    fontSize: 25,
    color: '#8BBF3E',
  },
  totalTimeText: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 20,
  },
  uploadMediaContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderStyle: 'dashed',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#666666',
  },
  uploadedImage: {
    width: 90,
    height: 90,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  navigateBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navigateBtn: {
    backgroundColor: '#8BBF3E',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 10,
    paddingVertical: 10,
  },
  navigateBtnText: {
    fontSize: 15,
    color: '#ffffff',
    marginRight: 10,
  },
  navigateIcon: {
    marginRight: 5,
  },
});

export default Media;
