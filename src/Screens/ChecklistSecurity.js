import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../Layout/Header';
import {Checkbox} from 'react-native-paper';
import CustomBottomSheet from './CustomBottomSheet';

const ChecklistSecurity = () => {
  const [checklistItems, setChecklistItems] = useState([
    {id: '1', label: 'The Driver has Installed Solar System', checked: false},
    {id: '2', label: 'The driver has Installed Battery', checked: false},
    {id: '3', label: 'The Driver has Installed Solar System', checked: false},
    {id: '4', label: 'The driver has Installed Battery', checked: false},
    {id: '5', label: 'The Driver has Installed Solar System', checked: false},
    {id: '6', label: 'The driver has Installed Battery', checked: false},
  ]);

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleCheckboxChange = id => {
    const updateChecklist = checklistItems.map(item =>
      item.id === id ? {...item, checked: !item.checked} : item,
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

  // Function to toggle the bottom sheet modal visibility
  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <Header leftImage={require('../assets/images/Spectra_Solar.png')} />
      <View style={styles.vanContainer}>
        <Image
          source={require('../assets/images/Van.png')}
          style={styles.vanImage}
        />
        <Text style={styles.vanText}>Health & Security Checklist</Text>
      </View>
      <FlatList
        data={checklistItems}
        renderItem={renderChecklistItem}
        keyExtractor={item => item.id}
        style={styles.checklistContainer}
      />

      {/* Submit button that opens the Bottom Sheet */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={toggleBottomSheet}  // Open bottom sheet when tapped
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Button to add another signature */}
      <TouchableOpacity style={styles.signatureButton}>
        <Text style={styles.signatureButtonText}>Add another Signature</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Sign Agreement</Text>
        <View style={styles.footerLine} />
      </View>

      {/* CustomBottomSheet Component */}
      <CustomBottomSheet
        visible={isBottomSheetVisible}
        onClose={toggleBottomSheet}  // Close bottom sheet when dragging down or pressing close
      />
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
    flex: 1,
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
    elevation: 5,
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
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    elevation: 2,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 40,
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
  signatureButton: {
    backgroundColor: '#232323',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
    elevation: 2,
    marginVertical: 20,
  },
  signatureButtonText: {
    fontSize: 15,
    color: '#ffffff',
  },
});

export default ChecklistSecurity;
