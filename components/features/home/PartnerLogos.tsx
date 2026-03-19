import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const partners = [
  { name: 'Elektra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Elektra_Logo.svg/2560px-Elektra_Logo.svg.png' },
  { name: 'OXXO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png' },
  { name: 'Walmart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png' },
  { name: 'Banco Azteca', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Banco_Azteca_logo.svg/2560px-Banco_Azteca_logo.svg.png' },
];

export const PartnerLogos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer with our partners in Mexico</Text>
      <View style={styles.logoRow}>
        {partners.map((partner, index) => (
          <Image 
            key={index} 
            source={{ uri: partner.logo }} 
            style={[styles.logo, { width: index === 3 ? 100 : 70 }]} 
            resizeMode="contain" 
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    gap: 12,
  },
  title: {
    fontSize: 14,
    color: '#6C757D',
    fontWeight: '500',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  logo: {
    height: 25,
    opacity: 0.8,
  },
});
