import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../Layout/Header';

const Home = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Header leftImage={require('../assets/images/Spectra_Solar.png')} rightImage={require('../assets/images/Vector.png')} rightText="Log Out"/>
      <View style={styles.innerView}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/images/calendar.gif')}
            style={styles.image}
          />
          <Text style={styles.cardText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Checklist")}>
          <Image
            source={require('../assets/images/checklist.gif')}
            style={styles.image}
          />
          <Text style={styles.cardText}>Van Checklist</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerView: {
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    height: 44,
    width: 44,
  },
});
export default Home;
