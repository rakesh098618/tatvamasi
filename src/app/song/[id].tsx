import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { FontSizeControls } from '../../components/FontSizeControls';
import { COLORS } from '../../constants/theme';
import { SONGS } from '../../data/songsData';
import { Music, Flame } from 'lucide-react-native';

export default function SongScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const song = SONGS.find(item => item.id === id);
  const [fontSize, setFontSize] = useState(19);

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Stack.Screen 
        options={{ 
          title: song?.title ?? 'పాటలు', 
          headerBackTitle: 'వెనుకకు',
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
              <Text style={styles.badgeText}>భక్తి గీతమ్</Text>
              <Flame size={14} color={COLORS.flameOrange} />
            </View>
            <Text style={styles.title}>{song.title}</Text>
          </View>

          {/* Lyrics Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Music size={16} color={COLORS.gold} />
              <Text style={styles.cardHeaderLabel}>సాహిత్యం</Text>
              <Music size={16} color={COLORS.gold} />
            </View>
            <View style={styles.divider} />
            <Text style={[styles.lyrics, { fontSize, lineHeight: fontSize * 1.85 }]}>
              {song.lyrics}
            </Text>
          </View>

          {/* Footer Verse */}
          <View style={styles.footerBox}>
            <Text style={styles.footerText}>
              || స్వామియే శరణం అయ్యప్ప ||
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>పాట కనుగొనబడలేదు.</Text>
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
    paddingBottom: 40 
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
    marginTop: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
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
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 10,
  },
  footerText: {
    color: COLORS.goldDark,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: { 
    color: COLORS.textPrimary, 
    textAlign: 'center', 
    fontSize: 16,
  },
});
