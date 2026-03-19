import React from 'react';
import { StyleSheet, ScrollView, Platform, StatusBar, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components/features/home/Header';
import { HomeHero } from '@/components/features/home/HomeHero';
import { Calculator } from '@/components/features/home/Calculator';
import { PartnerLogos } from '@/components/features/home/PartnerLogos';
import { WhatsappSection } from '@/components/features/home/WhatsappSection';

/**
 * HomeScreen - The landing page of the Ria Money Transfer app.
 * Organized by features to keep the file structure clean and scalable.
 */
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroWrapper}>
           <HomeHero />
           <View style={{ paddingHorizontal: 20 }}>
             <PartnerLogos />
           </View>
        </View>

        <View style={styles.calculatorWrapper}>
          <Calculator />
        </View>

        <WhatsappSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroWrapper: {
    gap: 8,
    marginBottom: 10,
  },
  calculatorWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});


