import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Media = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Media</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    padding:16,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20
  }
})
export default Media;