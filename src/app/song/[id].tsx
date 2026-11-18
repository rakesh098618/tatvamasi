import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { FontSizeControls } from '../../components/FontSizeControls';
import { COLORS } from '../../constants/theme';
import { SONGS } from '../../data/songsData';
import { Music, Flame, BookOpen } from 'lucide-react-native';
import { useLanguage } from '../../context/LanguageContext';

export default function SongScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const song = SONGS.find(item => item.id === id);
  const [fontSize, setFontSize] = useState(19);

  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  const currentTitle = song 
    ? (isEnglish ? (song.titleEnglish || song.title) : song.title)
    : t('songsTitle');

  const lyricsText = song 
    ? (isEnglish ? (song.lyricsEnglish || song.lyrics) : song.lyrics)
    : '';

  const meaningText = song 
    ? (isEnglish ? (song.meaningEnglish || song.meaning) : song.meaning)
    : '';

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Stack.Screen 
        options={{ 
          title: currentTitle, 
          headerBackTitle: t('goBack'),
          headerTintColor: COLORS.textGold,
          headerStyle: {
            backgroundColor: COLORS.background,
          },
        }} 
      />

      {song ? (
        <ScrollView 
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Banner */}
          <View style={styles.headerCard}>
            <View style={styles.badgeRow}>
              <Flame size={14} color={COLORS.flameOrange} />
              <Text style={styles.badgeText}>{t('songBadge')}</Text>
              <Flame size={14} color={COLORS.flameOrange} />
            </View>
            <Text style={styles.title}>{currentTitle}</Text>
          </View>

          {/* Lyrics Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Music size={16} color={COLORS.gold} />
              <Text style={styles.cardHeaderLabel}>{t('lyricsHeader')}</Text>
              <Music size={16} color={COLORS.gold} />
            </View>
            <View style={styles.divider} />
            <Text style={[styles.lyrics, { fontSize, lineHeight: fontSize * 1.85 }]}>
              {lyricsText}
            </Text>

            {/* In English mode, show original Telugu lyrics below if different */}
            {isEnglish && song.lyrics !== lyricsText && (
              <View style={styles.teluguOriginalBox}>
                <Text style={styles.teluguOriginalTitle}>మూల సాహిత్యం (Telugu)</Text>
                <Text style={[styles.teluguOriginalText, { fontSize: Math.max(13, fontSize - 4) }]}>
                  {song.lyrics}
                </Text>
              </View>
            )}
          </View>

          {/* Devotional Meaning Card */}
          {meaningText ? (
            <View style={styles.meaningCard}>
              <View style={styles.cardHeader}>
                <BookOpen size={16} color={COLORS.gold} />
                <Text style={styles.cardHeaderLabel}>{t('meaningHeader')}</Text>
                <BookOpen size={16} color={COLORS.gold} />
              </View>
              <View style={styles.divider} />
              <Text style={[styles.meaningContent, { fontSize: Math.max(13, fontSize - 3), lineHeight: Math.max(20, (fontSize - 3) * 1.7) }]}>
                {meaningText}
              </Text>
            </View>
          ) : null}

          {/* Footer Verse */}
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>
              || {t('omSharanam')} ||
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{t('songNotFound')}</Text>
        </View>
      )}

      {/* Fixed Side Floating Font Size Controls (A- [size] A+) */}
      {song && (
        <FontSizeControls
          fontSize={fontSize}
          onIncrease={() => setFontSize(size => Math.min(30, size + 2))}
          onDecrease={() => setFontSize(size => Math.max(15, size - 2))}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  content: { 
    padding: 16, 
    paddingBottom: 70 
  },
  headerCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    alignItems: 'center',
    marginBottom: 14,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.3)',
    marginBottom: 10,
  },
  badgeText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  title: { 
    color: COLORS.textGold, 
    fontSize: 20, 
    lineHeight: 32, 
    fontWeight: '700', 
    textAlign: 'center' 
  },
  card: { 
    backgroundColor: COLORS.surface, 
    padding: 22, 
    borderRadius: 18, 
    borderWidth: 1.2, 
    borderColor: COLORS.surfaceBorder,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  meaningCard: {
    backgroundColor: '#181109',
    padding: 20,
    borderRadius: 18,
    borderWidth: 1.2,
    borderColor: 'rgba(212, 175, 55, 0.35)',
    marginTop: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  meaningContent: {
    color: '#E0D0B5',
    lineHeight: 22,
    textAlign: 'left',
  },
  teluguOriginalBox: {
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 175, 55, 0.2)',
  },
  teluguOriginalTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.gold,
    marginBottom: 8,
    textAlign: 'center',
  },
  teluguOriginalText: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.85,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cardHeaderLabel: {
    color: COLORS.goldLight,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.surfaceBorder,
    marginBottom: 16,
  },
  lyrics: { 
    color: COLORS.textPrimary, 
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  footerBox: {
    marginTop: 24,
    paddingVertical: 14,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.surfaceBorder,
  },
  footerText: {
    color: COLORS.textGold,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  error: { 
    color: COLORS.textMuted, 
    fontSize: 16 
  },
});
