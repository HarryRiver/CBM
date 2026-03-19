import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function WelcomeScreen() {
  const router = useRouter();

  const handleSignIn = () => {
    router.replace('/(tabs)'); // Temporarily go to tabs for demo
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Motifs & Flag */}
        <View style={styles.headerRow}>
           <View style={styles.motifContainer}>
              <Text style={styles.horseMotif}>🐎 🏮 🏇</Text> {/* Fallback icons, will replace with design */}
           </View>
           <Image source={{ uri: 'https://flagcdn.com/w40/us.png' }} style={styles.flag} />
        </View>

        {/* Top Ornaments */}
        <View style={styles.ornamentContainer}>
           <Image 
             source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8204/8204364.png' }} // Placeholder for Red Chinese Motif
             style={styles.ornamentImage}
             resizeMode="contain"
           />
        </View>

        {/* Sophisticated RIA Logo Container */}
        <View style={styles.logoContainer}>
           <LinearGradient
              colors={['#E7C67F', '#D4AF37', '#F5E1A4']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.outerLogoBorder}
           >
              <View style={styles.innerLogoBackground}>
                 <Text style={styles.logoTextR}>R<Text style={styles.logoTextIA}>IA</Text></Text>
                 <View style={styles.logoBadge}>
                    <Text style={styles.logoBadgeText}>PREMIUM</Text>
                 </View>
              </View>
           </LinearGradient>
           <View style={styles.logoGlow} />
        </View>

        {/* Headline */}
        <View style={styles.headlineContainer}>
           <Text style={styles.headlineText}>Make Crypto Works</Text>
           <Text style={styles.headlineText}>In Real Life</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonSection}>
           {/* Sign In - Gold Gradient */}
           <TouchableOpacity onPress={handleSignIn}>
              <LinearGradient
                colors={['#F5E1A4', '#D4AF37', '#E7C67F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.goldButton}
              >
                <Text style={styles.goldButtonText}>Sign In</Text>
              </LinearGradient>
              <View style={styles.scallopOverlayLeft} />
              <View style={styles.scallopOverlayRight} />
           </TouchableOpacity>

           {/* Sign Up - White with Gold Border */}
           <TouchableOpacity 
             style={styles.whiteButton}
             onPress={() => router.push('/signup')}
           >
              <Text style={styles.whiteButtonText}>Sign Up</Text>

              <View style={styles.scallopOverlayLeftWhite} />
              <View style={styles.scallopOverlayRightWhite} />
           </TouchableOpacity>

           {/* POS Login Section */}
           <View style={styles.merchantSection}>
              <Text style={styles.merchantText}>You are a Registered Merchant?</Text>
              <TouchableOpacity style={styles.whiteButton}>
                <Text style={styles.whiteButtonText}>Login using POS Account</Text>
                <View style={styles.scallopOverlayLeftWhite} />
                <View style={styles.scallopOverlayRightWhite} />
              </TouchableOpacity>
           </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  motifContainer: {
     flex: 1,
     alignItems: 'center',
  },
  horseMotif: {
     fontSize: 24,
  },
  flag: {
    width: 24,
    height: 16,
    borderRadius: 2,
  },
  ornamentContainer: {
     width: '100%',
     height: 100,
     marginTop: 20,
     alignItems: 'center',
  },
  ornamentImage: {
     width: '80%',
     height: '100%',
  },
  logoContainer: {
     marginTop: 30,
     alignItems: 'center',
     justifyContent: 'center',
  },
  outerLogoBorder: {
     width: 160,
     height: 160,
     borderRadius: 80,
     padding: 4,
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: '#D4AF37',
     shadowOffset: { width: 0, height: 10 },
     shadowOpacity: 0.3,
     shadowRadius: 20,
     elevation: 20,
  },
  innerLogoBackground: {
     width: '100%',
     height: '100%',
     backgroundColor: '#002D3A',
     borderRadius: 76,
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: 'rgba(231, 198, 127, 0.3)',
  },
  logoTextR: {
     color: '#E7C67F',
     fontSize: 60,
     fontWeight: '900',
     letterSpacing: -2,
     textShadowColor: 'rgba(0, 0, 0, 0.5)',
     textShadowOffset: { width: 2, height: 2 },
     textShadowRadius: 4,
  },
  logoTextIA: {
     color: '#FFFFFF',
     fontSize: 45,
     fontWeight: '300',
  },
  logoBadge: {
     position: 'absolute',
     bottom: 25,
     backgroundColor: '#E7C67F',
     paddingHorizontal: 8,
     paddingVertical: 2,
     borderRadius: 4,
  },
  logoBadgeText: {
     fontSize: 10,
     fontWeight: '900',
     color: '#002D3A',
     letterSpacing: 2,
  },
  logoGlow: {
     position: 'absolute',
     width: 200,
     height: 200,
     borderRadius: 100,
     backgroundColor: 'rgba(231, 198, 127, 0.1)',
     zIndex: -1,
  },

  headlineContainer: {
     marginTop: 40,
     alignItems: 'center',
     gap: 4,
  },
  headlineText: {
     fontSize: 26,
     fontWeight: '800',
     color: '#111',
     textAlign: 'center',
  },
  buttonSection: {
     width: '100%',
     paddingHorizontal: 30,
     marginTop: 40,
     gap: 20,
  },
  goldButton: {
     height: 60,
     borderRadius: 15, // Simplified from scalloped
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.1,
     shadowRadius: 8,
     elevation: 5,
  },
  goldButtonText: {
     color: '#111',
     fontSize: 20,
     fontWeight: '800',
  },
  whiteButton: {
     height: 60,
     backgroundColor: '#fff',
     borderRadius: 15,
     borderWidth: 2,
     borderColor: '#E7C67F',
     justifyContent: 'center',
     alignItems: 'center',
  },
  whiteButtonText: {
     color: '#111',
     fontSize: 18,
     fontWeight: '700',
  },
  merchantSection: {
     marginTop: 30,
     alignItems: 'center',
     gap: 12,
  },
  merchantText: {
     fontSize: 14,
     color: '#666',
  },
  // Scallop effects would need more complex rendering, these are placeholders
  scallopOverlayLeft: {
     position: 'absolute',
     left: -5,
     top: '25%',
     width: 10,
     height: 30,
     backgroundColor: '#fff', // Cutout effect
     borderRadius: 5,
  },
  scallopOverlayRight: {
     position: 'absolute',
     right: -5,
     top: '25%',
     width: 10,
     height: 30,
     backgroundColor: '#fff',
     borderRadius: 5,
  },
  scallopOverlayLeftWhite: {
     position: 'absolute',
     left: -3,
     top: '30%',
     width: 6,
     height: 24,
     backgroundColor: '#fff',
     borderRadius: 3,
  },
  scallopOverlayRightWhite: {
     position: 'absolute',
     right: -3,
     top: '30%',
     width: 6,
     height: 24,
     backgroundColor: '#fff',
     borderRadius: 3,
  },
});
