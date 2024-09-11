import { View, Text,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{ height:60,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/Spectra_Solar.png')} style={{height:54.07,width:90}}/>
    </View>
  )
}

export default Header;