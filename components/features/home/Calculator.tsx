import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export const Calculator = () => {
  const [sendAmount, setSendAmount] = useState('1000');
  const [receiveAmount, setReceiveAmount] = useState('17,955.6');

  return (
    <View style={styles.container}>
      {/* Promo Banner */}
      <View style={styles.promoBanner}>
        <View style={styles.promoIconContainer}>
          <Ionicons name="pricetag" size={16} color="#065F46" />
        </View>
        <View style={styles.promoTextContainer}>
           <Text style={styles.promoTitle}>Promo rate on your first transfer!</Text>
           <Text style={styles.promoRate}>
              1 USD = <Text style={styles.strikethrough}>17.46</Text> <Text style={styles.boldRate}>17.955600 MXN</Text>
           </Text>
        </View>
      </View>

      <View style={styles.inputCard}>
        {/* You Send */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>You send</Text>
          <View style={styles.inputRow}>
            <View style={styles.currencySelector}>
               <Image source={{ uri: 'https://flagcdn.com/w40/us.png' }} style={styles.flag} />
               <Text style={styles.currencyCode}>USD</Text>
            </View>
            <TextInput
              style={styles.input}
              value={sendAmount}
              onChangeText={setSendAmount}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* They Receive */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>They receive</Text>
          <View style={styles.inputRow}>
            <View style={styles.currencySelector}>
               <Image source={{ uri: 'https://flagcdn.com/w40/mx.png' }} style={styles.flag} />
               <Text style={styles.currencyCode}>MXN</Text>
               <Ionicons name="chevron-down" size={16} color="#333" />
            </View>
            <TextInput
              style={styles.input}
              value={receiveAmount}
              onChangeText={setReceiveAmount}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Selectors */}
        <View style={styles.selectorRow}>
           <Text style={styles.selectorLabel}>Payment method</Text>
           <TouchableOpacity style={styles.selectorButton}>
              <Text style={styles.selectorButtonText}>Debit card</Text>
              <Ionicons name="chevron-down" size={16} color="#333" />
           </TouchableOpacity>
        </View>

        <View style={styles.selectorRow}>
           <Text style={styles.selectorLabel}>Delivery method</Text>
           <TouchableOpacity style={styles.selectorButton}>
              <Text style={styles.selectorButtonText}>Bank</Text>
              <Ionicons name="chevron-down" size={16} color="#333" />
           </TouchableOpacity>
        </View>

        {/* Fee Info */}
        <View style={styles.feeRow}>
           <Text style={styles.feeLabel}>Fee</Text>
           <View style={styles.feeTotalContainer}>
              <Text style={styles.strikethroughFee}>1.99 USD</Text>
              <Text style={styles.freeFee}>0 USD transfer fee</Text>
              <Ionicons name="information-circle-outline" size={14} color="#6C757D" />
           </View>
        </View>

        <View style={styles.totalPayRow}>
           <Text style={styles.totalLabel}>Total to pay</Text>
           <Text style={styles.totalValue}>1,000 USD</Text>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.getStartedButton}>
           <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.whatsappButton}>
           <FontAwesome5 name="whatsapp" size={20} color="#25D366" />
           <Text style={styles.whatsappText}>Send on WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 24,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 15,
    width: '100%',
    marginVertical: 20,
  },
  promoBanner: {
    backgroundColor: '#D1FADF',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  promoIconContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  promoTextContainer: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 12,
    color: '#065F46',
    fontWeight: '600',
  },
  promoRate: {
    fontSize: 13,
    color: '#333',
  },
  boldRate: {
    fontWeight: '700',
    color: '#065F46',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: '#6C757D',
  },
  inputCard: {
    gap: 16,
  },
  inputSection: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    color: '#6C757D',
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: '#DEE2E6',
  },
  flag: {
    width: 24,
    height: 16,
    borderRadius: 2,
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    textAlign: 'right',
  },
  selectorRow: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
  },
  selectorLabel: {
     fontSize: 14,
     color: '#6C757D',
  },
  selectorButton: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#F1F3F5',
     paddingHorizontal: 12,
     paddingVertical: 8,
     borderRadius: 10,
     gap: 6,
  },
  selectorButtonText: {
     fontSize: 14,
     fontWeight: '600',
     color: '#333',
  },
  feeRow: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginTop: 4,
  },
  feeLabel: {
     fontSize: 14,
     color: '#6C757D',
  },
  feeTotalContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     gap: 6,
  },
  strikethroughFee: {
     fontSize: 13,
     textDecorationLine: 'line-through',
     color: '#6C757D',
     fontWeight: '700',
  },
  freeFee: {
     fontSize: 13,
     color: '#28A745',
     fontWeight: '700',
  },
  totalPayRow: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     marginTop: 10,
     paddingTop: 10,
     borderTopWidth: 1,
     borderTopColor: '#F1F3F5',
  },
  totalLabel: {
     fontSize: 16,
     fontWeight: '600',
     color: '#333',
  },
  totalValue: {
     fontSize: 20,
     fontWeight: '800',
     color: '#333',
  },
  getStartedButton: {
     backgroundColor: '#FF5E00',
     paddingVertical: 16,
     borderRadius: 30,
     alignItems: 'center',
     marginTop: 10,
  },
  getStartedText: {
     color: '#fff',
     fontSize: 18,
     fontWeight: '700',
  },
  whatsappButton: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     paddingVertical: 14,
     borderRadius: 30,
     borderWidth: 1,
     borderColor: '#DEE2E6',
     gap: 10,
  },
  whatsappText: {
     fontSize: 16,
     fontWeight: '600',
     color: '#333',
  },
});
