import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { COLORS, FONTS } from '../../constants/theme';
import { RotateCcw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react-native';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { useLanguage } from '../../context/LanguageContext';
import { getMantraDisplay } from '../../locales/poojaTranslations';

export default function JapaCounterScreen() {
  const [count, setCount] = useState(0);
  const [completedRounds, setCompletedRounds] = useState(0);
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  // Get Sharanu Gosha mantras list
  const sharanuData = POOJA_CATEGORIES.find(c => c.id === 'sharanu-gosha');
  const mantras = sharanuData?.sections[0]?.mantras || [];
  const totalTarget = 108;

  const currentMantraIndex = count > 0 ? (count - 1) % (mantras.length || 1) : 0;
  const currentMantra = mantras[currentMantraIndex] || {
    id: 'sg-default',
    telugu: 'స్వామియే శరణం అయ్యప్ప',
    transliteration: 'Swamiye Saranam Ayyappa'
  };

  const handleIncrement = () => {
    if (count + 1 >= totalTarget) {
      setCount(0);
      setCompletedRounds(prev => prev + 1);
    } else {
      setCount(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const progressPercentage = Math.min(100, Math.round((count / totalTarget) * 100));

  const displayMantra = isEnglish 
    ? getMantraDisplay(currentMantra, true) 
    : currentMantra.telugu;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title={t('japaTitle')} 
        subtitle={t('japaSubtitle')}
      />
      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Rounds Completed Stats */}
        <View style={styles.statsCard}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>{t('completedMalas')}</Text>
            <Text style={styles.statValue}>{completedRounds}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>{t('target')}</Text>
            <Text style={styles.statValue}>{t('times108')}</Text>
          </View>
        </View>

        {/* Current Active Mantra Card */}
        <View style={styles.mantraDisplayCard}>
          <View style={styles.mantraBadge}>
            <Sparkles size={14} color={COLORS.gold} />
            <Text style={styles.mantraBadgeText}>{t('chantNumber')} #{count > 0 ? count : 1}</Text>
          </View>
          <Text 
            style={[
              styles.mantraTelugu,
              { 
                fontFamily: isEnglish ? FONTS.devotionalSerif : undefined,
                letterSpacing: isEnglish ? 0.4 : 0.2 
              }
            ]}
          >
            {displayMantra}
          </Text>
          {isEnglish && currentMantra.telugu !== displayMantra && (
            <Text style={styles.mantraSubline}>{currentMantra.telugu}</Text>
          )}
        </View>

        {/* Big Tap Area for Counting */}
        <TouchableOpacity 
          style={styles.counterCircle} 
          onPress={handleIncrement}
          activeOpacity={0.7}
        >
          <View style={styles.counterInnerBox}>
            <Text style={styles.countNumber}>{count}</Text>
            <Text style={styles.countSubtext}>/ 108</Text>
            <Text style={styles.tapPrompt}>{t('tapToChant')}</Text>
          </View>
        </TouchableOpacity>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
          </View>
          <Text style={styles.progressLabel}>
            {count} / 108 {t('completedProgress')} ({progressPercentage}%)
          </Text>
        </View>

        {/* Control Buttons */}
        <View style={styles.controlRow}>
          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={handleDecrement}
            disabled={count === 0}
          >
            <ChevronLeft size={20} color={count === 0 ? COLORS.textMuted : COLORS.textGold} />
            <Text style={[styles.iconBtnText, count === 0 && styles.disabledText]}>
              {t('btnPrevious')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <RotateCcw size={18} color={COLORS.accentRed} />
            <Text style={styles.resetBtnText}>{t('btnReset')}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={handleIncrement}
          >
            <Text style={styles.iconBtnText}>{t('btnNext')}</Text>
            <ChevronRight size={20} color={COLORS.textGold} />
          </TouchableOpacity>
        </View>

        {/* Tip Box */}
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>
            {t('japaTip')}
          </Text>
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
    alignItems: 'center',
  },
  statsCard: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: COLORS.surfaceBorder,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  mantraDisplayCard: {
    width: '100%',
    backgroundColor: '#1E1408',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  mantraBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  mantraBadgeText: {
    color: COLORS.goldLight,
    fontSize: 12,
    fontWeight: 'bold',
  },
  mantraTelugu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF2C6',
    textAlign: 'center',
    lineHeight: 26,
  },
  mantraSubline: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 6,
    opacity: 0.85,
  },
  counterCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#181008',
    borderWidth: 4,
    borderColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 20,
  },
  counterInnerBox: {
    alignItems: 'center',
  },
  countNumber: {
    fontSize: 54,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  countSubtext: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: -4,
  },
  tapPrompt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.gold,
    marginTop: 6,
    letterSpacing: 0.5,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.surface,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
  iconBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  iconBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  disabledText: {
    color: COLORS.textMuted,
  },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  resetBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.accentRed,
  },
  tipCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    width: '100%',
  },
  tipText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
    textAlign: 'center',
  },
});
