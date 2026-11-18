import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Header } from '../../components/Header';
import { COLORS, FONTS } from '../../constants/theme';
import { GURU_SWAMI_DETAILS } from '../../data/poojaData';
import { Sparkles, Shield, HeartHandshake, CheckCircle2, ChevronRight, MapPin, Globe } from 'lucide-react-native';
import { useLanguage } from '../../context/LanguageContext';

export default function GuruScreen() {
  const { language, t, openLanguageModal } = useLanguage();
  const isEnglish = language === 'en';

  const handleOpenGuruPooja = () => {
    router.push({
      pathname: '/pooja/[id]',
      params: { id: 'guru-vandanam' }
    });
  };

  const guruName = isEnglish 
    ? (GURU_SWAMI_DETAILS.nameEnglish || GURU_SWAMI_DETAILS.name) 
    : GURU_SWAMI_DETAILS.name;

  const guruTitle = isEnglish 
    ? (GURU_SWAMI_DETAILS.titleEnglish || GURU_SWAMI_DETAILS.title) 
    : GURU_SWAMI_DETAILS.title;

  const guruLocation = isEnglish 
    ? (GURU_SWAMI_DETAILS.locationEnglish || GURU_SWAMI_DETAILS.location) 
    : GURU_SWAMI_DETAILS.location;

  const guruDesc = isEnglish 
    ? (GURU_SWAMI_DETAILS.descriptionEnglish || GURU_SWAMI_DETAILS.description) 
    : GURU_SWAMI_DETAILS.description;

  const guruMantram = isEnglish 
    ? (GURU_SWAMI_DETAILS.mantramEnglish || GURU_SWAMI_DETAILS.mantram) 
    : GURU_SWAMI_DETAILS.mantram;

  const deekshaRules = isEnglish 
    ? (GURU_SWAMI_DETAILS.deekshaRulesEnglish || GURU_SWAMI_DETAILS.deekshaRules) 
    : GURU_SWAMI_DETAILS.deekshaRules;

  const teachings = isEnglish 
    ? (GURU_SWAMI_DETAILS.teachingsEnglish || GURU_SWAMI_DETAILS.teachings) 
    : GURU_SWAMI_DETAILS.teachings;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title={t('guruHeaderTitle')} 
        subtitle={t('guruHeaderSubtitle')}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Guru Swami Profile Banner */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Image 
                source={require('../../../assets/guruswami_round.png')} 
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Guru Swami Name */}
          <Text 
            style={[
              styles.guruName,
              { 
                fontFamily: isEnglish ? FONTS.heading : undefined,
                letterSpacing: isEnglish ? 0.4 : 0.2 
              }
            ]}
          >
            {guruName}
          </Text>

          {/* Location directly under Name */}
          {guruLocation && (
            <View style={styles.locationRow}>
              <MapPin size={14} color={COLORS.gold} />
              <Text style={styles.locationText}>{guruLocation}</Text>
            </View>
          )}

          {/* Guru Title */}
          <Text 
            style={[
              styles.guruTitle,
              { fontFamily: isEnglish ? FONTS.devotionalSerif : undefined }
            ]}
          >
            {guruTitle}
          </Text>

          <View style={styles.shlokaBox}>
            <Text 
              style={[
                styles.shlokaText,
                { fontFamily: isEnglish ? FONTS.devotionalSerif : undefined }
              ]}
            >
              {guruMantram}
            </Text>
          </View>

          <Text 
            style={[
              styles.guruDescription,
              { 
                fontFamily: isEnglish ? FONTS.devotionalSerif : undefined,
                lineHeight: isEnglish ? 22 : 18 
              }
            ]}
          >
            {guruDesc}
          </Text>

          {/* Action button to Guru Pooja */}
          <TouchableOpacity 
            style={styles.guruPoojaBtn} 
            onPress={handleOpenGuruPooja}
            activeOpacity={0.8}
          >
            <Text style={styles.guruPoojaBtnText}>{t('beginGuruPooja')}</Text>
            <ChevronRight size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* 41 Days Mandala Deeksha Rules */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Shield size={20} color={COLORS.gold} />
            <Text style={styles.sectionTitle}>{t('mandalaDeekshaTitle')}</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            {t('mandalaDeekshaSubtitle')}
          </Text>

          <View style={styles.rulesList}>
            {deekshaRules.map((rule, idx) => (
              <View key={idx} style={styles.ruleItem}>
                <CheckCircle2 size={16} color={COLORS.accentGreen} style={styles.checkIcon} />
                <Text style={styles.ruleText}>{rule}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Guru Teachings / Upadesham */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Sparkles size={20} color={COLORS.primaryLight} />
            <Text style={styles.sectionTitle}>{t('guruTeachingsTitle')}</Text>
          </View>

          <View style={styles.rulesList}>
            {teachings.map((teaching, idx) => (
              <View key={idx} style={styles.ruleItem}>
                <HeartHandshake size={16} color={COLORS.gold} style={styles.checkIcon} />
                <Text style={styles.ruleText}>{teaching}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Settings & Language Preference Card */}
        <View style={styles.settingsCard}>
          <View style={styles.settingsHeader}>
            <View style={styles.settingsIconBox}>
              <Globe size={22} color={COLORS.gold} />
            </View>
            <View style={styles.settingsInfo}>
              <Text style={styles.settingsTitle}>{t('settingsTitle')}</Text>
              <Text style={styles.settingsSubtitle}>
                {t('languageOption')}: <Text style={styles.settingsLangName}>{language === 'te' ? 'తెలుగు' : 'English'}</Text>
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.changeLangBtn} 
              onPress={openLanguageModal}
              activeOpacity={0.8}
            >
              <Text style={styles.changeLangBtnText}>{t('select')}</Text>
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
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
  },
  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.goldDark,
    marginBottom: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.surfaceLight,
    borderWidth: 3,
    borderColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  guruName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFE29A',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: COLORS.goldLight,
    fontWeight: '600',
  },
  guruTitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  shlokaBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
    width: '100%',
    marginBottom: 14,
  },
  shlokaText: {
    fontSize: 13,
    color: COLORS.goldLight,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '600',
  },
  guruDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  guruPoojaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: COLORS.primaryDark,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: '100%',
  },
  guruPoojaBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  rulesList: {
    gap: 10,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  checkIcon: {
    marginTop: 2,
  },
  ruleText: {
    fontSize: 13,
    color: COLORS.textPrimary,
    flex: 1,
    lineHeight: 18,
  },
  settingsCard: {
    backgroundColor: '#181008',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    marginBottom: 20,
  },
  settingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIconBox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
    marginRight: 12,
  },
  settingsInfo: {
    flex: 1,
  },
  settingsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textGold,
    marginBottom: 2,
  },
  settingsSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  settingsLangName: {
    color: COLORS.gold,
    fontWeight: 'bold',
  },
  changeLangBtn: {
    backgroundColor: 'rgba(212, 175, 55, 0.18)',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  changeLangBtnText: {
    color: COLORS.goldLight,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
