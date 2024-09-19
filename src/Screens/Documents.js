import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import Header from '../Layout/Header';

const documents = [
  {id: 1, name: 'Installation manual.pdf', size: '5 MB'},
  {id: 2, name: 'Warranty info.pdf', size: '5 MB'},
  {id: 3, name: 'Install Solar System.pdf', size: '5 MB'},
  {id: 4, name: 'Install Battery.pdf', size: '5 MB'},
  {id: 5, name: 'Installation manual.pdf', size: '5 MB'},
  {id: 6, name: 'Warranty info.pdf', size: '5 MB'},
  {id: 7, name: 'Install Solar System.pdf', size: '5 MB'},
  {id: 8, name: 'Install Battery.pdf', size: '5 MB'},
];

const DocumentList = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContent}>
      <Image
        source={require('../assets/images/Document_emoji.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <Text style={styles.fileSize}>{item.size}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        leftImage={require('../assets/images/Spectra_Solar.png')}
        showSearch={true}
      />
      <View style={{paddingHorizontal: 16, paddingVertical: 10}}>
        <Text style={styles.text}>Documents</Text>
        <FlatList
          data={documents}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 25,
    color: '#304D05',
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 12,
    elevation: 3,
    backgroundColor: '#FFF',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: '#232323',
  },
  fileSize: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});

export default DocumentList;
