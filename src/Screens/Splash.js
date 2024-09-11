import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Login")

    },5000)
  },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}> 
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
        <Image source={require("../assets/images/Spectra_Solar.png")} style={{height:155,width:258}}/>
    </View>
  )
}

export default Splash;