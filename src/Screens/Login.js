import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../Layout/Header';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <Header/>
      <View style={{padding:20}}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Login to Your Account and track your Task.</Text>
        
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons size={20} name="email-outline" style={styles.icon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />
        </View>
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="#a9a9a9" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text)=>setPassword(text)}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Feather name={secureTextEntry ? 'eye' : 'eye-off'} size={20} color="#a9a9a9" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <Image source={require('../assets/images/Element.png')} style={styles.image}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: width * 0.06, 
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subText: {
    marginBottom: 5,
    color: '#666',
    fontSize: width * 0.04, 
  },
  label: {
    fontSize: width * 0.045, 
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: width * 0.045, 
    color: '#ffffff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  forgotPasswordText: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: height * 0.01, 
    borderRadius: 8,
    marginTop: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: width * 0.045, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: height * 0.3,  
    width: width * 0.4,    
  },
});

export default Login;
