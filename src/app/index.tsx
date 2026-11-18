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
import { Flame, MapPin, Sparkles, Globe } from 'lucide-react-native';
import { useLanguage } from '../context/LanguageContext';

export default function SplashScreen() {
  const [ayyappaLoaded, setAyyappaLoaded] = useState(false);
  const [guruLoaded, setGuruLoaded] = useState(false);
  const { height: screenHeight } = useWindowDimensions();
  const { language, t, isFirstLaunch, openLanguageModal } = useLanguage();
  const isEnglish = language === 'en';

  // Allow devotees to comfortably view Lord Ayyappa & Guru Swami's divine darshan
  useEffect(() => {
    if (isFirstLaunch) return; // Do not auto-transition while first-launch language modal is open

    const safetyTimer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 4500);

    return () => clearTimeout(safetyTimer);
  }, [isFirstLaunch]);

  useEffect(() => {
    if (isFirstLaunch) return;
    if (!ayyappaLoaded || !guruLoaded) return;

    // Display darshan for 3.5 seconds before smoothly entering the app
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3500);

    return () => clearTimeout(timer);
  }, [ayyappaLoaded, guruLoaded, isFirstLaunch]);

  const handlePressEnter = () => {
    if (isFirstLaunch) {
      openLanguageModal();
      return;
    }
    router.replace('/(tabs)');
  };

  const isSmallScreen = screenHeight < 720;
  // Adaptive height calculated so text and image spacing is tight, balanced, and perfectly proportioned
  const ayyappaHeight = isSmallScreen ? screenHeight * 0.40 : screenHeight * 0.46;

  const guruName = isEnglish 
    ? (GURU_SWAMI_DETAILS.nameEnglish || GURU_SWAMI_DETAILS.name) 
    : GURU_SWAMI_DETAILS.name;

  const guruLocation = isEnglish 
    ? (GURU_SWAMI_DETAILS.locationEnglish || GURU_SWAMI_DETAILS.location) 
    : GURU_SWAMI_DETAILS.location;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <StatusBar style="light" />
      <Stack.Screen options={{ animation: 'none' }} />

      {/* Language Switch Button (Top Right) */}
      <View style={styles.topBar}>
        <TouchableOpacity 
          style={styles.langPill} 
          onPress={() => openLanguageModal()}
          activeOpacity={0.8}
        >
          <Globe size={13} color={COLORS.gold} />
          <Text style={styles.langPillText}>{language === 'te' ? 'English' : 'తెలుగు'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.touchArea}
        activeOpacity={1}
        onPress={handlePressEnter}
      >
        <View style={styles.content}>

          {/* 1. Top Sacred Sharanam Badge */}
          <View style={styles.topBadge}>
            <Flame size={12} color={COLORS.flameOrange} />
            <Text style={styles.topBadgeText}>{t('omSharanam')}</Text>
            <Flame size={12} color={COLORS.flameOrange} />
          </View>

          {/* 2. Blessing Header (Directly above Lord Ayyappa) */}
          <View style={styles.heading}>
            <Text style={styles.blessing} adjustsFontSizeToFit numberOfLines={2}>
              {t('blessingHeader')}
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
              accessibilityLabel={t('ayyappa')}
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
                accessibilityLabel={guruName}
              />
            </View>
            <View style={styles.caption}>
              <Text style={styles.guruName} adjustsFontSizeToFit numberOfLines={1}>
                {guruName}
              </Text>
              {guruLocation && (
                <View style={styles.locationRow}>
                  <MapPin size={12} color={COLORS.gold} />
                  <Text style={styles.location} adjustsFontSizeToFit numberOfLines={1}>
                    {guruLocation}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* 5. Subtitle footer hint */}
          <View style={styles.footerHint}>
            <Sparkles size={11} color={COLORS.gold} />
            <Text style={styles.footerText}>{t('enterApp')}</Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 8,
    zIndex: 10,
  },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },
  langPillText: {
    color: COLORS.gold,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.3,
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
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  heading: {
    marginBottom: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  blessing: {
    fontSize: 16,
    color: '#FFE29A',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.4,
    lineHeight: 22,
  },
  ayyappaCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  guruSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 17, 9, 0.85)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.35)',
    marginTop: 8,
    marginBottom: 10,
    maxWidth: 360,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  guruPhotoFrame: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
    marginRight: 10,
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
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFE29A',
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  footerHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
    opacity: 0.8,
  },
  footerText: {
    fontSize: 11.5,
    color: COLORS.textMuted,
    letterSpacing: 0.3,
  },
});
