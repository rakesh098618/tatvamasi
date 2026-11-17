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
  ShieldCheck,
  Clock
} from 'lucide-react-native';

interface PoojaCardProps {
  item: PoojaCategory;
  onPress: () => void;
}

export const PoojaCard: React.FC<PoojaCardProps> = ({ item, onPress }) => {
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
          <Text style={styles.titleTelugu}>{item.titleTelugu}</Text>
          {item.featured && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>ముఖ్యమైనది</Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.metaRow}>
          <Clock size={12} color={COLORS.textMuted} />
          <Text style={styles.durationText}>~{item.durationMinutes} నిమిషాలు</Text>
        </View>
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
    minWidth: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 4,
  },
  titleTelugu: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  badge: {
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    flexShrink: 0,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 6,
    lineHeight: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  durationText: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
});

