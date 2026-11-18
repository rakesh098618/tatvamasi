import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PoojaCategory } from '../types';
import { COLORS } from '../constants/theme';
import { 
  ChevronRight, 
  Sparkles, 
  Sun, 
  Flame, 
  Crown, 
  HeartHandshake, 
  BookOpen, 
  Music, 
  ShieldCheck
} from 'lucide-react-native';
import { useLanguage } from '../context/LanguageContext';
import { getPoojaTitle, getPoojaSubtitle } from '../locales/poojaTranslations';

interface PoojaCardProps {
  item: PoojaCategory;
  onPress: () => void;
}

export const PoojaCard: React.FC<PoojaCardProps> = ({ item, onPress }) => {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  const renderIcon = () => {
    const iconProps = { size: 24, color: COLORS.gold };
    switch (item.icon) {
      case 'Sun': return <Sun {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      case 'Crown': return <Crown {...iconProps} />;
      case 'HeartHandshake': return <HeartHandshake {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Music': return <Music {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  const displayTitle = getPoojaTitle(item, isEnglish);
  const displaySubtitle = getPoojaSubtitle(item, isEnglish);

  return (
    <TouchableOpacity 
      style={[styles.card, item.featured && styles.featuredCard]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.titleTelugu}>
            {displayTitle}
          </Text>
          {item.featured && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{t('featuredBadge')}</Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle}>{displaySubtitle}</Text>
      </View>
      <ChevronRight size={20} color={COLORS.gold} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  featuredCard: {
    borderColor: COLORS.goldDark,
    backgroundColor: COLORS.surfaceLight,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
    flexShrink: 0,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  titleTelugu: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    flex: 1,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 12.5,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  badge: {
    backgroundColor: 'rgba(212, 175, 55, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gold,
    marginLeft: 8,
  },
  badgeText: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: 'bold',
  },
});
