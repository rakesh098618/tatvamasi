import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { POOJA_CATEGORIES } from '../../data/poojaData';
import { COLORS } from '../../constants/theme';
import { FontSizeControls } from '../../components/FontSizeControls';
import { 
  Bell, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight,
  Flame
} from 'lucide-react-native';

export default function PoojaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [fontSize, setFontSize] = useState(18);
  const [bellRung, setBellRung] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<number, boolean>>({});

  const currentIndex = POOJA_CATEGORIES.findIndex(item => item.id === id);
  const pooja = currentIndex !== -1 ? POOJA_CATEGORIES[currentIndex] : null;

  const previousPooja = currentIndex > 0 ? POOJA_CATEGORIES[currentIndex - 1] : null;
  const nextPooja = currentIndex < POOJA_CATEGORIES.length - 1 ? POOJA_CATEGORIES[currentIndex + 1] : null;

  if (!pooja) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>పూజా క్రమం కనుగొనబడలేదు.</Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>వెనుకకు వెళ్ళండి</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleRingBell = () => {
    setBellRung(true);
    setTimeout(() => {
      setBellRung(false);
    }, 1600);
  };

  const toggleSection = (index: number) => {
    setCollapsedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const navigateToPooja = (targetId: string) => {
    router.replace({
      pathname: '/pooja/[id]',
      params: { id: targetId }
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Stack.Screen 
        options={{ 
          title: pooja.titleTelugu,
          headerRight: () => (
            <TouchableOpacity 
              style={[styles.bellBtn, bellRung && styles.bellBtnActive]} 
              onPress={handleRingBell}
              activeOpacity={0.7}
            >
              <Bell size={20} color={bellRung ? '#FFF' : COLORS.textGold} />
            </TouchableOpacity>
          )
        }} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Banner with step badge and subtitle */}
        <View style={styles.banner}>
          <View style={styles.bannerHeaderRow}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>క్రమ సంఖ్య {currentIndex + 1} / {POOJA_CATEGORIES.length}</Text>
            </View>
          </View>

          <Text style={styles.bannerTitle}>{pooja.titleTelugu}</Text>
          <Text style={styles.bannerSubtitle}>{pooja.subtitle}</Text>
        </View>

        {bellRung && (
          <View style={styles.bellAlert}>
            <Text style={styles.bellAlertText}>🔔 ఓం స్వామియే శరణం అయ్యప్ప! 🪔</Text>
          </View>
        )}

        {/* Accordion Pooja Sections */}
        {pooja.sections.map((section, sIndex) => {
          const isCollapsed = collapsedSections[sIndex] || false;
          return (
            <View key={sIndex} style={styles.sectionContainer}>
              <TouchableOpacity 
                style={styles.sectionAccordionHeader} 
                onPress={() => toggleSection(sIndex)}
                activeOpacity={0.8}
              >
                <View style={styles.sectionHeaderLeft}>
                  <Sparkles size={16} color={COLORS.gold} />
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                <View style={styles.accordionToggleBtn}>
                  <Text style={styles.versesCountText}>{section.mantras.length} శ్లోకాలు</Text>
                  {isCollapsed ? (
                    <ChevronDown size={18} color={COLORS.gold} />
                  ) : (
                    <ChevronUp size={18} color={COLORS.gold} />
                  )}
                </View>
              </TouchableOpacity>

              {!isCollapsed && (
                <View style={styles.sectionBody}>
                  {section.description && (
                    <Text style={styles.sectionDescription}>{section.description}</Text>
                  )}

                  <View style={styles.mantrasList}>
                    {section.mantras.map((mantra, mIndex) => {
                      const isSpecial = mantra.id === 'km-ayyappa-special';

                      if (isSpecial) {
                        return (
                          <View key={mantra.id || mIndex} style={styles.specialCard}>
                            <View style={styles.specialHeader}>
                              <Flame size={18} color={COLORS.flameOrange} />
                              <Text style={styles.specialBadgeText}>శ్రీ అయ్యప్ప విశేష క్షమాపణ ప్రార్థన</Text>
                              <Flame size={18} color={COLORS.flameOrange} />
                            </View>
                            <Text style={[styles.specialTeluguText, { fontSize: fontSize + 1, lineHeight: (fontSize + 1) * 1.75 }]}>
                              {mantra.telugu}
                            </Text>
                          </View>
                        );
                      }

                      return (
                        <View key={mantra.id || mIndex} style={styles.mantraCard}>
                          <Text style={[styles.mantraTelugu, { fontSize, lineHeight: fontSize * 1.6 }]}>
                            {mantra.telugu}
                          </Text>

                          {mantra.meaning && (
                            <View style={styles.meaningBox}>
                              <Text style={styles.meaningLabel}>భావము:</Text>
                              <Text style={[styles.meaningText, { fontSize: Math.max(12, fontSize - 4) }]}>
                                {mantra.meaning}
                              </Text>
                            </View>
                          )}
                        </View>
                      );
                    })}
                  </View>
                </View>
              )}
            </View>
          );
        })}

        {/* Step-by-Step Bottom Navigation Row */}
        <View style={styles.navRow}>
          {previousPooja ? (
            <TouchableOpacity 
              style={styles.navBtn} 
              onPress={() => navigateToPooja(previousPooja.id)}
            >
              <ChevronLeft size={18} color={COLORS.textGold} />
              <View>
                <Text style={styles.navBtnSub}>మునుపటిది</Text>
                <Text style={styles.navBtnMain} numberOfLines={1}>{previousPooja.titleTelugu}</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ flex: 1 }} />
          )}

          {nextPooja && (
            <TouchableOpacity 
              style={[styles.navBtn, styles.navBtnRight]} 
              onPress={() => navigateToPooja(nextPooja.id)}
            >
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.navBtnSub}>తరువాతి పూజ</Text>
                <Text style={styles.navBtnMain} numberOfLines={1}>{nextPooja.titleTelugu}</Text>
              </View>
              <ChevronRight size={18} color={COLORS.textGold} />
            </TouchableOpacity>
          )}
        </View>

        {/* Final Footnote */}
        <View style={styles.footnote}>
          <Text style={styles.footnoteText}>
            || శ్రీ హరిహరసుత ఆనందచిత్తన్ అయ్యప్ప స్వామినే నమః ||{'\n'}
            సర్వం అయ్యప్పార్పణమస్తు
          </Text>
        </View>

      </ScrollView>

      {/* Fixed Side Floating Font Size Controls (A- [size] A+) */}
      <FontSizeControls 
        fontSize={fontSize}
        onIncrease={() => setFontSize(prev => Math.min(28, prev + 2))}
        onDecrease={() => setFontSize(prev => Math.max(14, prev - 2))}
      />
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
    paddingTop: 12,
    paddingBottom: 40,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  banner: {
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 8,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepBadge: {
    backgroundColor: COLORS.surfaceLight,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  stepBadgeText: {
    color: COLORS.textGold,
    fontSize: 11,
    fontWeight: '700',
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  metaBadgeText: {
    color: COLORS.goldLight,
    fontSize: 11,
    fontWeight: '600',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textGold,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  bellBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginRight: 6,
  },
  bellBtnActive: {
    backgroundColor: COLORS.primaryDark,
  },
  bellAlert: {
    backgroundColor: 'rgba(249, 115, 22, 0.2)',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.flameOrange,
    alignItems: 'center',
    marginBottom: 12,
  },
  bellAlertText: {
    color: COLORS.primaryLight,
    fontWeight: 'bold',
    fontSize: 14,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-end',
    marginBottom: 14,
    paddingVertical: 4,
  },
  toggleText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  sectionContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 14,
    overflow: 'hidden',
  },
  sectionAccordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: COLORS.surfaceLight,
  },
  sectionHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  accordionToggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  versesCountText: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  sectionBody: {
    padding: 14,
  },
  sectionDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  mantrasList: {
    gap: 12,
  },
  specialCard: {
    backgroundColor: '#1E1408',
    borderRadius: 14,
    padding: 18,
    borderWidth: 2,
    borderColor: COLORS.gold,
    shadowColor: COLORS.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 8,
  },
  specialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.4)',
  },
  specialBadgeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.goldLight,
    letterSpacing: 0.5,
  },
  specialTeluguText: {
    color: '#FFF2C6',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mantraCard: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  mantraTelugu: {
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  mantraTransliteration: {
    color: COLORS.goldLight,
    fontStyle: 'italic',
    marginTop: 8,
    lineHeight: 20,
  },
  meaningBox: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.gold,
  },
  meaningLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.gold,
    marginBottom: 2,
  },
  meaningText: {
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  completedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.surface,
    borderWidth: 1.5,
    borderColor: COLORS.goldDark,
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  completedBtnActive: {
    backgroundColor: COLORS.accentGreen,
    borderColor: COLORS.accentGreen,
  },
  completedBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  completedBtnTextActive: {
    color: '#FFF',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 20,
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.surface,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  navBtnRight: {
    justifyContent: 'flex-end',
  },
  navBtnSub: {
    fontSize: 10,
    color: COLORS.textMuted,
  },
  navBtnMain: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textGold,
    maxWidth: 130,
  },
  footnote: {
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: COLORS.surfaceBorder,
  },
  footnoteText: {
    textAlign: 'center',
    color: COLORS.textGold,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '600',
  },
});
