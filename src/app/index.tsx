import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  Image,
  Animated
} from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../constants/theme';
import { Sparkles, ChevronRight, Flame, MapPin } from 'lucide-react-native';
import { GURU_SWAMI_DETAILS } from '../data/poojaData';

export default function WelcomeSplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleEnterApp = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[{ flex: 1, width: '100%' }, { opacity: fadeAnim }]}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Sacred Sharanam Badge */}
        <View style={styles.topBadge}>
          <Flame size={16} color={COLORS.flameOrange} />
          <Text style={styles.topBadgeText}>స్వామియే శరణం అయ్యప్ప</Text>
          <Flame size={16} color={COLORS.flameOrange} />
        </View>

        {/* 1. Guru Swami Divya Aseessulatho Header (Exact as reference image) */}
        <View style={styles.blessingHeader}>
          <Text style={styles.blessingTitle}>
            శ్రీ శ్రీ శ్రీ ఆడేపు బ్రహ్మం గురు స్వామి వారి దివ్య
          </Text>
          <Text style={styles.blessingSubtitle}>
            ఆశీస్సులతో
          </Text>
        </View>

        {/* 2. Lord Ayyappa Swami Divine Picture */}
        <View style={styles.ayyappaCard}>
          <View style={styles.ayyappaImageFrame}>
            <Image 
              source={require('../../assets/ayyappa_swami_master.png')} 
              style={styles.ayyappaImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* 3. Sacred Quote: "మనసు మంచిది అయితే ముక్తి ఇచ్చేవాడు అయ్యప్ప" */}
        <View style={styles.quoteCard}>
          <Sparkles size={16} color={COLORS.gold} />
          <Text style={styles.quoteText}>
            "మనసు మంచిది అయితే ముక్తి ఇచ్చేవాడు అయ్యప్ప"
          </Text>
          <Sparkles size={16} color={COLORS.gold} />
        </View>

        {/* 4. Guru Swami Section: Photo, Name & Address */}
        <View style={styles.guruSection}>
          <View style={styles.guruPhotoFrame}>
            <Image 
              source={require('../../assets/guruswami.png')} 
              style={styles.guruPhoto}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.guruName}>{GURU_SWAMI_DETAILS.name}</Text>
          <View style={styles.locationRow}>
            <MapPin size={15} color={COLORS.gold} />
            <Text style={styles.guruAddress}>{GURU_SWAMI_DETAILS.location}</Text>
          </View>
        </View>

        {/* 5. Enter App Button */}
        <TouchableOpacity 
          style={styles.enterButton} 
          onPress={handleEnterApp}
          activeOpacity={0.85}
        >
          <Text style={styles.enterButtonText}>పూజా మందిరంలోనికి ప్రవేశించండి</Text>
          <ChevronRight size={22} color="#FFF" />
        </TouchableOpacity>

        {/* Footnote */}
        <Text style={styles.footerText}>
          శ్రీ ధర్మశాస్తా కటాక్ష సిద్ధిరస్తు • సర్వం అయ్యప్పార్పణమస్తు
        </Text>

      </ScrollView>
    </Animated.View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0B06', // Deep sacred temple bronze-black
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 36,
    alignItems: 'center',
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.35)',
    marginBottom: 16,
  },
  topBadgeText: {
    color: COLORS.primaryLight,
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  blessingHeader: {
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  blessingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFE29A',
    textAlign: 'center',
    lineHeight: 28,
  },
  blessingSubtitle: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.goldLight,
    textAlign: 'center',
    marginTop: 2,
    letterSpacing: 1,
  },
  ayyappaCard: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 10,
    marginBottom: 14,
  },
  ayyappaImageFrame: {
    width: '100%',
    height: 380,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ayyappaImage: {
    width: '100%',
    height: '100%',
  },
  quoteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1E1408',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
    width: '100%',
    marginBottom: 18,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  quoteText: {
    color: COLORS.goldLight,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 1,
    lineHeight: 22,
  },
  guruSection: {
    alignItems: 'center',
    backgroundColor: '#181108',
    width: '100%',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: COLORS.goldDark,
    marginBottom: 20,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  guruPhotoFrame: {
    width: 140,
    height: 165,
    borderRadius: 14,
    borderWidth: 2.5,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#0A0704',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  guruPhoto: {
    width: '100%',
    height: '100%',
  },
  guruName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFE29A',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  guruAddress: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  enterButton: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    marginBottom: 16,
  },
  enterButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
