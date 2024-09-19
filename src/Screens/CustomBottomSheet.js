import React, { useRef, useMemo } from 'react';
import { View, Text, TextInput,StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Modal, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({ visible, onClose }) => {
  const bottomSheetRef = useRef(null); 

  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose} 
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <BottomSheet
          ref={bottomSheetRef}
          index={0} 
          snapPoints={snapPoints}
          backgroundStyle={styles.bottomSheetBackground}
          enablePanDownToClose={true} 
          onClose={onClose} 
        >
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerText}>
              <Text style={styles.title}> | Solar Panel Model XYZ-123</Text>
              <Text style={styles.date}>14, May, 2024</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Final Remarks (Optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Anything"
                multiline
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={onClose} 
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </BottomSheet>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  bottomSheetBackground: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white', 
  },
  contentContainer: {
    padding: 20,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color:'#232323'
  },
  date: {
    fontSize: 14,
    color: '#8C8C8C',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color:'#000000'
  },
  input: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    backgroundColor:'#8BBF3E',
    alignItems:'center',
    borderRadius:10,
    paddingVertical:10,
    alignSelf:'flex-end',
    paddingHorizontal:15
  },
  buttonText:{
    fontSize:20,
    color:'white'

  }
});

export default CustomBottomSheet;
