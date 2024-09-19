import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons'; 


const Header = ({
  isCentered,
  leftImage,
  title,
  rightText,
  rightImage,
  onRightPress,
  showSearch,
  onSearchChange,
  onSearchIconPress,
  onFilterIconPress,
}) => {
  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        justifyContent: isCentered ? 'center' : 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      {isCentered ? (
        <Image
          source={require('../assets/images/Spectra_Solar.png')}
          style={{ height: 54, width: 90 }}
        />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {leftImage && (
            <Image
              source={leftImage}
              style={{ height: 54, width: 90, marginRight: 10 }}
            />
          )}
          <Text>{title}</Text>
        </View>
      )}

      {!isCentered && showSearch ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', borderColor: '#ccc', borderWidth: 1, borderRadius: 10 }}>
            <TouchableOpacity onPress={onSearchIconPress}>
              <Icon name="search" size={24} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search"
              style={{
                flex: 1,
                paddingHorizontal: 10,
                height: 40,
              }}
              onChangeText={onSearchChange} 
            />
            <TouchableOpacity onPress={onFilterIconPress}>
              <Ionicons name="funnel-outline" size={20} style={{ marginRight: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        !isCentered && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {rightImage && (
              <Image
                source={rightImage}
                style={{ height: 24, width: 24, marginRight: 10 }}
              />
            )}
            <TouchableOpacity onPress={onRightPress}>
              <Text style={{ color: 'red', fontSize: 20 }}>{rightText}</Text>
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  );
};

export default Header;
