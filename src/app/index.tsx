import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  Image,
  Animated,
  useWindowDimensions
} from 'react-native';
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

  // Adjust Ayyappa image height adaptively based on screen height for perfect spacing
  const ayyappaHeight = screenHeight < 680 ? 190 : screenHeight < 800 ? 215 : 240;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[{ flex: 1, width: '100%' }, { opacity: fadeAnim }]}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* 1. Top Sacred Sharanam Badge */}
          <View style={styles.topBadge}>
            <Flame size={14} color={COLORS.flameOrange} />
            <Text style={styles.topBadgeText}>స్వామియే శరణం అయ్యప్ప</Text>
            <Flame size={14} color={COLORS.flameOrange} />
          </View>

          {/* 2. Blessing Header */}
          <View style={styles.blessingHeader}>
            <Text style={styles.blessingTitle}>
              శ్రీ శ్రీ శ్రీ ఆడేపు బ్రహ్మం గురు స్వామి వారి దివ్య ఆశీస్సులతో
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

          {/* 4. Sacred Quote */}
          <View style={styles.quoteCard}>
            <Sparkles size={14} color={COLORS.gold} />
            <Text style={styles.quoteText}>
              "మనసు మంచిది అయితే ముక్తి ఇచ్చేవాడు అయ్యప్ప"
            </Text>
            <Sparkles size={14} color={COLORS.gold} />
          </View>

          {/* 5. Guru Swami Section: Horizontal Compact Card with Photo, Name & Address */}
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
                <MapPin size={13} color={COLORS.gold} />
                <Text style={styles.guruAddress} numberOfLines={1}>
                  {GURU_SWAMI_DETAILS.location || 'రాంనగర్, హైదరాబాద్'}
                </Text>
              </View>
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
    backgroundColor: '#0F0B06', // Deep sacred temple bronze-black
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
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
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.35)',
    marginBottom: 8,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFE29A',
    textAlign: 'center',
    lineHeight: 20,
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
    marginBottom: 10,
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
    marginBottom: 10,
    elevation: 2,
  },
  quoteText: {
    color: COLORS.goldLight,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 1,
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
    marginBottom: 12,
    elevation: 4,
    gap: 12,
  },
  guruPhotoFrame: {
    width: 54,
    height: 54,
    borderRadius: 27,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFE29A',
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  guruAddress: {
    fontSize: 12,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  enterButton: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    borderWidth: 1.2,
    borderColor: COLORS.gold,
    marginBottom: 8,
    elevation: 4,
  },
  enterButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footerText: {
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
