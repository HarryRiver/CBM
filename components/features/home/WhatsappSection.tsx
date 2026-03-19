import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const WhatsappSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
         <FontAwesome5 name="whatsapp" size={40} color="#25D366" />
      </View>
      <View style={styles.textContent}>
         <Text style={styles.title}>Send money with WhatsApp</Text>
         <Text style={styles.desc}>The easiest way to send money is now on your favorite messaging app.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },
  desc: {
    fontSize: 15,
    color: '#6C757D',
    lineHeight: 22,
  },
});
