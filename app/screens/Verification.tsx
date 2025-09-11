import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


const Verification = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../assets/logo-app.jpg')} style={styles.logo} />

      {/* Verification Text */}
      <Text style={styles.verificationText}>Please check your E-mail for your account verification</Text>

      {/* Return Button */}
      <Button
        title="Return"
        onPress={() => navigation.navigate('Login')}
        color="#007AFF"
      />
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  verificationText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default Verification;