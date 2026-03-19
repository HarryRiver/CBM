import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeHero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        Fast and safe{'\n'}money transfers
      </Text>
      <Text style={styles.subheadline}>
        Send money to family and friends worldwide with over 600,000 locations in 190+ countries and territories.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 16,
  },
  headline: {
    fontSize: 48,
    fontWeight: '800',
    color: '#111',
    lineHeight: 52,
    letterSpacing: -1,
  },
  subheadline: {
    fontSize: 16,
    color: '#6C757D',
    lineHeight: 24,
    maxWidth: 400,
  },
});
