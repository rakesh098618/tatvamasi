import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ChevronRight, Music, Sparkles } from 'lucide-react-native';
import { Header } from '../../components/Header';
import { SONGS } from '../../data/songsData';
import { COLORS } from '../../constants/theme';
import { useLanguage } from '../../context/LanguageContext';

export default function SongsScreen() {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  const renderHeader = () => (
    <View style={styles.bannerBox}>
      <View style={styles.bannerRow}>
        <Sparkles size={16} color={COLORS.gold} />
        <Text style={styles.bannerTitle}>{t('songsBannerTitle')}</Text>
      </View>
      <Text style={styles.bannerDesc}>
        {t('songsBannerDesc')}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Header 
        title={t('songsTitle')} 
        subtitle={`${t('songsSubtitle')} • ${SONGS.length} ${t('songsCountSuffix')}`} 
      />
      <FlatList
        data={SONGS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const displayTitle = isEnglish ? (item.titleEnglish || item.title) : item.title;
          return (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel={displayTitle}
              onPress={() => router.push({ pathname: '/song/[id]', params: { id: item.id } })}
            >
              <View style={styles.iconContainer}>
                <Music size={22} color={COLORS.gold} />
              </View>
              <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                  {displayTitle}
                </Text>
                <Text style={styles.subtitle}>
                  {t('readLyrics')}
                </Text>
              </View>
              <ChevronRight size={20} color={COLORS.gold} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  list: { 
    paddingHorizontal: 16, 
    paddingTop: 12,
    paddingBottom: 32 
  },
  bannerBox: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 14,
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textGold,
  },
  bannerDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: COLORS.surface,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
  },
  info: { 
    flex: 1 
  },
  title: { 
    fontSize: 15, 
    fontWeight: '700', 
    color: COLORS.textGold, 
    marginBottom: 3 
  },
  subtitle: { 
    fontSize: 12, 
    color: COLORS.textSecondary 
  },
});
