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
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();

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
  // Adaptive deity height allowing the divine image to breathe and look majestic
  const ayyappaMaxHeight = isSmallScreen ? screenHeight * 0.48 : screenHeight * 0.53;

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

          {/* 1. Top Section: Sacred Pill Badge & Divine Blessing */}
          <View style={styles.topSection}>
            <View style={styles.topBadge}>
              <Flame size={13} color={COLORS.flameOrange} />
              <Text style={styles.topBadgeText}>స్వామియే శరణం అయ్యప్ప</Text>
              <Flame size={13} color={COLORS.flameOrange} />
            </View>

            <View style={styles.heading}>
              <Text style={styles.blessing} adjustsFontSizeToFit numberOfLines={2}>
                శ్రీ అయ్యప్ప స్వామి వారి దివ్య ఆశీస్సులతో
              </Text>
            </View>
          </View>

          {/* 2. Center Section: Lord Ayyappa Swami Divine Photo (Majestic & Perfectly Proportioned) */}
          <View style={[styles.ayyappaCard, { maxHeight: ayyappaMaxHeight }]}>
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

          {/* 3. Bottom Section: Guru Swami Section & Footnote Tap Hint */}
          <View style={styles.bottomSection}>
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
                <Text style={styles.guruName} numberOfLines={1}>
                  {GURU_SWAMI_DETAILS.name}
                </Text>
                {GURU_SWAMI_DETAILS.location && (
                  <View style={styles.locationRow}>
                    <MapPin size={12} color={COLORS.gold} />
                    <Text style={styles.location} numberOfLines={1}>
                      {GURU_SWAMI_DETAILS.location}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.footerHint}>
              <Sparkles size={11} color={COLORS.gold} />
              <Text style={styles.footerText}>ప్రవేశించుటకు ఎక్కడైనా తాకండి</Text>
              <Sparkles size={11} color={COLORS.gold} />
            </View>
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
    paddingTop: 14,
    paddingBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 4,
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(249, 115, 22, 0.16)',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 22,
    borderWidth: 1.2,
    borderColor: 'rgba(249, 115, 22, 0.4)',
    marginBottom: 10,
    shadowColor: COLORS.flameOrange,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  topBadgeText: {
    color: '#FFB84D',
    fontSize: 12.5,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  heading: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  blessing: {
    fontSize: 16.5,
    color: '#FFE29A',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.35,
    lineHeight: 23,
    textShadowColor: 'rgba(212, 175, 55, 0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  ayyappaCard: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 4,
  },
  guruSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 18, 10, 0.92)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1.2,
    borderColor: 'rgba(212, 175, 55, 0.4)',
    marginBottom: 12,
    maxWidth: 360,
    width: '92%',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  guruPhotoFrame: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1.8,
    borderColor: '#FFE29A',
    overflow: 'hidden',
    backgroundColor: '#0F0B06',
    marginRight: 12,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
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
    fontSize: 13.5,
    fontWeight: '700',
    color: '#FFE29A',
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 11.5,
    color: '#D4C4B2',
    fontWeight: '500',
  },
  footerHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    opacity: 0.85,
  },
  footerText: {
    fontSize: 11.5,
    color: COLORS.textMuted,
    letterSpacing: 0.3,
  },
});
