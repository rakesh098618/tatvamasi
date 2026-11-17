import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  Animated,
  useWindowDimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { COLORS } from '../constants/theme';
import { Sparkles, ChevronRight, Flame, MapPin } from 'lucide-react-native';
import { GURU_SWAMI_DETAILS } from '../data/poojaData';

export default function WelcomeSplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height: screenHeight } = useWindowDimensions();

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

  // Adaptive Ayyappa image height tailored for zero-scroll on all phones
  const ayyappaHeight = screenHeight < 680 ? 180 : screenHeight < 800 ? 210 : 230;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
      <Animated.View style={[{ flex: 1, width: '100%' }, { opacity: fadeAnim }]}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* 1. Top Sacred Sharanam Badge */}
          <View style={styles.topBadge}>
            <Flame size={13} color={COLORS.flameOrange} />
            <Text style={styles.topBadgeText}>స్వామియే శరణం అయ్యప్ప</Text>
            <Flame size={13} color={COLORS.flameOrange} />
          </View>

          {/* 2. Blessing Header - శ్రీ అయ్యప్ప స్వామి వారి దివ్య ఆశీస్సులతో */}
          <View style={styles.blessingHeader}>
            <Text style={styles.blessingTitle}>
              శ్రీ అయ్యప్ప స్వామి వారి దివ్య ఆశీస్సులతో
            </Text>
          </View>

          {/* 3. Lord Ayyappa Swami Divine Picture */}
          <View style={styles.ayyappaCard}>
            <View style={[styles.ayyappaImageFrame, { height: ayyappaHeight }]}>
              <Image 
                source={require('../../assets/ayyappa_swami_master.png')} 
                style={styles.ayyappaImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* 4. Sacred Quote - Beautiful Divine Telugu Quote */}
          <View style={styles.quoteCard}>
            <Sparkles size={14} color={COLORS.gold} />
            <Text style={styles.quoteText} numberOfLines={2}>
              "కలియుగ ప్రత్యక్ష దైవం శ్రీ ధర్మశాస్తా • భక్తితో శరణువేడితే సకల శుభములను, ముక్తిని ప్రసాదించే కరుణామయుడు"
            </Text>
            <Sparkles size={14} color={COLORS.gold} />
          </View>

          {/* 5. Guru Swami Section: Horizontal Compact Card */}
          <View style={styles.guruSection}>
            <View style={styles.guruPhotoFrame}>
              <Image 
                source={require('../../assets/guruswami.png')} 
                style={styles.guruPhoto}
                resizeMode="cover"
              />
            </View>
            <View style={styles.guruInfoCol}>
              <Text style={styles.guruName} numberOfLines={1}>
                {GURU_SWAMI_DETAILS.name}
              </Text>
              <View style={styles.locationRow}>
                <MapPin size={12} color={COLORS.gold} />
                <Text style={styles.guruAddress} numberOfLines={1}>
                  {GURU_SWAMI_DETAILS.location || 'రాంనగర్, హైదరాబాద్'}
                </Text>
              </View>
              <Text style={styles.guruRole} numberOfLines={1}>
                అయ్యప్ప దీక్షా గురువులు & మండల దీక్షా మార్గదర్శకులు
              </Text>
            </View>
          </View>

          {/* 6. Enter App Button */}
          <TouchableOpacity 
            style={styles.enterButton} 
            onPress={handleEnterApp}
            activeOpacity={0.85}
          >
            <Text style={styles.enterButtonText}>పూజా మందిరంలోనికి ప్రవేశించండి</Text>
            <ChevronRight size={20} color="#FFF" />
          </TouchableOpacity>

          {/* 7. Footnote */}
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
    backgroundColor: '#0F0B06', // Deep sacred bronze-black
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
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
    marginBottom: 7,
  },
  topBadgeText: {
    color: COLORS.primaryLight,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  blessingHeader: {
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  blessingTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFE29A',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  ayyappaCard: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 9,
  },
  ayyappaImageFrame: {
    width: '100%',
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
    gap: 6,
    backgroundColor: '#1E1408',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
    width: '100%',
    marginBottom: 9,
    elevation: 2,
  },
  quoteText: {
    color: COLORS.goldLight,
    fontSize: 11.5,
    fontWeight: '600',
    textAlign: 'center',
    flexShrink: 1,
    lineHeight: 17,
  },
  guruSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181108',
    width: '100%',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1.2,
    borderColor: COLORS.goldDark,
    marginBottom: 10,
    elevation: 4,
    gap: 12,
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
  guruInfoCol: {
    flex: 1,
    justifyContent: 'center',
  },
  guruName: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: '#FFE29A',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 1.5,
    paddingHorizontal: 7,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 2,
  },
  guruAddress: {
    fontSize: 11.5,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  guruRole: {
    fontSize: 10.5,
    color: COLORS.textMuted,
  },
  enterButton: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    borderWidth: 1.2,
    borderColor: COLORS.gold,
    marginBottom: 7,
    elevation: 4,
  },
  enterButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footerText: {
    fontSize: 10.5,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
