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
    const iconProps = { size: 22, color: COLORS.gold };
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
          <Text style={[styles.cardTitle, { letterSpacing: isEnglish ? 0.35 : 0.2 }]}>
            {displayTitle}
          </Text>
          {item.featured && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{t('featuredBadge')}</Text>
            </View>
          )}
        </View>
        <Text style={[styles.subtitle, { letterSpacing: isEnglish ? 0.25 : 0.1 }]}>
          {displaySubtitle}
        </Text>
      </View>
      <ChevronRight size={20} color={COLORS.gold} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1209',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: 'rgba(212, 175, 55, 0.22)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  featuredCard: {
    borderColor: 'rgba(212, 175, 55, 0.55)',
    backgroundColor: '#24180C',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: 'rgba(212, 175, 55, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
    borderWidth: 1.2,
    borderColor: 'rgba(212, 175, 55, 0.32)',
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
  cardTitle: {
    fontSize: 16.5,
    fontWeight: '700',
    color: '#FFE29A', // Brilliant sacred temple gold
    flex: 1,
    lineHeight: 22,
  },
  subtitle: {
    fontSize: 12.5,
    color: '#D4C4B2', // Warm readable champagne tone
    lineHeight: 18,
    marginTop: 1,
  },
  badge: {
    backgroundColor: 'rgba(249, 115, 22, 0.18)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.45)',
    marginLeft: 8,
  },
  badgeText: {
    color: '#FFB84D',
    fontSize: 10.5,
    fontWeight: '700',
  },
});
