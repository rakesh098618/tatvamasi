import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router, Stack } from 'expo-router';
import { GURU_SWAMI_DETAILS } from '../data/poojaData';
import { COLORS } from '../constants/theme';
import { Flame, MapPin, Sparkles } from 'lucide-react-native';

export default function SplashScreen() {
  const [ayyappaLoaded, setAyyappaLoaded] = useState(false);
  const [guruLoaded, setGuruLoaded] = useState(false);
  const { height: screenHeight } = useWindowDimensions();

  // Allow devotees to comfortably view Lord Ayyappa & Guru Swami's divine darshan
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 4000);

    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (!ayyappaLoaded || !guruLoaded) return;

    // Display darshan for 3.5 seconds before smoothly entering the app
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3500);

    return () => clearTimeout(timer);
  }, [ayyappaLoaded, guruLoaded]);

  const handlePressEnter = () => {
    router.replace('/(tabs)');
  };

  const isSmallScreen = screenHeight < 720;
  // Adaptive height calculated so text and image spacing is tight, balanced, and perfectly proportioned
  const ayyappaHeight = isSmallScreen ? screenHeight * 0.40 : screenHeight * 0.46;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar style="light" />
      <Stack.Screen options={{ animation: 'none' }} />

      <TouchableOpacity
        style={styles.touchArea}
        activeOpacity={1}
        onPress={handlePressEnter}
      >
        <View style={styles.content}>

          {/* 1. Top Sacred Sharanam Badge */}
          <View style={styles.topBadge}>
            <Flame size={12} color={COLORS.flameOrange} />
            <Text style={styles.topBadgeText}>స్వామియే శరణం అయ్యప్ప</Text>
            <Flame size={12} color={COLORS.flameOrange} />
          </View>

          {/* 2. Blessing Header (Directly above Lord Ayyappa) */}
          <View style={styles.heading}>
            <Text style={styles.blessing} adjustsFontSizeToFit numberOfLines={2}>
              శ్రీ అయ్యప్ప స్వామి వారి దివ్య ఆశీస్సులతో
            </Text>
          </View>

          {/* 3. Lord Ayyappa Swami Divine Photo (Centered & Un-stretched) */}
          <View style={[styles.ayyappaCard, { height: ayyappaHeight }]}>
            <Image
              source={require('../../assets/ayyappa_swami_master.png')}
              style={styles.photo}
              resizeMode="contain"
              fadeDuration={0}
              onLoad={() => setAyyappaLoaded(true)}
              onError={() => setAyyappaLoaded(true)}
              accessibilityLabel="శ్రీ అయ్యప్ప స్వామి"
            />
          </View>

          {/* 4. Guru Swami Section (Directly below Lord Ayyappa) */}
          <View style={styles.guruSection}>
            <View style={styles.guruPhotoFrame}>
              <Image
                source={require('../../assets/guruswami.png')}
                style={styles.guruPhoto}
                resizeMode="cover"
                fadeDuration={0}
                onLoad={() => setGuruLoaded(true)}
                onError={() => setGuruLoaded(true)}
                accessibilityLabel={GURU_SWAMI_DETAILS.name}
              />
            </View>
            <View style={styles.caption}>
              <Text style={styles.guruName} adjustsFontSizeToFit numberOfLines={1}>
                {GURU_SWAMI_DETAILS.name}
              </Text>
              <View style={styles.locationRow}>
                <MapPin size={12} color={COLORS.gold} />
                <Text style={styles.location} adjustsFontSizeToFit numberOfLines={1}>
                  {GURU_SWAMI_DETAILS.location}
                </Text>
              </View>
            </View>
          </View>

          {/* 5. Subtitle footer hint */}
          <View style={styles.footerHint}>
            <Sparkles size={11} color={COLORS.gold} />
            <Text style={styles.footerText}>ప్రవేశించుటకు ఎక్కడైనా తాకండి</Text>
            <Sparkles size={11} color={COLORS.gold} />
          </View>

        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0B06',
  },
  touchArea: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 550,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.35)',
    marginBottom: 8,
  },
  topBadgeText: {
    color: COLORS.primaryLight,
    fontWeight: '700',
    fontSize: 11.5,
    letterSpacing: 0.5,
  },
  heading: {
    marginBottom: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blessing: {
    color: '#FFE29A',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  ayyappaCard: { 
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(212, 175, 55, 0.45)',
    overflow: 'hidden',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  guruSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E140A',
    width: '100%',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1.2,
    borderColor: COLORS.surfaceBorder,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  guruPhotoFrame: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#0A0704',
  },
  guruPhoto: {
    width: '100%',
    height: '100%',
  },
  caption: {
    flex: 1,
    justifyContent: 'center',
  },
  guruName: { 
    color: '#FFE29A', 
    fontSize: 14.5, 
    fontWeight: 'bold',
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  location: { 
    color: COLORS.textSecondary, 
    fontSize: 11.5, 
    fontWeight: '600',
  },
  footerHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  footerText: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
});
