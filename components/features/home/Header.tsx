import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ria_Money_Transfer_logo.svg/2560px-Ria_Money_Transfer_logo.svg.png' }} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Nav Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtn}>
          <Ionicons name="menu-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  logoContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 30,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loginBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  registerBtn: {
    backgroundColor: '#FF5E00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  registerText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
  menuBtn: {
    marginLeft: 4,
  },
});
