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
import { COLORS, FONTS } from '../../constants/theme';
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
import { useLanguage } from '../../context/LanguageContext';
import { 
  getPoojaTitle, 
  getPoojaSubtitle, 
  getSectionTitle, 
  getSectionDescription, 
  getMantraMeaning, 
  getMantraDisplay 
} from '../../locales/poojaTranslations';

export default function PoojaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [fontSize, setFontSize] = useState(18);
  const [bellRung, setBellRung] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<number, boolean>>({});

  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  const currentIndex = POOJA_CATEGORIES.findIndex(item => item.id === id);
  const pooja = currentIndex !== -1 ? POOJA_CATEGORIES[currentIndex] : null;

  const previousPooja = currentIndex > 0 ? POOJA_CATEGORIES[currentIndex - 1] : null;
  const nextPooja = currentIndex < POOJA_CATEGORIES.length - 1 ? POOJA_CATEGORIES[currentIndex + 1] : null;

  if (!pooja) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>{t('poojaNotFound')}</Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>{t('goBack')}</Text>
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

  const currentTitle = getPoojaTitle(pooja, isEnglish);
  const currentSubtitle = getPoojaSubtitle(pooja, isEnglish);

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Stack.Screen 
        options={{ 
          title: currentTitle,
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
              <Text style={styles.stepBadgeText}>
                {t('stepCounter')} {currentIndex + 1} / {POOJA_CATEGORIES.length}
              </Text>
            </View>
          </View>

          <Text 
            style={[
              styles.bannerTitle, 
              { 
                fontFamily: isEnglish ? FONTS.heading : undefined,
                letterSpacing: isEnglish ? 0.4 : 0.2 
              }
            ]}
          >
            {currentTitle}
          </Text>
          <Text 
            style={[
              styles.bannerSubtitle, 
              { 
                fontFamily: isEnglish ? FONTS.devotionalSerif : undefined,
                letterSpacing: isEnglish ? 0.25 : 0.1 
              }
            ]}
          >
            {currentSubtitle}
          </Text>
        </View>

        {bellRung && (
          <View style={styles.bellAlert}>
            <Text style={styles.bellAlertText}>{t('bellRungAlert')}</Text>
          </View>
        )}

        {/* Accordion Pooja Sections */}
        {pooja.sections.map((section, sIndex) => {
          const isCollapsed = collapsedSections[sIndex] || false;
          const sectionTitle = getSectionTitle(section, isEnglish);
          const sectionDesc = getSectionDescription(section, isEnglish);

          return (
            <View key={sIndex} style={styles.sectionContainer}>
              <TouchableOpacity 
                style={styles.sectionAccordionHeader} 
                onPress={() => toggleSection(sIndex)}
                activeOpacity={0.8}
              >
                <View style={styles.sectionHeaderLeft}>
                  <Sparkles size={16} color={COLORS.gold} />
                  <Text 
                    style={[
                      styles.sectionTitle,
                      { fontFamily: isEnglish ? FONTS.heading : undefined }
                    ]}
                  >
                    {sectionTitle}
                  </Text>
                </View>
                <View style={styles.accordionToggleBtn}>
                  <Text style={styles.versesCountText}>
                    {section.mantras.length} {t('versesCount')}
                  </Text>
                  {isCollapsed ? (
                    <ChevronDown size={18} color={COLORS.gold} />
                  ) : (
                    <ChevronUp size={18} color={COLORS.gold} />
                  )}
                </View>
              </TouchableOpacity>

              {!isCollapsed && (
                <View style={styles.sectionBody}>
                  {sectionDesc && (
                    <Text style={styles.sectionDescription}>{sectionDesc}</Text>
                  )}

                  <View style={styles.mantrasList}>
                    {section.mantras.map((mantra, mIndex) => {
                      const isSpecial = mantra.id === 'km-ayyappa-special';
                      const meaningText = getMantraMeaning(mantra, isEnglish);
                      const displayMainText = isEnglish 
                        ? getMantraDisplay(mantra, true) 
                        : mantra.telugu;

                      if (isSpecial) {
                        return (
                          <View key={mantra.id || mIndex} style={styles.specialCard}>
                            <View style={styles.specialHeader}>
                              <Flame size={18} color={COLORS.flameOrange} />
                              <Text style={styles.specialBadgeText}>{t('specialPrayerBadge')}</Text>
                              <Flame size={18} color={COLORS.flameOrange} />
                            </View>
                            <Text style={[styles.specialTeluguText, { fontSize: fontSize + 1, lineHeight: (fontSize + 1) * 1.75 }]}>
                              {displayMainText}
                            </Text>
                            {isEnglish && (
                              <Text style={[styles.mantraTeluguSub, { fontSize: Math.max(13, fontSize - 3), textAlign: 'center', marginTop: 8 }]}>
                                {mantra.telugu}
                              </Text>
                            )}
                          </View>
                        );
                      }

                      return (
                        <View key={mantra.id || mIndex} style={styles.mantraCard}>
                          <Text 
                            style={[
                              styles.mantraTelugu, 
                              { 
                                fontSize, 
                                lineHeight: fontSize * 1.65, 
                                letterSpacing: isEnglish ? 0.35 : 0.2,
                                fontFamily: isEnglish ? FONTS.devotionalSerif : undefined,
                              }
                            ]}
                          >
                            {displayMainText}
                          </Text>

                          {/* Show original Telugu script as reverent subtext when in English mode */}
                          {isEnglish && mantra.telugu !== displayMainText && (
                            <Text style={[styles.mantraTeluguSub, { fontSize: Math.max(12, fontSize - 4) }]}>
                              {mantra.telugu}
                            </Text>
                          )}

                          {meaningText && (
                            <View style={styles.meaningBox}>
                              <Text style={[styles.meaningLabel, { fontFamily: isEnglish ? FONTS.heading : undefined }]}>
                                {t('meaningLabel')}
                              </Text>
                              <Text 
                                style={[
                                  styles.meaningText, 
                                  { 
                                    fontSize: Math.max(12.5, fontSize - 3.5), 
                                    letterSpacing: isEnglish ? 0.25 : 0.1,
                                    fontFamily: isEnglish ? FONTS.devotionalSerif : undefined,
                                    lineHeight: 22,
                                  }
                                ]}
                              >
                                {meaningText}
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
                <Text style={styles.navBtnSub}>{t('previousPooja')}</Text>
                <Text 
                  style={[
                    styles.navBtnMain,
                    { fontFamily: isEnglish ? FONTS.heading : undefined }
                  ]} 
                  numberOfLines={1}
                >
                  {getPoojaTitle(previousPooja, isEnglish)}
                </Text>
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
                <Text style={styles.navBtnSub}>{t('nextPooja')}</Text>
                <Text 
                  style={[
                    styles.navBtnMain,
                    { fontFamily: isEnglish ? FONTS.heading : undefined }
                  ]} 
                  numberOfLines={1}
                >
                  {getPoojaTitle(nextPooja, isEnglish)}
                </Text>
              </View>
              <ChevronRight size={18} color={COLORS.textGold} />
            </TouchableOpacity>
          )}
        </View>

        {/* Final Footnote */}
        <View style={styles.footnote}>
          <Text style={styles.footnoteText}>
            {t('footnoteBlessing')}
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
    padding: 16,
    paddingBottom: 70,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: COLORS.textMuted,
    fontSize: 16,
    marginBottom: 16,
  },
  backBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gold,
  },
  backBtnText: {
    color: COLORS.gold,
    fontWeight: 'bold',
  },
  bellBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gold,
    marginRight: 8,
  },
  bellBtnActive: {
    backgroundColor: COLORS.gold,
  },
  banner: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepBadge: {
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  stepBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.gold,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFE29A',
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: 13.5,
    color: '#D4C4B2',
    lineHeight: 19,
  },
  bellAlert: {
    backgroundColor: '#2A1805',
    borderWidth: 1,
    borderColor: COLORS.gold,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  bellAlertText: {
    color: COLORS.textGold,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
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
    fontSize: 15.5,
    fontWeight: 'bold',
    color: '#FFE29A',
    flex: 1,
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
  mantraTeluguSub: {
    color: COLORS.textMuted,
    marginTop: 6,
    fontStyle: 'normal',
    opacity: 0.85,
  },
  meaningBox: {
    marginTop: 10,
    backgroundColor: 'rgba(212, 175, 55, 0.08)',
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.gold,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
  },
  meaningLabel: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#FFE29A',
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  meaningText: {
    color: '#DDD0BE',
    lineHeight: 20,
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
