import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Header } from '../../components/Header';
import { COLORS } from '../../constants/theme';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Volume2 } from 'lucide-react-native';
import { POOJA_CATEGORIES } from '../../data/poojaData';

export default function JapaCounterScreen() {
  const [count, setCount] = useState(0);
  const [completedRounds, setCompletedRounds] = useState(0);

  // Get Sharanu Gosha mantras list
  const sharanuData = POOJA_CATEGORIES.find(c => c.id === 'sharanu-gosha');
  const mantras = sharanuData?.sections[0]?.mantras || [];
  const totalTarget = 108;

  const currentMantraIndex = count > 0 ? (count - 1) % mantras.length : 0;
  const currentMantra = mantras[currentMantraIndex] || {
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

  const progressPercentage = Math.min(100, Math.round((count / totalTarget) * 108));

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="108 శరణు ఘోష కౌంటర్" 
        subtitle="డిజిటల్ జపమాల & నామస్మరణ"
      />
      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Rounds Completed Stats */}
        <View style={styles.statsCard}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>పూర్తయిన మాలలు</Text>
            <Text style={styles.statValue}>{completedRounds}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>లక్ష్యం</Text>
            <Text style={styles.statValue}>108 సార్లు</Text>
          </View>
        </View>

        {/* Current Active Mantra Card */}
        <View style={styles.mantraDisplayCard}>
          <View style={styles.mantraBadge}>
            <Sparkles size={14} color={COLORS.gold} />
            <Text style={styles.mantraBadgeText}>మంత్రం #{count > 0 ? count : 1}</Text>
          </View>
          <Text style={styles.mantraTelugu}>{currentMantra.telugu}</Text>
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
            <Text style={styles.tapPrompt}>జపం చేయండి</Text>
          </View>
        </TouchableOpacity>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
          </View>
          <Text style={styles.progressLabel}>{count} / 108 పూర్తయింది ({progressPercentage}%)</Text>
        </View>

        {/* Control Buttons */}
        <View style={styles.controlRow}>
          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={handleDecrement}
            disabled={count === 0}
          >
            <ChevronLeft size={20} color={count === 0 ? COLORS.textMuted : COLORS.textGold} />
            <Text style={[styles.iconBtnText, count === 0 && styles.disabledText]}>-1 వెనుకకు</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <RotateCcw size={18} color={COLORS.accentRed} />
            <Text style={styles.resetBtnText}>రీసెట్</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={handleIncrement}
          >
            <Text style={styles.iconBtnText}>+1 ముందుకు</Text>
            <ChevronRight size={20} color={COLORS.textGold} />
          </TouchableOpacity>
        </View>

        {/* Tip Box */}
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>
            💡 చిట్కా: స్క్రీన్ మధ్యలోని బంగారు వృత్తాన్ని స్పర్శిస్తూ "స్వామియే శరణం అయ్యప్ప" అని భక్తితో జపం చేయండి.
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
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  mantraDisplayCard: {
    width: '100%',
    backgroundColor: COLORS.surfaceLight,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.goldDark,
    alignItems: 'center',
    marginBottom: 24,
  },
  mantraBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 8,
  },
  mantraBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.goldLight,
  },
  mantraTelugu: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 28,
  },
  mantraEnglish: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
  },
  counterCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#1E1408',
    borderWidth: 5,
    borderColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 10,
    marginBottom: 20,
  },
  counterInnerBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  countNumber: {
    fontSize: 62,
    fontWeight: 'bold',
    color: COLORS.textGold,
    textAlign: 'center',
    includeFontPadding: false,
    lineHeight: 68,
  },
  countSubtext: {
    fontSize: 16,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: 2,
    fontWeight: '600',
  },
  tapPrompt: {
    fontSize: 13,
    color: COLORS.goldLight,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: COLORS.surface,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 6,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  iconBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textGold,
  },
  disabledText: {
    color: COLORS.textMuted,
  },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  resetBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.accentRed,
  },
  tipCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    width: '100%',
  },
  tipText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
});

