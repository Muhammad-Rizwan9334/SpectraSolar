import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Header from '../Layout/Header';

const ChecklistScreen = ({navigation}) => {
  
  const [checklistItems, setChecklistItems] = useState([
    {id: '1', label: 'The Driver has Install Solar System', checked: false},
    {id: '2', label: 'The Driver has Install Battery', checked: false},
    {id: '3', label: 'The Driver has Install Solar System', checked: false},
    {id: '4', label: 'The Driver has Install Battery', checked: false},
    {id: '5', label: 'The Driver has Install Solar System', checked: false},
    {id: '6', label: 'The Driver has Install Battery', checked: false},
  ]);

  const handleCheckboxChange = (id) => {
    const updateChecklist = checklistItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklistItems(updateChecklist);
  };
  
  const renderChecklistItem = ({item}) => (
    <View style={styles.checklistItem}>
      <Checkbox
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => handleCheckboxChange(item.id)}
        color="#8BBF3E"
      />
      <Text style={styles.itemText}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header leftImage={require('../assets/images/Spectra_Solar.png')} />
      <View style={styles.vanContainer}>
        <Image
          source={require('../assets/images/Van.png')}
          style={styles.vanImage}
        />
        <Text style={styles.vanText}>Van Installation Checklist</Text>
      </View>

      <FlatList
        data={checklistItems}
        renderItem={renderChecklistItem}
        keyExtractor={item => item.id}
        style={styles.checklistContainer}
      />
      <View style={{flex:.5}}>
      <TouchableOpacity style={styles.submitButton} onPress={()=>navigation.navigate('ChecklistSecurity')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Sign Agreement</Text>
        <View style={styles.footerLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  vanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  vanImage: {
    height: 32,
    width: 32,
  },
  vanText: {
    fontSize: 18,
    marginLeft: 5,
    color: '#000',
  },
  checklistContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  checklistItem: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  submitButton: {
    backgroundColor: '#8BBF3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    alignSelf: 'flex-end',
    marginRight:20
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20,
    marginBottom:45
   
  },
  footerText: {
    color: '#777777',
  },
  footerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#777777',
    marginLeft: 30,
  },
});

export default ChecklistScreen;
